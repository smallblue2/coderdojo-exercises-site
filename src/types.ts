export type Difficulty = "Beginner" | "Easy" | "Medium" | "Hard";

export interface Example {
  input: string;
  output: string;
  inputLabel?: string;
  outputLabel?: string;
}

export interface Exercise {
  id: number;
  title: string;
  difficulty: Difficulty;
  file?: string;
  description: string;
  examples: Example[];
}

