import { afterAll, describe, expect, test } from "bun:test";
import { PACKAGE_ROOT } from "../../shared/package-paths.ts";
import { DESIGNER_SKILLS } from "../../features/designer-resources/index.ts";
import { DESIGN_RULES } from "../../shared/design-rules.ts";
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
  test("registers commands, rules hook, and deferred tools", () => {
    const { commands, handlers, tools } = makeApi();
    expect([...commands.keys()]).toEqual(["designer", "designer-vibe", "designer-doctor"]);
    expect(handlers.has("before_agent_start")).toBe(true);
    expect(handlers.has("session_stop")).toBe(false);
    expect(handlers.has("tool_call")).toBe(false);
    expect(handlers.has("tool_result")).toBe(false);
    expect(tools.has("designer")).toBe(true);
    expect(tools.has("design_deck")).toBe(true);
  });

  test("design rules are always injected via before_agent_start", () => {
    const { handlers } = makeApi();
    const result = handlers.get("before_agent_start")?.(
      { prompt: "refactor the API client", systemPrompt: "base" },
      { cwd: process.cwd() }
    ) as { systemPrompt: string };
    expect(result.systemPrompt).toContain("[DESIGN RULES]");
    expect(result.systemPrompt).toContain("One light source from the top");
    expect(result.systemPrompt.toLowerCase()).toContain("concentric radius");
    expect(result.systemPrompt).toContain("prefers-reduced-motion");
  });

  test("design rules replace, not stack", () => {
    const { handlers } = makeApi();
    const handler = handlers.get("before_agent_start")!;
    const first = handler({ prompt: "any prompt", systemPrompt: "base" }, { cwd: process.cwd() }) as { systemPrompt: string };
    const second = handler({ prompt: "any prompt", systemPrompt: first.systemPrompt }, { cwd: process.cwd() }) as { systemPrompt: string };
    expect((second.systemPrompt.match(/\[DESIGN RULES\]/g) || []).length).toBe(1);
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
    const result = await tool.execute("id", { skill: "style-cyberpunk-ui" }, undefined, undefined, { cwd: process.cwd() });
    const text = result.content[0].text;
    expect(text).toContain("cyberpunk");
    expect(text).not.toContain("--- designer-master");
  });

  test("designer tool has a lightweight snippet, not a full prompt injection", () => {
    const { tools } = makeApi();
    const tool = tools.get("designer")!;
    expect(tool.promptSnippet).toBeDefined();
    expect((tool.promptSnippet as string).length).toBeLessThan(120);
  });

  test("design deck tool exists with correct actions", () => {
    const { tools } = makeApi();
    const tool = tools.get("design_deck")!;
    expect(tool.name).toBe("design_deck");
    expect(tool.promptSnippet).toBeDefined();
  });

  test("design deck tool rejects unknown actions", async () => {
    const { tools } = makeApi();
    const tool = tools.get("design_deck")!;
    const result = await tool.execute("id", { action: "bogus" }, undefined, undefined, { cwd: process.cwd() });
    expect(result.content[0].text).toContain("Unknown action");
  });

  test("all declared skills exist on disk", async () => {
    for (const skill of DESIGNER_SKILLS) expect(await Bun.file(skill.file).exists()).toBe(true);
  });
});

afterAll(() => { delete process.env.PI_DESIGNER_MODE; });
