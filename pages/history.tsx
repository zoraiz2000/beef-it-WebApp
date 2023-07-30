/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Nav from './components/Nav/Nav';
import { getWorkouts } from '../lib/exercise-db-provider';
import { Workout } from '../types/workout';

type HistoryProps = {
  workouts: Workout[];
};

export async function getServerSideProps() {
  try {
    const workouts = await getWorkouts();
    console.log(workouts);

    return {
      props: { workouts },
    };
  } catch (e) {
    console.error(e);
  }
}

export default function History({ workouts }: HistoryProps) {
  console.log(workouts);
  return (
    <div className="container">
      <Head>
        <title>BEEF-IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="header">
          <Nav />
        </header>

        <section className="image-section" style={{ width: '100%' }}>
          <img src="/gym.jpg" alt="Image" style={{ width: '100%' }} />
        </section>

        <section className="history-section">
          <h1>WORKOUT HISTORY</h1>

          <div className="workout">
            <h2>CHEST DAY</h2>
            <div className="container">
              <div className="exercise">
                <ul>
                  <h3>Barbell Bench Press</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Flat Dumbbell Press</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Dumbbell Incline Press</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Barbell Incline Bench Press</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 6</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Weighted Dips (Chest Version)</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 20lbs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="workout">
            <h2>LEG DAY</h2>
            <div className="container">
              <div className="exercise">
                <ul>
                  <h3>Barbell Squats</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 50lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Lying Leg Curl</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Weighted Walking Lunges</h3>
                  <li>Sets: 3</li>
                  <li>Reps: 10</li>
                  <li>Weights: 40lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Hip Thrusts</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 8</li>
                  <li>Weights: 30lbs</li>
                </ul>
              </div>
              <div className="exercise">
                <ul>
                  <h3>Calf Raises</h3>
                  <li>Sets: 4</li>
                  <li>Reps: 15</li>
                  <li>Weights: 40lbs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div></div>
      </footer>

      <style jsx>{`
        .history-section {
          background-color: #f5f5f5;
          width: 100%;
        }

        .history-section h1 {
          margin-top: 2%;
          margin-left: 20%;
          font-size: 30px;
        }

        .history-section .workout {
          width: 60%;
          height: auto;
          margin-left: 20%;
          margin-bottom: 50px;
          background-color: #ededed;
          box-shadow: 0 0 30px 1px #888888;
        }

        .history-section .container {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-flow: wrap;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .exercise {
          width: 30%;
        }

        .workout h2 {
          padding-top: 20px;
          margin-bottom: 0px;
          margin-left: 40px;
          color: red;
        }

        .workout ul li {
          margin-left: 20px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          height: 100%;
          background-color: #f5f5f5;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
