import ExercisesPage from '../ExercisesPage';
import { getExercisesByCategory } from '../exercises';

export default function OsPage() {
  return (
    <ExercisesPage
      title="OS (Operating System) Module"
      subtitle="IMPORTANT: Store all downloaded files in the one folder!"
      exercises={getExercisesByCategory('os')}
    />
  );
}
