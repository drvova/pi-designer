import { performance } from "node:perf_hooks";
import { isDesignTask } from "../../features/design-intent/index.ts";

type Case = { prompt: string; design: boolean };

const corpus: Case[] = [
  { prompt: "Build a responsive landing page for a local bakery.", design: true },
  { prompt: "Improve the dashboard layout and mobile navigation.", design: true },
  { prompt: "Create a React component with accessible keyboard behavior.", design: true },
  { prompt: "Restyle the checkout page with a warmer color palette.", design: true },
  { prompt: "Add purposeful animation to the hero section.", design: true },
  { prompt: "Design a compact visual system for this product.", design: true },
  { prompt: "Fix the CSS overflow on the settings screen.", design: true },
  { prompt: "Review the UX of the onboarding flow.", design: true },
  { prompt: "Make the HTML page responsive at tablet width.", design: true },
  { prompt: "Refactor the API client to retry failed requests.", design: false },
  { prompt: "Add a PostgreSQL index for the orders query.", design: false },
  { prompt: "Update the CI workflow to run on Node 22.", design: false },
  { prompt: "Explain why this TypeScript generic is failing.", design: false },
  { prompt: "Rotate the staging database credentials.", design: false },
  { prompt: "Implement pagination for the activity endpoint.", design: false },
  { prompt: "Investigate the memory leak in the worker.", design: false },
  { prompt: "Write unit tests for the billing service.", design: false },
  { prompt: "Optimize the image upload pipeline.", design: false },
];

const iterations = 100_000;
const timings: number[] = [];
let correct = 0;

for (let index = 0; index < 10_000; index += 1) {
  for (const item of corpus) isDesignTask(item.prompt);
}

for (let index = 0; index < iterations; index += 1) {
  const item = corpus[index % corpus.length];
  const start = performance.now();
  const result = isDesignTask(item.prompt);
  timings.push(performance.now() - start);
  if (result === item.design) correct += 1;
}

timings.sort((a, b) => a - b);
const percentile = (value: number) => timings[Math.min(timings.length - 1, Math.floor(timings.length * value))];
const totalMs = timings.reduce((sum, value) => sum + value, 0);
const accuracy = correct / iterations;
const throughput = iterations / (totalMs / 1000);

console.log(JSON.stringify({
  benchmark: "design-intent",
  corpusCases: corpus.length,
  iterations,
  accuracy,
  correct,
  incorrect: iterations - correct,
  totalMs: Number(totalMs.toFixed(3)),
  throughputPerSecond: Math.round(throughput),
  latencyMs: {
    p50: Number(percentile(0.5).toFixed(6)),
    p95: Number(percentile(0.95).toFixed(6)),
    p99: Number(percentile(0.99).toFixed(6)),
  },
}, null, 2));

if (accuracy < 0.95) process.exitCode = 1;
