/* eslint-disable react/no-unknown-property */
import React from 'react';
import { TrackerForm } from './components/TrackerForm';
import Head from 'next/head';
import Nav from './components/Nav/Nav';

export default function Tracker() {
  // defining the initial state for the form
  const initialState = {
    exercise: '',
    set: '',
    rep: '',
    resttime: '',
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit } = TrackerForm(loginUserCallback, initialState);

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    // send "values" to database
  }

  return (
    // don't mind this ugly form :P
    <div>
      <Head>
        <title>BEEF-IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Nav />
      </header>
      <div className="tracker-form">
        <form className="form" onSubmit={onSubmit}>
          <div>
            <div className="section-title">
              <h1>Create a Workout</h1>
            </div>
            <div className="row">
              <div className="row">
              <div className="input-group w50">
                <input name="name" placeholder="Workout Name" onChange={onChange} required />
              </div>
                <div className="input-group">
                  <select className="input-control" required>
                    <option value="Bicycle Crunch">Bicycle Crunch</option>
                    <option value="Cable Crunch">Cable Crunch</option>
                    <option value="Crunch (Machine)">Crunch (Machine)</option>
                    <option value="Ab Wheel">Ab Wheel</option>
                    <option value="Cable Hip Abduction">Cable Hip Abduction</option>
                    <option value="Hip Abductor (Machine)">Hip Abductor (Machine)</option>
                    <option value="Cable Hip Adductor">Cable Hip Adductor</option>
                    <option value="Hip Abductor (Machine)">Hip Abductor (Machine)</option>
                    <option value="Bicep Curl (Barbell)">Bicep Curl (Barbell)</option>
                    <option value="Bicep Curl (Cable)">Bicep Curl (Cable)</option>
                    <option value="Bicep Curl (Dumbbell)">Bicep Curl (Dumbbell)</option>
                    <option value="Bicep Curl (Machine)">Bicep Curl (Machine)</option>
                    <option value="Cable Hip Abduction">Cable Hip Abduction</option>
                    <option value="Standing Calf Raises">Standing Calf Raises</option>
                    <option value="Standing Calf Raises (Machine)">Standing Calf Raises (Machine)</option>
                    <option value="Seated Calf Raise (Plate Loaded)">Seated Calf Raise (Plate Loaded)</option>
                    <option value="Dumbbell Bench Press">Dumbbell Bench Press</option>
                    <option value="Close-grip Bench Press">Close-grip Bench Press</option>
                    <option value="Dumbbell Flyes">Dumbbell Flyes</option>
                    <option value="Pushups">Pushups</option>
                    <option value="Machine Chest Fly">Machine Chest Fly</option>
                    <option value="Wrist Curl">Wrist Curl</option>
                    <option value="Reverse Wrist Curl">Reverse Wrist Curl</option>
                    <option value="Farmers' Walk">Farmers&apos; Walk</option>
                    <option value="Glute Kickback (Machine)">Glute Kickback (Machine)</option>
                    <option value="Glute Ham Raise">Glute Ham Raise</option>
                    <option value="Lat Pulldown (Cable)">Lat Pulldown (Cable)</option>
                    <option value="Lat Pulldown - Wide Grip (Cable)">Lat Pulldown - Wide Grip (Cable)</option>
                    <option value="Lateral Raise (Cable)">Lateral Raise (Cable)</option>
                    <option value="Leg Extension">Leg Extension</option>
                    <option value="Squat">Squat</option>
                    <option value="Barbell Squat">Barbell Squat</option>
                    <option value="Leg Press">Leg Press</option>
                    <option value="Dumbbell Shoulder Press">Dumbbell Shoulder Press</option>
                    <option value="Arnold Press">Arnold Press</option>
                    <option value="Side Lateral Raise">Side Lateral Raise</option>
                    <option value="Overhead Press">Overhead Press</option>
                    <option value="Face Pull">Face Pull</option>
                    <option value="Dumbbell Shrug">Dumbbell Shrug</option>
                    <option value="Tricep Dip">Tricep Dip</option>
                    <option value="Tricep Extension">Tricep Extension</option>
                    <option value="Tricep Pushdown">Tricep Pushdown</option>
                  </select>
                </div>
              </div>
              <div className="input-group w50">
                <input name="Sets" id="Sets" type="number" placeholder="Number of Sets" onChange={onChange} required />
                <input name="reps" id="reps" type="number" placeholder="Number of Reps" onChange={onChange} required />
              </div>
            </div>
            <div className="input-group">
              <input
                name="resttime"
                id="resttime"
                type="text"
                placeholder="Rest Time Between Sets"
                onChange={onChange}
                required
              />
            </div>
            <div className="row-button">
              <button type="submit" className="btn-1">
                ADD EXERCISE
              </button>
              <button type="submit" className="btn-1">
                SAVE WORKOUT
              </button>
            </div>
          </div>
        </form>

        <div className="results-card"></div>
      </div>

      <style jsx>{`
        /* gallery section */
        .div {
          display: block;
        }
        .section-title {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 15px;
          text-align: center;
          margin-top: 100px;
          padding-bottom: 20px;
          margin-top: 10%;
          font-size: 20px;
        }

        .section-title h1 {
          color: #de1d1d;
        }
        .btn-1 {
          padding: 10px 35px;
          background-color: #de1d1d;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border: 2px solid transparent;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.5s ease;
          font-weight: 500;
          margin-left: 70px;
          margin-top: 30px;
        }

        <<<<<<< HEAD .btn-1:focus {
          outline: none;
          justify-content: center;
        }
        ======= .btn-2 {
          padding: 10px 35px;
          background-color: #de1d1d;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border: 2px solid transparent;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.5s ease;
          font-weight: 500;
          margin-left: 70px;
          margin-top: 30px;
        }

        .btn-2:focus {
          outline: none;
          justify-content: center;
        }

        .btn-2:hover {
          background-color: #be1a1a;
          color: white;
        }

        .row-button {
          display: inline-block;
        }

        .rsvp-form {
          flex: 0 0 100%;
          max-width: 100%;
        }

        .form {
          max-width: 700px;
          background-color: #f5f5f5;
          margin: auto;
          padding: 100px 40px;
          box-shadow: 0 0 10px #888888;
        }
        >>>>>>>Update tracker.tsx .btn-1:hover {
          background-color: #be1a1a;
          color: white;
        }

        .row-button {
          display: inline-block;
        }

        .rsvp-form {
          flex: 0 0 100%;
          max-width: 100%;
        }

        .form {
          max-width: 700px;
          background-color: #f5f5f5;
          margin: auto;
          padding: 100px 40px;
          box-shadow: 0 0 10px #888888;
        }

        input {
          display: block;
          width: 100%;
          height: 40px;
          margin-bottom: 20px;
          font-size: 20px;
          color: #000000;
          padding: 6px 12px;
          border: 1px solid #cccccc;
        }

        .form .input-group {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 8px;
        }

        .input-group.w50 {
          flex: 0 0 20%;
          width: 100%;
          display: inline-block;
          padding-left: 0 2%;
        }

        .form .input-control {
          display: block;
          width: 100%;
          height: 40px;
          margin-bottom: 20px;
          font-size: 20px;
          color: #000000;
          padding: 6px 12px;
          border: 1px solid #cccccc;
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
