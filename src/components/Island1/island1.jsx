import React from "react";
import "./Island1/island1.css";

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
            <img id="close-widget" src="src/assets/Screenshot 2023-08-23 at 5.08.36 PM.png" alt="close-widget"></img>
          </button>
          {/* <img id="close-widget" src="src/assets/Screenshot 2023-08-23 at 5.08.36 PM.png" alt="close-widget"> */}
          {/* </img> */}
        </div>
        <div className="title">
          <h1>Title of the section/topic.</h1>
        </div>
        <div className="body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolore magna aliqua dolore.</p>
        </div>
        <div className="footer">
          {/* <img className="island-directory" src="src/assets/Screenshot 2023-08-23 at 4.38.59 PM.png" alt="island-directory"></img> */}
          <div class="icon-container">
            <div class="col-1">
            <img id="icon" src="src/assets/Icons/Beach-Pink.png"></img>
            </div>
            <div class="col-2">
            <img id="icon" src="src/assets/Icons/Forest-Gray.png"></img>
            </div>
            <div class="col-3">
            <img id="icon" src="src/assets/Icons/Igloo-Gray.png"></img>
            </div>
            <div class="col-4">
            <img id="icon" src="src/assets/Icons/Jungle-Gray.png"></img>
            </div>
            <div class="col-5">
            <img id="icon" src="src/assets/Icons/Nova-Scotia-Gray.png"></img>
            </div>
            <div class="col-6">
            <img id="icon" src="src/assets/Icons/Volcano-Gray.png"></img>
            </div>
            <div class="col-7">
            <img id="icon" src="src/assets/Icons/Wind-Farm-Gray.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
