import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function VariablesPage() {
  return (
    <ExercisesPage
      title="Variables & Basic I/O"
      subtitle="Learn the fundamentals of variables, input, and output"
      exercises={getExercisesByCategory('variables')}
    />
  );
}

