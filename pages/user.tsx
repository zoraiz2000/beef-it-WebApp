/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';

import AdminNav from './components/Nav/AdminNav';
import { getExercise, getExercises } from '../lib/exercise-db-provider';

export async function getServerSideProps() {
  try {
    const exercise = await getExercise('Bench Press');
    console.log(exercise);

    // example of how to get exercises in an array. We can then pass this to our exercise pages (abdominals etc.) instead of hard coding everything
    const exercises = await getExercises();
    console.log(exercises);

    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home() {
  return (
    <div className="container" style={{ backgroundColor: '#0F0F0F' }}>
      <Head>
        <title>BEEF-IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="header">
          <AdminNav />
        </header>

        <section className="image-section" style={{ width: '100%' }}>
          <img src="/gym.jpg" alt="Image" style={{ width: '100%' }} />
        </section>

        <section className="content-section">
          <div className="container">
            <div className="content-title">
              <h2>USER INFORMATION</h2>
            </div>
          </div>
        </section>

        <section className="action-section">
          
        </section>
      </main>

      <footer>
        <div></div>
      </footer>

      <style jsx>{`
      .div {
        background-color: #0F0F0F;

      }
      /* Footer Section */
      .footer {
        background-color: #0F0F0F;
        color:#0F0F0F;
        position: absolute;
        width: 100%;
        left:0;
        top:0;
        z-index:99;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        display: table-row;
        height: 0;
      }

      /* Homepage Image Section */

      .image-section {
        padding-top: 5%;
        width: 100%;
        height: 50%;
        overflow: hidden;
      }

      .content-section {
        text-align: left;
        margin-left: 8%;
        margin-right: 8%;
      }

      .content-section .container .content-title h1 {
        color:#F5F5F5;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 35px;
        margin-top: 3%;
      }

      .content-section .container .content-title h3 {
        color:#F5F5F5;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 25px;
        margin-bottom: 4%;
      }

      .content-section .container .content-title h2 {
        color:#F5F5F5;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 35px;
        margin-bottom: 1%;
      }

      /* Section*/
      .action-section .container  {
        margin-left:8%;
        margin-right: 8%;
      }
      .action-section .container .row {
        align-items: center;
        width: 100%; */
        padding: 2% 0 2%;
        width: 100%;

      }

      .action-section .container .row .block-item {
        flex: 0 0 20%;
        width: 28%;
        display: inline-block;
        padding-left: 0 2%;
      }

      .action-section .container .row .block-item-inner {
        text-align: left;
        background-color: #F5F5F5;
        height: auto;
        padding: 8% 8% 8% 8%;
        box-shadow: 0 0 10px #888888;
      }

      .action-section .container .row .block-item-inner h2{
        text-align: left;
        color: #DE1D1D;
        font-size: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

      }

      .action-section .container .row .block-item-inner h3{
        text-align: left;
        color: #0F0F0F;
        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

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
