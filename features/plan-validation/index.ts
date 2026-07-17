export interface PlanCheckResult { ok: boolean; violations: string[]; }

export function planChecks(userPrompt: string, response: string): PlanCheckResult {
  const violations: string[] = [];
  if (!response.trim()) violations.push("The approval plan is missing.");
  const wordCount = response.trim().split(/\s+/).filter(Boolean).length;
  const detailed = /\b(?:detailed|in[- ]?depth|comprehensive|thorough|exhaustive|granular|step[- ]by[- ]step|long[- ]form)\b[\s\S]{0,25}\b(?:spec|specification|plan|breakdown|document|write[- ]?up|proposal|blueprint|outline|rfc)\b|\b(?:detailed specification|full spec)\b/i.test(userPrompt);
  if (wordCount > 800 && !detailed) violations.push("The approval plan is long; aim for about 700 words and stay under 800.");
  if (/\b(?:various|multiple|several|many|multi[- ]?page)\s+(?:pages?|routes?)\b|\bpages?\b[\s\S]{0,80}\b(?:various|multiple|several|many)\b/i.test(userPrompt)) {
    const routes = new Set([...response.matchAll(/`(\/(?:[a-z0-9][a-z0-9/_-]*)?)`/gi)].map((match) => match[1]));
    if (/\bsingle[- ]page\b/i.test(response)) violations.push("The user requested multiple pages, but the plan proposes a single page.");
    if (routes.size < 2) violations.push("The user requested multiple pages, but fewer than two concrete routes are named.");
  }
  if (!/\b(?:form|signup|contact|newsletter|email capture)\b/i.test(userPrompt) && /\b(?:add|include|build|feature|animated|minimal|signup|contact|connect|newsletter)\b[\s\S]{0,30}\bform\b/i.test(response)) violations.push("The plan adds a form without a user-supplied destination or form requirement.");
  if (!/\b(?:metric|statistic|percentage|benchmark|data point)\b/i.test(userPrompt) && /\b(?:add|include|show|display|feature|animated|floating)\b[\s\S]{0,25}\b(?:metrics?|statistics?|stats?|stat counters?|data points?)\b/i.test(response)) violations.push("The plan adds metrics or statistics without a supplied data source.");
  if (/\b(?:scroll[- ]?jacking|lenis)\b/i.test(response)) violations.push("The plan proposes scroll-jacking or Lenis instead of preserving native scroll.");
  if (/\b(?:historical timeline|timeline (?:of|showing)|AI milestones|evolution timeline)\b/i.test(response) && !/\b(?:source|verify|verification|fact[- ]?check)\b/i.test(response)) violations.push("Historical or timeline content lacks an explicit source-verification step.");
  if (/\b(?:links?|href|points?|leads?)\b[\s\S]{0,35}(?:to\s+)?[`"']?#[`"']?|\bdemo (?:link|placeholder)\b/i.test(response)) violations.push("The plan includes a dead or placeholder link instead of a real destination.");
  if (/\b(?:live|real[- ]?time)\b[\s\S]{0,50}\b(?:AI|reasoning|model output)\b/i.test(response) && !/\b(?:labelled|labeled|visible)\b[\s\S]{0,30}\bdemo\b/i.test(response)) violations.push("A scripted AI interaction is described as live without a visible demo label.");
  return { ok: violations.length === 0, violations };
}
