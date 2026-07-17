export type BlockType = "code" | "mermaid" | "html" | "image";

export interface Block {
  type: BlockType;
  content: string;
  language?: string;
}

export interface DesignOption {
  id: string;
  title: string;
  blocks?: Block[];
  previewHtml?: string;
  aside?: string;
}

export interface Slide {
  id: string;
  prompt: string;
  options: DesignOption[];
  columns?: number;
}

export interface OptionNote {
  slideId: string;
  optionId: string;
  note: string;
}

export type DeckAction = "present" | "generate_more" | "save" | "list" | "open" | "export" | "close";

export interface DeckSnapshot {
  slides: Slide[];
  selectedOptions: Record<string, string>;
  notes: OptionNote[];
  summary?: string;
  savedAt: string;
}

export interface DeckServerState {
  slides: Slide[];
  selectedOptions: Record<string, string>;
  notes: OptionNote[];
  summary: string;
  theme: "light" | "dark" | "auto";
  models: string[];
  thinkingLevels: string[];
  selectedModel: string;
  thinkingLevel: string;
  generating: boolean;
  lastActivity: number;
}
