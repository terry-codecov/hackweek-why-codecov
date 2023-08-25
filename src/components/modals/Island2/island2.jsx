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
          <h1>The Main Types of Code Coverage</h1>
        </div>
        <div className="body">
          <p>
            Line Coverage - we take a look to see whether every line has been
            run in a test. <br></br>Branch Coverage - tests to see if every
            branch in a conditional is tested. Path Coverage - is often
            considered a part of branch coverage calculations.<br></br>So which
            one is better? If you are limited to only calculating one, we
            recommend line coverage. Line coverage will at least cover the
            entire codebase. At Codecov, we aggregate both sets of data.
            <br></br>If both line and branch coverage are provided, we will use
            the branch information and fill in unknown lines with the line
            coverage information to provide a more holistic view of your
            coverage.
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
