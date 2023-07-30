
import { User } from '../types/user';
import clientPromise from './mongodb';


const addUser = async (user: User) => {
  console.log('Adding new user');
  const client = await clientPromise;
  const db = client.db('workoutsDb');

  const prev = await db.collection<User>('users').findOne({ userName: user.name });
  if (prev) {
    console.log('Cannot add workout. Workout with that name already exists.');
    return;
  }

  await db
    .collection<User>('users')
    .updateOne(user, { $set: { userName: user.name, userPhoneNumber: user.phonenumber,userEmailAddress: user.emailaddress } });
};



export { addUser };