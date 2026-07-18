import { afterAll, describe, expect, test } from "bun:test";
import { PACKAGE_ROOT } from "../../shared/package-paths.ts";
import { DESIGNER_SKILLS } from "../../features/designer-resources/index.ts";
import designerExtension from "../../app/pi-extension.ts";

type Handler = (event: any, ctx: any) => unknown;

function makeApi() {
  const commands = new Map<string, Record<string, unknown>>();
  const handlers = new Map<string, Handler>();
  const tools = new Map<string, Record<string, unknown>>();
  const shortcuts = new Map<string, Record<string, unknown>>();
  const flags = new Map<string, Record<string, unknown>>();
  const renderers = new Map<string, unknown>();
  const calls: Record<string, unknown[]> = {};
  const api = {
    registerCommand(name: string, options: Record<string, unknown>) { commands.set(name, options); },
    on(event: string, handler: Handler) { handlers.set(event, handler); },
    registerTool(tool: Record<string, unknown>) { tools.set(tool.name, tool); },
    registerShortcut(key: string, options: Record<string, unknown>) { shortcuts.set(key, options); },
    registerFlag(name: string, options: Record<string, unknown>) { flags.set(name, options); },
    registerMessageRenderer(type: string, renderer: unknown) { renderers.set(type, renderer); },
    getFlag: (name: string) => flags.get(name)?.default ?? "",
    appendEntry() {},
    setSessionName(name: string) { (calls.setSessionName ??= []).push(name); },
    exec: async () => ({ stdout: "{}", stderr: "", code: 0, killed: false }),
  } as any;
  designerExtension(api);
  return { commands, handlers, tools, shortcuts, flags, renderers, calls };
}

describe("native Pi designer extension", () => {
  test("registers commands, tools, hooks, shortcuts, flags, and renderers", () => {
    const { commands, handlers, tools, shortcuts, flags, renderers } = makeApi();
    expect([...commands.keys()]).toEqual(["designer", "designer-vibe", "designer-doctor"]);
    expect(tools.has("designer")).toBe(true);
    expect(tools.has("design_deck")).toBe(true);
    expect(handlers.has("before_agent_start")).toBe(true);
    expect(handlers.has("session_start")).toBe(true);
    expect(handlers.has("turn_end")).toBe(true);
    expect(handlers.has("agent_end")).toBe(true);
    expect(handlers.has("agent_start")).toBe(true);
    expect(handlers.has("tool_execution_end")).toBe(true);
    expect(handlers.has("session_stop")).toBe(false);
    expect(shortcuts.has("ctrl+d")).toBe(true);
    expect(flags.has("design-style")).toBe(true);
    expect(renderers.has("designer-result")).toBe(true);
  });

  test("design rules are always injected", () => {
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.(
      { prompt: "fix database", systemPrompt: "base" },
      { cwd: process.cwd() }
    ) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("[DESIGN RULES]");
  });

  test("design rules replace, not stack", () => {
    const { handlers } = makeApi();
    const handler = handlers.get("before_agent_start")!;
    const first = handler({ prompt: "x", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    const second = handler({ prompt: "x", systemPrompt: first.systemPrompt }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect((second.systemPrompt.match(/\[DESIGN RULES\]/g) || []).length).toBe(1);
  });

  test("designer tool loads skill content on demand", async () => {
    const { tools } = makeApi();
    const tool = tools.get("designer")!;
    const result = await tool.execute("id", {}, undefined, undefined, { cwd: process.cwd() });
    expect(result.content[0].text).toContain("designer-master");
  });

  test("designer tool loads a single skill by name", async () => {
    const { tools } = makeApi();
    const tool = tools.get("designer")!;
    const result = await tool.execute("id", { skill: "style-cyberpunk-ui" }, undefined, undefined, { cwd: process.cwd() });
    expect(result.content[0].text).toContain("cyberpunk");
  });

  test("design deck tool exists and rejects unknown actions", async () => {
    const { tools } = makeApi();
    const tool = tools.get("design_deck")!;
    expect(tool.name).toBe("design_deck");
    const result = await tool.execute("id", { action: "bogus" }, undefined, undefined, { cwd: process.cwd() });
    expect(result.content[0].text).toContain("Unknown action");
  });

  test("design-style flag registered with string type", () => {
    const { flags } = makeApi();
    expect(flags.get("design-style")?.type).toBe("string");
  });

  test("message renderer registered for designer results", () => {
    const { renderers } = makeApi();
    expect(renderers.has("designer-result")).toBe(true);
  });

  test("all declared skills exist on disk", async () => {
    for (const skill of DESIGNER_SKILLS) expect(await Bun.file(skill.file).exists()).toBe(true);
  });
});

afterAll(() => { delete process.env.PI_DESIGNER_MODE; });
