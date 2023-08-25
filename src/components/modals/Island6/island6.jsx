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
          <h1>Setting a Coverage Goal</h1>
        </div>
        <div className="body">
          <p>
          Striving for 100% code coverage is debated among developers. While it ensures every line of code has associated tests, achieving it can be exhaustive and doesn’t guarantee bug-free code. Instead, focus on building a testing culture: start by setting up coverage tools, share coverage data with commits, gradually raise coverage standards per commit, targeting 30% and later 80% overall coverage. Hitting 100% is optional but not necessary; emphasis should be on test quality over sheer coverage. This approach balances meaningful testing and code quality.
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
              <img id="icon" src="/assets/Icons/Volcano-Pink.png"></img>
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
