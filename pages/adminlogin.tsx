/* eslint-disable react/no-unknown-property */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminNav from './components/Nav/AdminNav';

export default function Login() {
  return (
    <div className="container" style={{ backgroundColor: '#0F0F0F' }}>
      <Head>
        <title>BEEF-IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="header">
          <AdminNav/>
        </header>

        <section className="image-section" style={{ width: '100%' }}>
          <img src="/gym.jpg" alt="Image" style={{ width: '100%' }} />
        </section>

        <section className="login-section">
          <div className="login">
            <h1>Admin Sign in</h1>
            <form>
              <p>Password</p>
              <input type="password" name="" placeholder="Enter Password" />
              <input type="submit" name="" value="Login" />
            </form>
          </div>
        </section>
      </main>

      

      <style jsx>{`
        .div {
          background-color: #0f0f0f;
        }

        .sign-up {
          color: grey;
        }

        .login-section {
          margin-top: 50px;
        }

        .login {
          border-radius: 10px;
          box-shadow: 0 0 30px #888888;
          width: 500px;
          height: 500px;
          position: absolute;
          margin-top: 0px;
          left: 50%;
          padding-top: 45px;
          transform: translateX(-50%);
          background-color: #0f0f0f;
        }

        .login h1 {
          color: white;
          margin-left: 20%;
          font-size: 30px;
        }

        .login p {
          color: white;
          margin-left: 20%;
          font-size: 20px;
        }

        .login input {
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

        .login input[type='submit'] {
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

        .login input[type='submit']:focus {
          outline: none;
          justify-content: center;
        }

        .login input[type='submit']:hover {
          background-color: #be1a1a;
          color: white;
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
