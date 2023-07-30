import { Exercise, Workout } from '../types/workout';
import { MongoClient } from 'mongodb';
import { exit } from 'process';

const populateExercises = async () => {
  try {
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('workoutsDb');

    const exercises = [
      {
        name: 'Bicycle Crunch',
        muscles: ['Abdominals'],
      },
      {
        name: 'Cable Crunch',
        muscles: ['Abdominals'],
        equipment: ['Cables'],
      },
      {
        name: 'Machine Crunch',
        muscles: ['Abdominals'],
        equipment: ['Crunch Machine'],
      },
      {
        name: 'Ab Wheel',
        muscles: ['Abdominals, Lower Back'],
        equipment: ['Ab Wheel'],
      },
      {
        name: 'Cable Hip Abduction',
        muscles: ['Abductor'],
        equipment: ['Cables'],
      },
      {
        name: 'Hip Abductor Machine',
        muscles: ['Abductor'],
        equipment: ['Hip Abductor Machine'],
      },
      {
        name: 'Cable Hip Adduction',
        muscles: ['Adductor'],
        equipment: ['Cables'],
      },
      {
        name: 'Hip Adductor Machine',
        muscles: ['Adductor'],
        equipment: ['Hip Adductor Machine'],
      },
      {
        name: 'Barbell Bicep Curl',
        muscles: ['Biceps'],
        equipment: ['Barbell', 'Squat Rack'],
      },
      {
        name: 'Cable Bicep Curl',
        muscles: ['Biceps'],
        equipment: ['Cables'],
      },
      {
        name: 'Dumbbell Bicep Curl',
        muscles: ['Biceps'],
        equipment: ['Dumbbells'],
      },
      {
        name: 'Machine Bicep Curl',
        muscles: ['Biceps'],
        equipment: ['Bicep Curl Machine'],
      },
      {
        name: 'Standing Calf Raise',
        muscles: ['Calves'],
      },
      {
        name: 'Bench Press',
        muscles: ['Pecs', 'Triceps', 'Front Delts'],
        equipment: ['Barbell', 'Bench'],
      },
      {
        name: 'Incline Bench Press',
        muscles: ['Pecs', 'Triceps', 'Front Delts'],
        equipment: ['Barbell', 'Bench'],
      },
      {
        name: 'Wrist Curl',
        muscles: ['Forearms'],
        equipment: ['Dumbbells'],
      },
      {
        name: 'Glute Ham Raise',
        muscles: ['Glutes'],
        equipment: ['Glute Machine'],
      },
      {
        name: 'Pull Ups',
        muscles: ['Lats'],
      },
      {
        name: 'Squat',
        muscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
        equipment: ['Barbell', 'Squat Rack'],
      },
      {
        name: 'Dumbbell Shoulder Press',
        muscles: ['Delts'],
        equipment: ['Dumbbells'],
      },
      {
        name: 'Face Pull',
        muscles: ['Traps'],
        equipment: ['Cables'],
      },
      {
        name: 'Triceps Pushdown',
        muscles: ['Triceps'],
        equipment: ['Cables'],
      },
      {
        name: 'Deadlift',
        muscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Lower Back', 'Lats', 'Traps', 'Brain'],
        equipment: ['Barbell'],
      },
    ];

    for (const exercise of exercises) {
      await db
        .collection<Exercise>('exercises')
        .updateOne(
          exercise,
          { $set: { name: exercise.name, muscles: exercise.muscles, equipment: exercise.equipment } },
          { upsert: true }
        );
    }

    const workouts: Workout[] = [
      {
        workoutName: 'POWER',
        creator: 'default',
        exercises: [
          {
            exerciseName: 'Bench Press',
            sets: 1,
            reps: 1,
          },
          {
            exerciseName: 'Squat',
            sets: 1,
            reps: 1,
          },
          {
            exerciseName: 'Deadlift',
            sets: 1,
            reps: 1,
          },
        ],
      },
      {
        workoutName: 'Abs Burner',
        creator: 'default',
        exercises: [
          {
            exerciseName: 'Cable Crunch',
            sets: 1,
            reps: 1,
          },
          {
            exerciseName: 'Ab Wheel',
            sets: 1,
            reps: 1,
          },
          {
            exerciseName: 'Bicycle Crunch',
            sets: 1,
            reps: 1,
          },
        ],
      },
    ];

    for (const workout of workouts) {
      await db
        .collection<Workout>('workouts')
        .updateOne(
          workout,
          { $set: { workoutName: workout.workoutName, exercises: workout.exercises } },
          { upsert: true }
        );
    }
  } catch (e) {
    console.log('You have mongo issues', e);
    exit();
  }
};

populateExercises()
  .then(() => {
    console.log('Added exercises');
    exit();
  })
  .catch((e) => {
    console.log('something failed: ', e);
    exit();
  });
