import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";

function StretchBtn({
  date,
  item,
  userID,
  projectID,
  isDrag,
  setIsDrag,
  stretchX,
  setStretchX,
  deltaX,
  setDeltaX,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [isHovered, setIsHovered] = useState(false);
  const [initMouseClientX, setInitMouseClientX] = useState(0);
  const [isStretch, setIsStretch] = useState(false);

  let col = `${userID.uid}/${projectID}/tasks`;
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  function renderStretchBtn() {
    if (isHovered) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  }
  function initStretch(event) {
    setIsStretch(true);
    setIsDrag(false);
    setInitMouseClientX(event.clientX);
  }

  function endStretch(event) {
    let data = {};
    let x = ((event.clientX - initMouseClientX) / 20) * 1000 * 60 * 60 * 24;
    if (date === "start") {
      data = { start: new Date(item.start.seconds * 1000 + x) };
    } else {
      data = { end: new Date(item.end.seconds * 1000 + x) };
    }
    updateData(db, col, item.taskID, data);
    setIsStretch(false);
    setDeltaX(0);
  }

  function handleStretch(event) {
    if (isStretch) {
      // setClientMouseX(event.clientX);
      let x = event.clientX - initMouseClientX;
      date === "start" ? setDeltaX(x) : setDeltaX(0);
      console.log(deltaX);
      date === "start" ? setStretchX(-x) : setStretchX(deltaX);
      console.log(stretchX);
      // console.log(x);
    }
  }

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  async function updateData(db, col, docID, data) {
    const queryRef = doc(db, col, docID);
    await updateDoc(queryRef, data);
  }

  //--------------------------------------------------RENDER-----------------------------------------------------// 3
  //--------------------------------------------------RENDER-----------------------------------------------------//

  return (
    // <div className="StretchBtn TextS" style={{ display: "none" }}>
    //   {date === "start" ? item.start : item.end}
    // </div>
    <button
      onMouseDown={initStretch}
      onMouseUp={endStretch}
      onMouseEnter={renderStretchBtn}
      onMouseLeave={renderStretchBtn}
      onMouseMove={handleStretch}
      className="stretchBtn"
      style={{
        height: 22,
        width: 15,
        display: "none",
        position: "absolute",
        top: -3,
        left: date === "start" ? -14 : "auto",
        right: date === "end" ? -12 : "auto",
        // zIndex: 999,
      }}
    >
      <svg
        style={{
          display: isHovered ? "block" : "none",
          position: "relative",
          left: -6,
          zIndex: 999,
        }}
        height="22"
        width="18"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="76 -76 512 512"
        enableBackground="new 76 -76 512 512"
      >
        <path
          clipRule="evenodd"
          d="m12 7.25c.4142 0 .75.33579.75.75v3.25h3.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-3.25v3.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-3.25h-3.25c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h3.25v-3.25c0-.41421.3358-.75.75-.75z"
          fill="rgb(0,0,0)"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default StretchBtn;
