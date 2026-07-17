import { afterAll, describe, expect, test } from "bun:test";
import { PACKAGE_ROOT } from "../../shared/package-paths.ts";
import { DESIGNER_SKILLS } from "../../features/designer-resources/index.ts";
import designerExtension from "../../app/pi-extension.ts";

type Handler = (event: any, ctx: any) => unknown;

function makeApi() {
  const commands = new Map<string, Record<string, unknown>>();
  const handlers = new Map<string, Handler>();
  const tools = new Map<string, Record<string, unknown>>();
  const api = {
    registerCommand(name: string, options: Record<string, unknown>) { commands.set(name, options); },
    on(event: string, handler: Handler) { handlers.set(event, handler); },
    registerTool(tool: Record<string, unknown>) { tools.set(tool.name, tool); },
  } as any;
  designerExtension(api);
  return { commands, handlers, tools };
}

describe("native Pi designer extension", () => {
  test("registers commands, a designer tool, and no always-on hooks", () => {
    const { commands, handlers, tools } = makeApi();
    expect([...commands.keys()]).toEqual(["designer", "designer-vibe", "designer-doctor"]);
    expect(tools.has("designer")).toBe(true);
    expect(handlers.has("before_agent_start")).toBe(false);
    expect(handlers.has("resources_discover")).toBe(false);
    expect(handlers.has("session_stop")).toBe(false);
    expect(handlers.has("tool_call")).toBe(false);
  });

  test("designer tool loads skill content on demand", async () => {
    const { tools } = makeApi();
    const tool = tools.get("designer")!;
    const result = await tool.execute("id", {}, undefined, undefined, { cwd: process.cwd() });
    const text = result.content[0].text;
    expect(text).toContain("designer-master");
    expect(text).toContain("review-skill");
  });

  test("designer tool loads a single skill by name", async () => {
    const { tools } = makeApi();
    const tool = tools.get("designer")!;
    const result = await tool.execute("id", { skill: "animate" }, undefined, undefined, { cwd: process.cwd() });
    const text = result.content[0].text;
    expect(text).toContain("animate");
    expect(text).not.toContain("--- designer-master");
  });

  test("designer tool has a lightweight snippet, not a full prompt injection", () => {
    const { tools, handlers } = makeApi();
    const tool = tools.get("designer")!;
    expect(tool.promptSnippet).toBeDefined();
    expect((tool.promptSnippet as string).length).toBeLessThan(120);
    expect(handlers.size).toBe(0);
  });

  test("all declared skills exist on disk", async () => {
    for (const skill of DESIGNER_SKILLS) expect(await Bun.file(skill.file).exists()).toBe(true);
  });
});

afterAll(() => { delete process.env.PI_DESIGNER_MODE; });
