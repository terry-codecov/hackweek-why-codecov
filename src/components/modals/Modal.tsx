import * as React from "react";
import { Html } from "@react-three/drei";

import "./island.css";

export function Modal({
  title,
  children,
  setOpenModal,
  order,
}: {
  title: string;
  children: any;
  setOpenModal: any;
  order: number;
}) {
  return (
    <Html>
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
          </div>
          <div className="body">
            <h1>{title}</h1>
            <p>{children}</p>
          </div>
          <div className="footer">
            <div className="icon-container">
              <div className="col-1">
                {order === 1 ? (
                  <img id="icon" src="assets/Icons/Beach-Pink.png" />
                ) : (
                  <img id="icon" src="assets/Icons/Beach-Gray.png" />
                )}
              </div>
              <div className="col-2">
                {order === 2 ? (
                  <img id="icon" src="/assets/Icons/Forest-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Forest-Gray.png" />
                )}
              </div>
              <div className="col-3">
                {order === 3 ? (
                  <img id="icon" src="/assets/Icons/Igloo-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Igloo-Gray.png" />
                )}
              </div>
              <div className="col-4">
                {order === 4 ? (
                  <img id="icon" src="/assets/Icons/Jungle-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Jungle-Gray.png" />
                )}
              </div>
              <div className="col-5">
                {order === 5 ? (
                  <img id="icon" src="/assets/Icons/Nova-Scotia-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Nova-Scotia-Gray.png" />
                )}
              </div>
              <div className="col-6">
                {order === 6 ? (
                  <img id="icon" src="/assets/Icons/Volcano-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Volcano-Gray.png" />
                )}
              </div>
              <div className="col-7">
                {order === 7 ? (
                  <img id="icon" src="/assets/Icons/Wind-Farm-Pink.png" />
                ) : (
                  <img id="icon" src="/assets/Icons/Wind-Farm-Gray.png" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
