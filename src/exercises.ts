import type { Exercise } from './types';

export const ALL_EXERCISES: Exercise[] = [
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

// Category mappings
export const CATEGORIES = {
  variables: [1, 2, 3],
  conditions: [4, 5, 6, 7, 8, 10, 17],
  strings: [9, 11, 12, 13],
  games: [14, 15, 16],
  loops: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
};

export function getExercisesByCategory(category: keyof typeof CATEGORIES): Exercise[] {
  const ids = CATEGORIES[category];
  return ALL_EXERCISES.filter(ex => ids.includes(ex.id));
}

