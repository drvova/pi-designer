const DESIGN_SIGNALS = [
  /\b(?:ui|ux|user interface|user experience|frontend|front[- ]end|website|webpage|landing page|dashboard|admin panel|component|design system|visual system|responsive|mobile layout|css|html|tailwind|react|vue|svelte|hero section|redesign|restyle|typography|color palette|animation|micro[- ]interaction|accessibility)\b/i,
  /\b(?:design|designer|layout|styling|style|interface|screen|page|route)\b[\s\S]{0,40}\b(?:build|create|make|improve|refactor|implement|fix|polish|review|design)\b/i,
  /\b(?:build|create|make|improve|refactor|implement|fix|polish|review)\b[\s\S]{0,40}\b(?:design|designer|layout|styling|style|interface|screen|page|route)\b/i,
];

export function isDesignTask(prompt: string): boolean {
  return DESIGN_SIGNALS.some((signal) => signal.test(prompt));
}
