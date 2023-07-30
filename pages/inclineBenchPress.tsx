/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Nav from './components/Nav/Nav';

export default function inclineBenchPress() {
  return (
    <div className="container">
      <Head>
        <title>BEEF-IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <header className="header">
            <Nav />
          </header>
        </section>
        <section className="exercise-information">
          <div className="exercise-name">
            <h1>Incline Bench Press</h1>
            <div className="row-information">
              <div className="exercise-left">
                <h2>Information</h2>
                <ul className="bullet-information">
                  <li>Exercise Type: Strength</li>
                  <li>Exercise Equipment: Dumbbell and Bench</li>
                  <li>Muscles Targeted: Chests</li>
                </ul>
              </div>
              <div className="exercise-right">
                <h2>Benefits</h2>
                <ul className="bullet-information">
                  <li>Builds bigger the upper portion of pectoral</li>
                  <li>Works the triceps and deltoids as well</li>
                  <li>Helps grow lats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="exercise-name">
            <h1>Barbell Bench Press Instructions</h1>
          </div>
        </section>

        <section className="video">
          <video width="100%" height="100%" controls>
            <source src="inclineBench.mp4" type="video/mp4"></source>
            <source src="inclineBench.ogg" type="video/ogg"></source>
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="instructions">
          <ol className="step-information">
            <li>Lie flat on an incline bench and set your hands just outside of shoulder width.</li>
            <li>Set your shoulder blades by pinching them together and driving them into the bench.</li>
            <li>
              Take a deep breath and allow your spotter to help you with the lift off in order to maintain tightness
              through your upper back.
            </li>
            <li>Let the weight settle and ensure your upper back remains tight after lift off.</li>
            <li>Inhale and allow the bar to descend slowly by unlocking the elbows.</li>
            <li>Lower the bar in a straight line to the base of the sternum (breastbone) and touch the chest.</li>
            <li>
              Push the bar back up in a straight line by pressing yourself into the bench, driving your feet into the
              floor for leg drive, and extending the elbows.
            </li>
          </ol>
        </section>
      </main>

      <footer>
        <div></div>
      </footer>

      <style jsx>{`
        .exercise-information {
          padding-top: 150px;
        }

        .exercise-name h1 {
          color: #df3737;
          font-size: 35px;
          margin-left: 8%;
          margin-bottom: 10px;
        }

        .exercise-left {
          display: inline-block;
          width: 40%;
        }

        .exercise-right {
          display: inline-block;
          width: 50%;
          float: right;
          padding-right: 10%;
        }

        .row-information h2 {
          margin-left: 20%;
          font-size: 30px;
          margin-top: 10px;
        }

        .bullet-information {
          font-size: 22px;
          line-height: 150%;
          margin-left: 20%;
        }

        .video {
          margin-left: 8%;
          margin-right: 8%;
        }

        .instructions {
          margin-left: 8%;
          margin-right: 8%;
          font-size: 22px;
          line-height: 150%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
