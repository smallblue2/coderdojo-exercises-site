import { Link } from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  exerciseCount: number;
  difficulty: string;
}

const categories: Category[] = [
  {
    id: 'variables',
    title: 'Variables & Basic I/O',
    description: 'Learn the fundamentals of variables, input, and output',
    icon: '📝',
    exerciseCount: 3,
    difficulty: 'Beginner'
  },
  {
    id: 'conditions',
    title: 'Conditions',
    description: 'Master if statements, comparisons, and decision-making logic',
    icon: '🔀',
    exerciseCount: 7,
    difficulty: 'Beginner to Medium'
  },
  {
    id: 'strings',
    title: 'Strings & Random',
    description: 'Work with text manipulation, randomization, and string methods',
    icon: '🔤',
    exerciseCount: 5,
    difficulty: 'Easy to Medium'
  },
  {
    id: 'games',
    title: 'Game Logic',
    description: 'Build interactive games using conditionals and randomness',
    icon: '🎮',
    exerciseCount: 3,
    difficulty: 'Hard'
  },
  {
    id: 'loops',
    title: 'Lists & Loops',
    description: 'Practice loops, lists, and pattern creation with iterations',
    icon: '🔁',
    exerciseCount: 11,
    difficulty: 'Beginner to Hard'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-6xl p-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CoderDojo Exercises
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a category to start practicing your programming skills
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.id}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:scale-105 hover:border-indigo-300"
            >
              <div className="absolute right-4 top-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {category.icon}
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 font-medium">
                    {category.exerciseCount} exercises
                  </span>
                  <span className="text-gray-500">
                    {category.difficulty}
                  </span>
                </div>
                
                <div className="mt-4 flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Start practicing
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>Built for CoderDojo • Intermediate Room • Niall Ryan & Zoe Collins</p>
        </footer>
      </div>
    </main>
  );
}

