import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Difficulty, Example, Exercise } from "./types";


// ---------------------------
// Helpers
// ---------------------------
function difficultyColor(d: Difficulty): string {
  switch (d) {
    case "Beginner":
      return "bg-emerald-100 text-emerald-700 border-emerald-300";
    case "Easy":
      return "bg-sky-100 text-sky-700 border-sky-300";
    case "Medium":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Hard":
      return "bg-rose-100 text-rose-700 border-rose-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}

function normalize(text: string): string {
  return text.toLowerCase();
}

// ---------------------------
// UI Components
// ---------------------------
type PageHeaderProps = {
  title: string;
  subtitle?: string;
};
const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <header className="mb-6">
    <div className="mb-4">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 font-medium"
      >
        <svg
          className="mr-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>
    </div>
    <h1 className="text-3xl font-bold tracking-tight">
      {title}
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      {subtitle || "Filter, search, and browse exercises. Click an example to copy."}
    </p>
  </header>
);

type FilterBarProps = {
  value: string;
  onChange: (v: string) => void;
  selected: Difficulty[];
  onToggleDifficulty: (d: Difficulty) => void;
};
function FilterBar({
  value,
  onChange,
  selected,
  onToggleDifficulty,
}: FilterBarProps) {
  const DIFFS: Difficulty[] = ["Beginner", "Easy", "Medium", "Hard"];
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
      <div className="relative w-full md:max-w-md">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by title or description..."
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2">
        {DIFFS.map((d: Difficulty) => {
          const active = selected.includes(d);
          return (
            <button
              key={d}
              onClick={() => onToggleDifficulty(d)}
              className={
                "rounded-full border px-3 py-1 text-sm transition " +
                (active
                  ? difficultyColor(d) + " ring-1 ring-offset-1"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100")
              }
              title={`Toggle ${d}`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type LabelProps = { label: string };
function Label({ label }: LabelProps) {
  return (
    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
      {label}
    </div>
  );
}

type CodeBlockProps = { code: string; label: string };
function CodeBlock({ code, label }: CodeBlockProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // ignore clipboard errors
    }
  };
  return (
    <div className="group relative">
      <Label label={label} />
      <pre className="mt-1 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-6 hidden rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 shadow-sm group-hover:block hover:bg-gray-50"
        title="Copy"
      >
        Copy
      </button>
    </div>
  );
}

type DifficultyBadgeProps = { d: Difficulty };
function DifficultyBadge({ d }: DifficultyBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor(
        d
      )}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {d}
    </span>
  );
}

type ExerciseCardProps = { exercise: Exercise; index: number };
function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const num = index + 1;
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
            {num}
          </span>
          {exercise.title}
        </h2>
        <DifficultyBadge d={exercise.difficulty} />
      </div>

      <p className="mt-2 text-gray-700 whitespace-pre-line">
        {exercise.description}
      </p>

      {exercise.file && (
        <a
          href={exercise.file}
          download
          className="text-indigo-600 underline hover:text-indigo-800 mt-2 inline-block"
        >
          Download file
        </a>
      )}


      {exercise.examples && exercise.examples.length > 0 && (
        <ol className="mt-4 space-y-4">
          {exercise.examples.map((ex: Example, i: number) => (
            <li key={i} className="space-y-2">
              <div className="text-sm font-medium text-gray-600">
                Testcase {i + 1}
              </div>
              <CodeBlock
                code={ex.input}
                label={ex.inputLabel || "Example input"}
              />
              <CodeBlock
                code={ex.output}
                label={ex.outputLabel || "Expected output"}
              />
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}

// ---------------------------
// Page
// ---------------------------
type ExercisesPageProps = {
  title: string;
  subtitle?: string;
  exercises: Exercise[];
};

export default function ExercisesPage({ title, subtitle, exercises }: ExercisesPageProps) {
  const [query, setQuery] = useState("");
  const [selectedDiffs, setSelectedDiffs] = useState<Difficulty[]>([
    "Beginner",
    "Easy",
    "Medium",
    "Hard",
  ]);

  const onToggleDifficulty = (d: Difficulty) => {
    setSelectedDiffs((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const filtered = useMemo(() => {
    const q = normalize(query);
    return exercises.filter((e) => {
      const inDiff = selectedDiffs.includes(e.difficulty);
      if (!inDiff) return false;
      if (!q) return true;
      const hay = normalize(e.title + "\n" + e.description);
      return hay.includes(q);
    });
  }, [query, selectedDiffs, exercises]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <PageHeader title={title} subtitle={subtitle} />
      <FilterBar
        value={query}
        onChange={setQuery}
        selected={selectedDiffs}
        onToggleDifficulty={onToggleDifficulty}
      />

      <div className="mb-4 text-sm text-gray-600">
        Showing {filtered.length} of {exercises.length} exercises
      </div>

      <section className="grid gap-4">
        {filtered.map((ex, i) => (
          <ExerciseCard key={ex.id} exercise={ex} index={i} />
        ))}
      </section>

      <footer className="mt-8 text-center text-xs text-gray-500">
        Built for CoderDojo Intermediate Room • Niall Ryan & Zoe Collins
      </footer>
    </main>
  );
}
