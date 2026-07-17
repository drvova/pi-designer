import { type BeforeAgentStartEvent, type ExtensionAPI, type ExtensionContext } from "@mariozechner/pi-coding-agent";
import { DESIGNER_PROMPT, PLAN_ONLY_PROMPT, PROMPT_MARKER_RE } from "../../shared/designer-prompt.ts";

export function asksForApprovalPlan(prompt: string): boolean {
  if (/\b(?:implement|build|execute|apply|carry out|proceed with|go ahead with|ship)\b[\s\S]{0,25}\b(?:the|my|this|that|your|existing)\s+(?:plan|spec|design)\b|\bjust (?:build|implement|code|do) it\b|\b(?:implement|build|code) it now\b/i.test(prompt)) return false;
  return /\bwait(?:ing)?\s+for\b[\s\S]{0,25}\b(?:ap{1,2}rov|sign[- ]?off|go[- ]?ahead|green[- ]?light|confirm)|\b(?:await|pending|for|need|needs|require[sd]?|get|getting|my|your)\b[\s\S]{0,15}\bap{1,2}rov|\bap{1,2}rov\w*\b[\s\S]{0,20}\b(?:first|before)\b|\bsign[- ]?off\b|\bgo[- ]?ahead\b|\bgreen[- ]?light\b/i.test(prompt) ||
    (/\bplan\b/i.test(prompt) && /\bap{1,2}rov(?:e|es|ed|al|ing)?\b|\bconfirm(?:ation|ed|s)?\b|\bsign[- ]?off\b|\bgo[- ]?ahead\b|\bgreen[- ]?light\b/i.test(prompt)) ||
    /\bplan\b[\s\S]{0,40}\b(?:first|before|for (?:your |my )?(?:ap{1,2}roval|review|sign))/i.test(prompt) ||
    /\bbefore (?:you |we |i )?(?:implement|build|start|begin|cod|writ|develop|scaffold)|\b(?:do ?n['o]?t|don['o]?t|dont|please don['o]?t|no need to|hold off(?: on| from)?)\b[\s\S]{0,30}\b(?:implement|build|code|develop|create|scaffold|start)\b|\b(?:implement|build|code|develop|scaffold)\w*\b[\s\S]{0,15}\byet\b/i.test(prompt) ||
    /\b(?:erst|zuerst)\b[\s\S]{0,25}\b(?:plan|entwurf|konzept)|\bplan\w*\b[\s\S]{0,20}\berst\b|\bfreigabe\b|\b(?:warte|warten|abwarten)\b[\s\S]{0,25}\b(?:freigabe|genehmigung|zustimmung|best[äa]tigung|ok)\b|\bnoch\s+nicht\b[\s\S]{0,25}\b(?:umsetz|implementier|baue|bauen|programmier|entwickel|erstell)/i.test(prompt);
}

export interface PromptInjectionDependencies {
  shouldActivate(cwd: string, prompt: string): boolean;
  getVibe(cwd: string): string | undefined;
}

function promptWithVibe(prompt: string, vibe: string | undefined): string {
  return vibe ? prompt.replace("\n[/DESIGNER MODE]", `\n\n## Owner preferences\n${vibe}\nTreat these as standing user decisions.\n[/DESIGNER MODE]`) : prompt;
}

export function registerPromptInjection(pi: ExtensionAPI, dependencies: PromptInjectionDependencies): void {
  pi.on("before_agent_start", (event: BeforeAgentStartEvent, ctx: ExtensionContext) => {
    if (!dependencies.shouldActivate(ctx.cwd, event.prompt)) return;
    const prompt = promptWithVibe(asksForApprovalPlan(event.prompt) ? PLAN_ONLY_PROMPT : DESIGNER_PROMPT, dependencies.getVibe(ctx.cwd));
    const systemPrompt = event.systemPrompt.replace(PROMPT_MARKER_RE, "").trim();
    return { systemPrompt: systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt };
  });
}
