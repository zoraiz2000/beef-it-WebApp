# Beef-it

## SENG-513 Group 4: Web Based Systems project.

TA Coordinator: Soroush Aali Bagi

Mubarak Adetunji - 30079740

Emmett Collings - 30076370

Ayokolade Erinle - 30076713

Jessica Hoang - 30064517 

Zoraiz Khan - 30103088

Yasmin Samantar - 30046864

## Before attempting to run this, ensure you have MongoDB installed on your system.

-- You can install MongoDB here: (https://www.mongodb.com/)

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Documentation](https://docs.mongodb.com/)

NOTE: don't worry about MongoDB Atlas, we won't be using it. Instead look into getting a local instance of a MongoDB database running for development.


## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally.

## Once MongoDB has been installed:
### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```
Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

## Running the app Instructions -- 

Download the zip file named 'sources-group-4.zip' and extract it.
Launch your terminal and change directory to the extracted folder containing all the files.

In this directory, run:
```bash
npm install
npm run dev

# or

yarn install
yarn dev
```
NOTE: If you run yarn seed:database in the command line it should put stuff in your database.

After this, the application should be up and running on [http://localhost:3000](http://localhost:3000)!

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.
