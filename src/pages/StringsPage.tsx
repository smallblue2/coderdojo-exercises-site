import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function StringsPage() {
  return (
    <ExercisesPage
      title="Strings & Random"
      subtitle="Work with text manipulation, randomization, and string methods"
      exercises={getExercisesByCategory('strings')}
    />
  );
}

