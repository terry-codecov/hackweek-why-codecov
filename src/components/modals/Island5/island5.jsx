import React from "react";
import "../island.css";

export function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img
              id="close-widget"
              src="/assets/Screenshot 2023-08-23 at 5.08.36 PM.png"
              alt="close-widget"
            ></img>
          </button>
          {/* <img id="close-widget" src="src/assets/Screenshot 2023-08-23 at 5.08.36 PM.png" alt="close-widget"> */}
          {/* </img> */}
        </div>
        <div className="title">
          <h1>Getting Started with Code Coverage</h1>
        </div>
        <div className="body">
          <p>
            Getting started with code coverage usually requires your codebase to
            have tests. If you don’t have any tests, then you will have 0% code
            coverage. Most languages have their own tools to calculate coverage
            when a test suite is run. After you have added tests and decided on
            what tool to use, you can begin to collect coverage metrics.
            <br></br>Using a code coverage as a service tool, like Codecov, can
            help get that data back in front of your developers.
          </p>
        </div>
        <div className="footer">
          {/* <img className="island-directory" src="src/assets/Screenshot 2023-08-23 at 4.38.59 PM.png" alt="island-directory"></img> */}
          <div className="icon-container">
            <div className="col-1">
              <img id="icon" src="assets/Icons/Beach-Gray.png"></img>
            </div>
            <div className="col-2">
              <img id="icon" src="/assets/Icons/Forest-Gray.png"></img>
            </div>
            <div className="col-3">
              <img id="icon" src="/assets/Icons/Igloo-Pink.png"></img>
            </div>
            <div className="col-4">
              <img id="icon" src="/assets/Icons/Jungle-Gray.png"></img>
            </div>
            <div className="col-5">
              <img id="icon" src="/assets/Icons/Nova-Scotia-Gray.png"></img>
            </div>
            <div className="col-6">
              <img id="icon" src="/assets/Icons/Volcano-Gray.png"></img>
            </div>
            <div className="col-7">
              <img id="icon" src="/assets/Icons/Wind-Farm-Gray.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
