import { useMemo, useState } from "react";

/**
 * Static React site to display programming exercises.
 * - Each exercise shows: number + title, difficulty, description, and any number of example I/O codeblocks.
 * - Includes search and difficulty filters.
 * - TailwindCSS classes for styling; no external UI libs required.
 *
 * Usage: Drop this component into a React app and render <ExercisesPage />.
 */

// ---------------------------
// Data Types
// ---------------------------
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
  description: string;
  examples: Example[];
}

// ---------------------------
// Sample Data (edit/extend freely)
// ---------------------------
const EXERCISES: Exercise[] = [
  {
    id: 1,
    title: "Name Echo",
    difficulty: "Beginner",
    description:
      "Get the user's name and print it back.",
    examples: [
      { input: 'Enter your name: Niall', output: 'Niall' },
      { input: 'Enter your name: Zoe', output: 'Zoe' },
      { input: 'Enter your name: Cí', output: 'Cí' },
    ],
  },
  {
    id: 2,
    title: "Future Age",
    difficulty: "Beginner",
    description:
      "Ask the user's age and print how old they will be in ten years.",
    examples: [
      { input: 'Enter your age: 10', output: '20' },
      { input: 'Enter your age: 32', output: '42' },
      { input: 'Enter your age: 97', output: '107' },
    ],
  },
  {
    id: 3,
    title: "Birth Year",
    difficulty: "Beginner",
    description:
      "Ask what age they turn this year and print the year they were born (use 2025 as the current year).",
    examples: [
      { input: 'What age do you turn this year: 23', output: '2002' },
      { input: 'What age do you turn this year: 56', output: '1969' },
      { input: 'What age do you turn this year: 523', output: '1502' },
    ],
  },
  {
    id: 4,
    title: "Over-18 Check",
    difficulty: "Easy",
    description:
      "I am a videogame shop and want a program to check if customers can buy an over 18s game.\n\nWrite a program that asks the user their age, and says 'yes' or 'no' if they can buy the game!",
    examples: [
      { input: 'What age are you: 4', output: 'no' },
      { input: 'What age are you: 19', output: 'yes' },
      { input: 'What age are you: 18', output: 'yes' },
    ],
  },
  {
    id: 5,
    title: "Highest PEGI Rating",
    difficulty: "Easy",
    description:
      "The videogame shop now wants to know the highest rated game a customer can buy based on their age.\n\n	Write a program that asks the user their age, and prints the highest age game they can buy.\n\nThe age categories are:\n - 3,\n - 7,\n - 12,\n - 16,\n - 18.\n\nIf they are below the age of 3, print 'Nothing!'",
    examples: [
      { input: 'What age are you: 23', output: '18' },
      { input: 'What age are you: 14', output: '12' },
      { input: 'What age are you: 0', output: 'Nothing!' },
    ],
  },
  {
    id: 6,
    title: "Even or Odd",
    difficulty: "Easy",
    description:
      "Ask for a whole number and print whether it's even or odd.",
    examples: [
      { input: 'Enter a whole number: 6', output: 'even' },
      { input: 'Enter a whole number: 7', output: 'odd' },
      { input: 'Enter a whole number: 42357813', output: 'odd' },
      { input: 'Enter a whole number: 0', output: 'even' },
    ],
  },
  {
    id: 7,
    title: "Grade Converter",
    difficulty: "Medium",
    description:
      'Write a program that takes a test percentage, and gives it the correct grade.\n\nGrades:\n - 90–100 A,\n - 80–89 B,\n - 70–79 C,\n - 60–69 D,\n - below 60 F.\n\nIf an impossible result is given, it should print "Invalid".',
    examples: [
      { input: 'Enter a test result: 78', output: 'C' },
      { input: 'Enter a test result: 153', output: 'Invalid' },
    ],
  },
  {
    id: 8,
    title: "Canteen Price",
    difficulty: "Medium",
    description:
      "A canteen wants to automatically figure out how much of a discount to give their customers.\n\n	The discounts are:\n- Under 5 years old: 'Free'\n- 5-12: 'Child Price'\n- 13-17: 'Teen Price'\n- 18+ with student card: 'Student Price'\n\nIf none of these apply, there is no discount! ('Full Price')\n\n	Write a program that asks:\n- The customer's age\n- If the customer has a student card.\n",
    examples: [
      { input: 'How old are you: 4\nDo you have a student card (y/n): y', output: 'Free' },
      { input: 'How old are you: 15\nDo you have a student card (y/n): n', output: 'Teen Price' },
      { input: 'How old are you: 18\nDo you have a student card (y/n): n', output: 'Full Price' },
      { input: 'How old are you: 97\nDo you have a student card (y/n): y', output: 'Student Price' },
    ],
  },
  {
    id: 9,
    title: "Random Coin Toss",
    difficulty: "Easy",
    description:
      "Simulate a coin toss and print 'Heads' or 'Tails' randomly each run.",
    examples: [
      { input: '(no input)', output: 'Heads' },
      { input: '(no input)', output: 'Tails' },
    ],
  },
  {
    id: 10,
    title: "Random Number Guessing Game",
    difficulty: "Medium",
    description:
      "Have the computer pick a random number between 1–20.\n\nUser guesses once; print Too low / Too high / Correct!",
    examples: [
      { input: 'Guess the number (1-20): 7', output: 'Too low / Too high / Correct! (depends on secret number computer created!)' },
    ],
  },
  {
    id: 11,
    title: "Calm Down!",
    difficulty: "Easy",
    description:
      "A student has typed a whole big text, but their CAPSLOCK is stuck on!\n\nWrite a program that takes a string, and prints it all lowercase.",
    examples: [
      { input: 'I AM NOT ANGRY!', output: 'i am not angry!' },
      { input: 'PleaSE SToP SHOUting', output: 'please stop shouting' },
      { input: 'this is already lowercase', output: 'this is already lowercase' },
    ],
  },
  {
    id: 12,
    title: "Extra spaces",
    difficulty: "Easy",
    description:
      "	Somebody keeps breaking our programs by putting a bunch of spaces after all their input!\n\nWrite a program that takes input and gets rid of any extra spaces at the end.",
    examples: [
      { input: 'my name is niall             ', output: 'my name is niall' },
      { input: 'why are there so many spaces?!?!!?                                        ', output: 'why are there so many spaces?!?!!?' },
    ],
  },
  {
    id: 13,
    title: "Login Gate",
    difficulty: "Medium",
    description:
      "We have written a super secret program, but only want the admin to run it!\n\n	Write a program that asks for a username and password, and prints:\n - \"Welcome!\" if they're correct,\n - \"Access Denied.\" if they're wrong.\n\n	The admin username is \"admin\" and is case insensitive, and the password is \"c0derd0j0\".\n\nThe username isn't case sensitive either!",
    examples: [
      { input: 'username: niall\npassword: letmein123', output: 'Access Denied.' },
      { input: 'username: ADMIN\npassword: c0derd0j0', output: 'Welcome!' },
      { input: 'username: admin\npassword: c0derd0j0', output: 'Welcome!' },
    ],
  },
  {
    id: 14,
    title: "Rock, Paper, Scissors",
    difficulty: "Hard",
    description:
      "Create rock, paper scissors!\n\n	The computer should randomly pick either rock, paper or scissors.\nThe player then inputs \"rock\", \"paper\" or \"scissors\"\n\nThe player should then be told what the computer picked, and whether they win or lose!",
    examples: [
      { input: 'Rock, paper or scissors: rock', output: 'Computer chose: paper\nYou lose!' },
      { input: 'Rock, paper or scissors: paper', output: 'Computer chose: paper\nDraw!' },
      { input: 'Rock, paper or scissors: rock', output: 'Computer chose: scissors\nYou win!' },
    ]
  },
  {
    id: 15,
    title: "Penalty Shootout (Left/Center/Right)",
    difficulty: "Hard",
    description:
      "You shoot 'left', 'center', or 'right'. The keeper dives randomly.\n\nIf keeper dives the same direction, print 'Saved!'; otherwise 'Goal!'.\n\nIgnore case and spaces.",
    examples: [
      { input: 'Shoot (left/center/right): left', output: 'Keeper went right - Goal!' },
      { input: 'Shoot (left/center/right): center', output: 'Keeper went center - Saved!' },
    ],
  },
  {
    id: 16,
    title: "Rock, Paper, Scissors, Lizard, Spock",
    difficulty: "Hard",
    description:
      "Extended Rock Paper Scissors with five choices.\n\nRules:\n- rock crushes scissors,\n- scissors cuts paper,\n- paper covers rock,\n- rock crushes lizard,\n- lizard poisons Spock,\n- Spock smashes scissors,\n- scissors decapitates lizard,\n- lizard eats paper,\n- paper disproves Spock,\n- Spock vaporizes rock.\n\nTrim spaces and ignore case.",
    examples: [
      { input: 'Your choice: spock', output: 'Computer chose: scissors - You win!' },
      { input: 'Your choice: paper', output: 'Computer chose: lizard - You lose!' },
      { input: 'Your choice: rock', output: 'Computer chose: rock - Draw!' },
    ],
  },
  {
    id: 17,
    title: "Leap Year Checker",
    difficulty: "Hard",
    description:
      "Ask the user to input a year. Print 'Leap year' if it is a leap year.\n\nOtherwise print 'Not a leap year'.\n\nHint: There is a known maths solution to this problem!",
    examples: [
      { input: "Year: 2000", output: "Leap year" },
      { input: "Year: 1900", output: "Not a leap year" },
      { input: "Year: 2024", output: "Leap year" }
    ],
  },
  {
    id: 18,
    title: "Count Odd Numbers",
    difficulty: "Beginner",
    description:
      "Ask the user for five numbers, store them in a list, and count how many are odd!",
    examples: [
      { input: `Number 0: 43
Number 1: 22
Number 2: 3
Number 3: 58
Number 4: 99
`, output: `There are 3 odd numbers` },
    ],
  },
  {
    id: 19,
    title: "Reverse List",
    difficulty: "Beginner",
    description:
      "Ask the user for 6 strings and print them reversed.",
    examples: [
      { input: `string 0: hello
string 1: world
string 2: foo
string 3: bar
string 4: cat
string 5: dog`, output: `dog
cat
bar
foo
world
hello` },
    ],
  },
  {
    id: 20,
    title: "Build a Square",
    difficulty: "Beginner",
    description:
      "Using loops, print a 5 long and 5 high square to the terminal.",
    examples: [
      { input: "No Input", output: `*****
*****
*****
*****
*****` },
    ],
  },
  {
    id: 21,
    title: "Build a Square - User's Choice",
    difficulty: "Beginner",
    description:
      "Ask the user how wide they want their square to be. Then, using loops, print their square to the terminal.",
    examples: [
      { input: "How wide?: 5", output: `*****
*****
*****
*****
*****
` },
      { input: "How wide?: 7", output: `*******
*******
*******
*******
*******
*******
*******
` },
      { input: "How wide?: 3", output: `***
***
***` }
    ],
  },
  {
    id: 22,
    title: "Build a Rectangle",
    difficulty: "Easy",
    description:
      "Using loops, print a 9 wide and 3 high rectangle to the terminal.",
    examples: [
      { input: "No Input", output: `*********
*********
*********
` },
    ],
  },
  {
    id: 23,
    title: "Build a Rectangle - User's choice",
    difficulty: "Easy",
    description:
      "Ask the user how wide and high they want their rectangle. Then, using loops, print it!",
    examples: [
      { input: "How wide?: 9\nHow high?: 3", output: `*********
*********
*********
` },
  { input: "How wide?: 16\nHow high?: 2", output: `****************
****************
` },
  { input: "How wide?: 2\nHow high?: 10", output: `**
**
**
**
**
**
**
**
**
**
` },
    ],
  },
  {
    id: 24,
    title: "Build a Right-Angled Triangle",
    difficulty: "Medium",
    description:
      "Using loops, print an 8 high right-angled triangle to the terminal.",
    examples: [
      { input: "No Input", output: `*
**
***
****
*****
******
*******
********
` },
    ],
  },
  {
    id: 25,
    title: "Build a Right-Angled Triangle - User's choice",
    difficulty: "Medium",
    description:
      "Ask the user how high they want their right-angled triangle. Then, using loops, print the triangle to the terminal.",
    examples: [
      { input: "How high?: 3", output: `*
**
***
` },
  { input: "How high?: 9", output: `*
**
***
****
*****
******
*******
********
*********
` },
  { input: "How high?: 30", output: `*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
**************
***************
****************
*****************
******************
*******************
********************
*********************
**********************
***********************
************************
*************************
**************************
***************************
` },
    ],
  },
  {
    id: 26,
    title: "Empty Square!",
    difficulty: "Hard",
    description:
      "Using loops, print a 5 long and 5 high empty square to the terminal.",
    examples: [
      { input: "No Input", output: `*****
*   *
*   *
*   *
*****` },
    ],
  },
  {
    id: 27,
    title: "Empty Square - User's Choice",
    difficulty: "Hard",
    description:
      "Ask the user how wide they want their empty square to be. Then, using loops, print their empty square to the terminal.",
    examples: [
      { input: "How wide?: 5", output: `*****
*   *
*   *
*   *
*****
` },
      { input: "How wide?: 7", output: `*******
*     *
*     *
*     *
*     *
*     *
*******
` },
      { input: "How wide?: 3", output: `***
* *
***` }
    ],
  },
  {
    id: 28,
    title: "Build a Right-Angled Triangle - Right Side",
    difficulty: "Hard",
    description:
      "Ask the user how high they want their right-angled triangle. Then, using loops, print the triangle to the terminal - aligned to the right side.",
    examples: [
      { input: "How high?: 3", output: `  *
 **
***
` },
  { input: "How high?: 9", output: `        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
` },
  { input: "How high?: 30", output: `                             *
                            **
                           ***
                          ****
                         *****
                        ******
                       *******
                      ********
                     *********
                    **********
                   ***********
                  ************
                 *************
                **************
               ***************
              ****************
             *****************
            ******************
           *******************
          ********************
         *********************
        **********************
       ***********************
      ************************
     *************************
    **************************
   ***************************
  ****************************
 *****************************
******************************
` },
    ],
  },
  {
    id: 29,
    title: "Build a Saltire!",
    difficulty: "Hard",
    description:
      "A saltire is the shape of the scottish flag.\n\nIt is a square, with a cross in the middle.\n\n\nAsk the user the size of the saltire, and print it!",
    examples: [
      { input: "Saltire size: 9", output: `*********
**     **
* *   * *
*  * *  *
*   *   *
*  * *  *
* *   * *
**     **
*********` },
    ],
  }
];

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
const PageHeader = () => (
  <header className="mb-6">
    <h1 className="text-3xl font-bold tracking-tight">
      Intermediate Room: Week 2 - Conditions & Strings
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      Filter, search, and browse exercises. Click an example to copy.
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
export default function ExercisesPage() {
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
    return EXERCISES.filter((e) => {
      const inDiff = selectedDiffs.includes(e.difficulty);
      if (!inDiff) return false;
      if (!q) return true;
      const hay = normalize(e.title + "\n" + e.description);
      return hay.includes(q);
    });
  }, [query, selectedDiffs]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <PageHeader />
      <FilterBar
        value={query}
        onChange={setQuery}
        selected={selectedDiffs}
        onToggleDifficulty={onToggleDifficulty}
      />

      <div className="mb-4 text-sm text-gray-600">
        Showing {filtered.length} of {EXERCISES.length} exercises
      </div>

      <section className="grid gap-4">
        {filtered.map((ex, i) => (
          <ExerciseCard key={ex.id} exercise={ex} index={i} />
        ))}
      </section>

      <footer className="mt-8 text-center text-xs text-gray-500">
        Built for CodeClub Intermediate Room • Week 2 • Niall Ryan
      </footer>
    </main>
  );
}
