import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function LoopsPage() {
  return (
    <ExercisesPage
      title="Lists & Loops"
      subtitle="Practice loops, lists, and pattern creation with iterations"
      exercises={getExercisesByCategory('loops')}
    />
  );
}

