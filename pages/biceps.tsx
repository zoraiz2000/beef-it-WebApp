/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Nav from './components/Nav/Nav';
import FilterNav from './components/exercises/FilterNav';

export default function Biceps() {
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

        <section className="image-section" style={{ width: "100%" }}>
            <img src="/gym.jpg" alt="Image" style={{ width: "100%" }} />
        </section>
        
        <section className="all-exercises-section">
          <div className="container">
            <div className="muscle-list">
              <FilterNav />
            </div>

            {/* <section className="image-section" style={{ width: "100%" }}>
                            <img src="/gym.jpg" alt="Image" style={{ width: "100%" }} />
                        </section> */}

            <div className="exercise-list">
              <h1>ALL EXERCISES</h1>
              <div className="column">
                <div className="exercise">
                  <div className="exercise-image"></div>
                  <div className="exercise-info">
                    <h2>Bicep Curl (Barbell)</h2>
                    <h3>Muscle Targeted: Biceps</h3>
                    <h3>Equipment Type: Barbell</h3>
                  </div>
                </div>

                <div className="exercise">
                  <div className="exercise-image"></div>
                  <div className="exercise-info">
                    <h2>Bicep Curl (Cable)</h2>
                    <h3>Muscle Targeted: Biceps</h3>
                    <h3>Equipment Type: Cable</h3>
                  </div>
                </div>

                <div className="exercise">
                  <div className="exercise-image"></div>
                  <div className="exercise-info">
                    <h2>Bicep Curl (Dumbbell)</h2>
                    <h3>Muscle Targeted: Biceps</h3>
                    <h3>Equipment Type: Dumbbell</h3>
                  </div>
                </div>

                <div className="exercise">
                  <div className="exercise-image"></div>
                  <div className="exercise-info">
                    <h2>Bicep Curl (Machine)</h2>
                    <h3>Muscle Targeted: Biceps</h3>
                    <h3>Equipment Type: Machine</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div></div>
      </footer>

      <style jsx>{`
        .image-section {
          padding-top: 4%;
          width: 100%;
          height: 50%;
          overflow: hidden;
        }

        .all-exercises-section {
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          display: flex;
          justify-content: center;
        }

        .all-exercises-section .container {
          display: inline-flex;
        }

        .all-exercises-section .muscle-list {
          width: 200px;
          margin-right: 100px;
          // margin-top: 50px;
        }

        .all-exercises-section .muscle-list li {
          list-style: none;
          margin-bottom: 6px;
        }

        .all-exercises-section .muscle-list a {
          text-decoration: none;
          color: #4a4a4a;
        }

        .all-exercises-section .muscle-list a.selected {
          color: #df3737;
        }

        .all-exercises-section .muscle-list h3 {
          font-weight: bolder;
          margin-top: 50px;
        }

        .all-exercises-section .exercise-list {
          // margin-top: 8%;
          margin-left: 20%;
        }

        .all-exercises-section .exercise-list h1 {
          font-size: 40px;
        }

        .all-exercises-section .exercise-list .exercise {
          background: #ededed;
          width: auto;
          height: 200px;
          margin: 10px;
          display: inline-block;
        }

        .all-exercises-section .exercise-list .exercise-image {
          background: #156ba577;
          height: 200px;
          width: 200px;
          margin-right: 5%;
          float: left;
        }

        .all-exercises-section .exercise-list .exercise-info {
          height: 200px;
          width: 1000px;
          float: top;
        }

        .all-exercises-section .exercise-list h2 {
          color: #df3737;
          margin: 40px 0px 20px 30px;
        }

        .all-exercises-section .exercise-list h3 {
          color: #4a4a4a;
          margin: 0 30px;
        }

        .footer {
          background-color: #0f0f0f;
          color: #0f0f0f;
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 99;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: table-row;
          height: 0;
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
