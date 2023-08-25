import React from "react";
import "../island.css";

function Modal({ setOpenModal }) {
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
          <h1>What is Code Coverage as a Service?</h1>
        </div>
        <div className="body">
          <p>
          Code coverage as a service integrates coverage tool data into developer workflows, aiding in building a testing culture. For instance, Codecov offers features like merging coverage reports from various languages, overlaying coverage on source code, status checks on pull requests for coverage standards, customizable PR comments for coverage insights, and flags to focus coverage. This service ensures thorough testing and code quality improvement.
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
              <img id="icon" src="/assets/Icons/Igloo-Gray.png"></img>
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
              <img id="icon" src="/assets/Icons/Wind-Farm-Pink.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
