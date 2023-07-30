/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import Nav from './components/Nav/Nav';
import { addUser } from '../lib/user-db-provider';
import { User } from '../types/user';

export async function getServerSideProps() {
  try {
    await clientPromise;
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

const Register: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0F0F0F' }}>
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
        <section className="register-section">
          <div className="registration">
            <h1>Sign up</h1>
            <form>
              <p>Email</p>
              <input required type="text" name="" placeholder="Enter Email" />
              <p>Password</p>
              <input required type="password" name="" placeholder="Enter Password" />
              <p>Phone Number</p>
              <input required type="text" name="" placeholder="Enter Phone Number" />
              <input type="submit" name="" value="Register" />
            </form>
          </div>
        </section>
      </main>

      <style jsx>{`

          .register-section {
            margin-top: auto;
          }

          .registration {
            width: 500px;
            height: 500px;
            position: absolute;
            margin-top: 0px;
            left: 50%;
            padding-top: 45px;
            transform: translateX(-50%);
            background-color: #0f0f0f;
          }

          .registration h1 {
            color: white;
            margin-left: 20%;
            font-size: 30px;
          }

          .registration p {
            color: white;
            text-align: center;
            font-size: 20px;
          }

          .registration form p{
            text-align: left;
            margin-left: 20%;
          }

          .registration input {
            display: block;
            width: 60%;
            height: 40px;
            font-size: 15px;
            color: #000000;
            padding: 6px 12px;
            border: 1px solid #cccccc;
            margin-left: 20%;
            margin-right: 20%;
          }

          .registration input[type='submit'] {
            padding: 0px 0px 0px 0px;
            width: 40%;
            height: 45px;
            background-color: #de1d1d;
            color: white;
            font-size: 20px;
            cursor: pointer;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.5s ease;
            margin-left: 30%;
            margin-right: 30%;
            margin-top: 50px;
          }

          .registration input[type='submit']:focus {
            outline: none;
            justify-content: center;
          }

          .registration input[type='submit']:hover {
            background-color: #be1a1a;
            color: white;
          }

        // .div {
        //   backgroundcolor: '#0F0F0F';
        //   layout: fill;
        // }

        // .registration p {
        //   color: white;
        //   margin-left: 20%;
        //   font-size: 20px;
        // }

        // .registeration {
        //   border-radius: 10px;
        //   box-shadow: 0 0 30px #888888;
        //   width: 500px;
        //   height: 500px;
        //   position: absolute;
        //   margin-top: 0px;
        //   left: 50%;
        //   padding-top: 45px;
        //   padding-bottom: 45px;
        //   transform: translateX(-50%);
        //   background-color: #0f0f0f;
        // }

        // .register-section {
        //   margin: 50px;
        // }

        // .registration input {
        //   display: block;
        //   width: 60%;
        //   height: 40px;
        //   font-size: 15px;
        //   color: #000000;
        //   padding: 6px 12px;
        //   border: 1px solid #cccccc;
        //   margin-left: 20%;
        //   margin-right: 20%;
        // }

        // .registration input[type='submit'] {
        //   padding: 0px 0px 0px 0px;
        //   width: 40%;
        //   height: 45px;
        //   background-color: #de1d1d;
        //   color: white;
        //   font-size: 20px;
        //   cursor: pointer;
        //   border: 2px solid transparent;
        //   cursor: pointer;
        //   transition: all 0.5s ease;
        //   margin-left: 30%;
        //   margin-right: 30%;
        //   margin-top: 50px;
        //   justify-content: center;
        // }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;

            background-color: #0F0F0F;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};


export default Register;
