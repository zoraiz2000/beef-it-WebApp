import { Exercise, Workout } from '../types/workout';
import clientPromise from './mongodb';

// retrieves all exercises
const getExercises = async () => {
  console.log('Getting exercises');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  const exercisesResp = db.collection<Exercise>('exercises').find({});
  const exercisesArr = await exercisesResp.toArray();

  const exercises: Exercise[] = [];
  for (const e of exercisesArr) {
    const exercise = {
      name: e.name,
      muscles: e.muscles,
      equipment: e.equipment,
    };
    exercises.push(exercise);
  }

  return exercises;
};

// finds exercise with the given name
const getExercise = async (exerciseName: string) => {
  console.log('Getting exercise');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  const exercisesResp = db.collection<Exercise>('exercises').find({ name: exerciseName });
  const exercisesArr = await exercisesResp.next();

  if (exercisesArr) {
    const exercise = {
      name: exercisesArr.name,
      muscles: exercisesArr.muscles,
      equipment: exercisesArr.equipment,
    };

    return exercise;
  } else {
    return null;
  }
};

const getWorkouts = async () => {
  console.log('Getting workouts');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  const workoutsResp = db.collection<Workout>('workouts').find({});
  const workoutsArr = await workoutsResp.toArray();

  const workouts: Workout[] = [];
  for (const w of workoutsArr) {
    const workout = {
      workoutName: w.workoutName,
      creator: w.creator,
      exercises: w.exercises,
    };
    workouts.push(workout);
  }

  return workouts;
};

const addWorkout = async (workout: Workout) => {
  console.log('Adding new workout');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  const prev = await db.collection<Workout>('workouts').findOne({ workoutName: workout.workoutName });
  if (prev) {
    console.log('Cannot add workout. Workout with that name already exists.');
    return;
  }

  await db
    .collection<Workout>('workouts')
    .updateOne(workout, { $set: { workoutName: workout.workoutName, exercises: workout.exercises } });
};

const updateWorkout = async (workout: Workout) => {
  console.log('Updating workout');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  await db
    .collection<Workout>('workouts')
    .updateOne(workout, { $set: { workoutName: workout.workoutName, exercises: workout.exercises } });
};

export { getExercises, getExercise, getWorkouts, addWorkout, updateWorkout };
