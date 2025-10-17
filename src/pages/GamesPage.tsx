import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function GamesPage() {
  return (
    <ExercisesPage
      title="Game Logic"
      subtitle="Build interactive games using conditionals and randomness"
      exercises={getExercisesByCategory('games')}
    />
  );
}

