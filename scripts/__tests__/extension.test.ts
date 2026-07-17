import { afterAll, describe, expect, test } from "bun:test";
import { DESIGNER_PROMPT, PLAN_ONLY_PROMPT } from "../../shared/designer-prompt.ts";
import { PACKAGE_ROOT } from "../../shared/package-paths.ts";
import { asksForApprovalPlan } from "../../features/designer-prompt/index.ts";
import { DESIGNER_SKILLS } from "../../features/designer-resources/index.ts";
import designerExtension from "../../app/pi-extension.ts";

process.env.PI_DESIGNER_MODE = "1";

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

  test("discovers package-relative skills only when enabled", () => {
    const { handlers } = makeApi();
    const result = handlers.get("resources_discover")?.({}, { cwd: process.cwd() }) as { skillPaths: string[] };
    expect(result.skillPaths).toHaveLength(5);
    expect(result.skillPaths.every((path) => path.startsWith(PACKAGE_ROOT))).toBe(true);
  });

  test("injects one current prompt and replaces a prior copy", () => {
    const { handlers } = makeApi();
    const handler = handlers.get("before_agent_start")!;
    const first = handler({ prompt: "build a page", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    const second = handler({ prompt: "build a page", systemPrompt: first.systemPrompt }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect(first.systemPrompt).toContain("[DESIGNER MODE: ACTIVE v5]");
    expect(second.systemPrompt.match(/\[DESIGNER MODE: ACTIVE v5\]/g)).toHaveLength(1);
  });

  test("uses the plan-only prompt for explicit approval requests", () => {
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.({ prompt: "Create a plan first and wait for approval.", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("plan-only turn");
    expect(result.systemPrompt).toContain("Do not create or modify project files");
    expect(result.systemPrompt).toBe(`base\n\n${PLAN_ONLY_PROMPT}`);
  });

  test("keeps intent detection explicit and provider-independent", () => {
    expect(asksForApprovalPlan("make a plan first and wait for approval")).toBe(true);
    expect(asksForApprovalPlan("build the existing plan now")).toBe(false);
    expect(DESIGNER_PROMPT).toContain("native Pi package");
    expect(DESIGNER_PROMPT).not.toContain("oh-my-pi");
  });

  test("all declared skills exist", async () => {
    for (const skill of DESIGNER_SKILLS) expect(await Bun.file(skill.file).exists()).toBe(true);
  });
});

describe("automatic design intent", () => {
  test("activates obvious design prompts without a persisted toggle", () => {
    delete process.env.PI_DESIGNER_MODE;
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.({ prompt: "Build a responsive landing page with a strong visual system.", systemPrompt: "base" }, { cwd: "/tmp/pi-designer-auto" }) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("[DESIGNER MODE: ACTIVE v5]");
  });
});

afterAll(() => { delete process.env.PI_DESIGNER_MODE; });
