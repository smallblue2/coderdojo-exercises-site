import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function ConditionsPage() {
  return (
    <ExercisesPage
      title="Conditions"
      subtitle="Master if statements, comparisons, and decision-making logic"
      exercises={getExercisesByCategory('conditions')}
    />
  );
}

