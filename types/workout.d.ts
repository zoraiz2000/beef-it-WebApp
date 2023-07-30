type Workout = {
  workoutName: string;
  creator: string;
  exercises: WorkoutExercise[];
};

type WorkoutExercise = {
  exerciseName: string;
  reps: number;
  sets: number;
  rest?: number;
  weight?: number;
};

// Type that will be stored in our database
type Exercise = {
  name: string;
  muscles?: string[];
  equipment?: string[];
};

export { Workout, Exercise };
