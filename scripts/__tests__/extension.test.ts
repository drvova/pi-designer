import { afterAll, describe, expect, test } from "bun:test";
import { DESIGNER_PROMPT, PLAN_ONLY_PROMPT } from "../../shared/designer-prompt.ts";
import { PACKAGE_ROOT } from "../../shared/package-paths.ts";
import { asksForApprovalPlan } from "../../features/designer-prompt/index.ts";
import { DESIGNER_SKILLS } from "../../features/designer-resources/index.ts";
import designerExtension from "../../app/pi-extension.ts";

type Handler = (event: any, ctx: any) => unknown;

function makeApi() {
  const commands = new Map<string, Record<string, unknown>>();
  const handlers = new Map<string, Handler>();
  const api = {
    registerCommand(name: string, options: Record<string, unknown>) { commands.set(name, options); },
    on(event: string, handler: Handler) { handlers.set(event, handler); },
  } as any;
  designerExtension(api);
  return { commands, handlers };
}

describe("native Pi designer extension", () => {
  test("registers native commands and supported lifecycle hooks only", () => {
    const { commands, handlers } = makeApi();
    expect([...commands.keys()]).toEqual(["designer", "designer-vibe", "designer-doctor"]);
    expect([...handlers.keys()]).toEqual(["resources_discover", "before_agent_start"]);
    expect(handlers.has("session_stop")).toBe(false);
    expect(handlers.has("tool_call")).toBe(false);
    expect(handlers.has("tool_result")).toBe(false);
  });

  test("discovers package-relative skills", () => {
    const { handlers } = makeApi();
    const result = handlers.get("resources_discover")?.({}, { cwd: process.cwd() }) as { skillPaths: string[] };
    expect(result.skillPaths).toHaveLength(5);
    expect(result.skillPaths.every((path) => path.startsWith(PACKAGE_ROOT))).toBe(true);
  });

  test("injects designer prompt by default without any toggle", () => {
    delete process.env.PI_DESIGNER_MODE;
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.({ prompt: "refactor the API client", systemPrompt: "base" }, { cwd: "/tmp/pi-designer-default-on" }) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("[DESIGNER MODE: ACTIVE v5]");
  });

  test("does not inject when explicitly disabled via PI_DESIGNER_MODE=0", () => {
    process.env.PI_DESIGNER_MODE = "0";
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.({ prompt: "build a landing page", systemPrompt: "base" }, { cwd: "/tmp/pi-designer-disabled" });
    expect(result).toBeUndefined();
    delete process.env.PI_DESIGNER_MODE;
  });

  test("replaces a prior designer prompt instead of stacking", () => {
    const { handlers } = makeApi();
    const handler = handlers.get("before_agent_start")!;
    const first = handler({ prompt: "build a page", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    const second = handler({ prompt: "build a page", systemPrompt: first.systemPrompt }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect(second.systemPrompt.match(/\[DESIGNER MODE: ACTIVE v5\]/g)).toHaveLength(1);
  });

  test("uses the plan-only prompt for explicit approval requests", () => {
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.({ prompt: "Create a plan first and wait for approval.", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("plan-only turn");
  });

  test("keeps intent detection provider-independent", () => {
    expect(asksForApprovalPlan("make a plan first and wait for approval")).toBe(true);
    expect(asksForApprovalPlan("build the existing plan now")).toBe(false);
    expect(DESIGNER_PROMPT).toContain("native Pi package");
  });

  test("all declared skills exist", async () => {
    for (const skill of DESIGNER_SKILLS) expect(await Bun.file(skill.file).exists()).toBe(true);
  });
});

afterAll(() => { delete process.env.PI_DESIGNER_MODE; });
