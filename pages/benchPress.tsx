/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Nav from './components/Nav/Nav';

export default function benchPress() {
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
            <h1>Barbell Bench Press</h1>
            <div className="row-information">
              <div className="exercise-left">
                <h2>Information</h2>
                <ul className="bullet-information">
                  <li>Exercise Type: Strength</li>
                  <li>Exercise Equipment: Barbell and Bench</li>
                  <li>Muscles Targeted: Chest</li>
                </ul>
              </div>
              <div className="exercise-right">
                <h2>Benefits</h2>
                <ul className="bullet-information">
                  <li>Builds bigger pectoral</li>
                  <li>Works the triceps and deltoids as well</li>
                  <li>Helps build stronger bones</li>
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
            <source src="barbellBench.mp4" type="video/mp4"></source>
            <source src="barbellBench.ogg" type="video/ogg"></source>
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="instructions">
          <ol className="step-information">
            <li>Lay faceup on a horizontal bench, with your butt on the bench and feet flat on the ground.</li>
            <li>
              Grasp the barbell with an overhand grip wider than shoulder width (typically your ring fingers or pinky
              fingers will be placed on the rings).
            </li>
            <li>
              Tuck your shoulder blades behind your back – this will help keep your elbows from flaring out too much.
              Also, press on the floor hard with your feet – this will create a slight arch in your back, with your
              weight of your body resting on the back of your shoulders and your butt.
            </li>
            <li>
              Inhale, lift up the bar and lower it to the center of your chest, in a controlled movement, maintaining
              pressure on your feet the entire time. Note that the bar should travel in a slight arc forward, in order
              to reach the center of your chest.
            </li>
            <li>
              Once the bar touches your chest, press the weight back up explosively, and exhale at the end of each rep.
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
          font-size: 30px;
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
          font-size: 25px;
          margin-top: 10px;
        }

        .bullet-information {
          font-size: 18px;
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
          font-size: 20px;
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
