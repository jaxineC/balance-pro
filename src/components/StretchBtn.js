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
  stretchX,
  setStretchX,
  isStretch,
  setIsStretch,
}) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [isHovered, setIsHovered] = useState(false);
  const [initMouseClientX, setInitMouseClientX] = useState(0);

  let col = `${userID.uid}/${projectID}/tasks`;
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  function renderStretchBtn(event) {
    let editBtnNode = event.currentTarget.parentNode.children[3];
    let deleteBtnNode = event.currentTarget.parentNode.children[5];
    if (isHovered) {
      setIsHovered(false);
      if (editBtnNode && deleteBtnNode) {
        if (editBtnNode.style.display === "none") {
          editBtnNode.style.display = "inline";
        } else {
          editBtnNode.style.display = "none";
        }
        if (deleteBtnNode.style.display === "none") {
          deleteBtnNode.style.display = "inline";
        } else {
          deleteBtnNode.style.display = "none";
        }
      }
    } else {
      setIsHovered(true);
      if (editBtnNode && deleteBtnNode) {
        if (editBtnNode.style.display === "none") {
          editBtnNode.style.display = "inline";
        } else {
          editBtnNode.style.display = "none";
        }
        if (deleteBtnNode.style.display === "none") {
          deleteBtnNode.style.display = "inline";
        } else {
          deleteBtnNode.style.display = "none";
        }
      }
    }
  }

  function initStretch(event) {
    setIsStretch(true);
    setInitMouseClientX(event.clientX);
  }

  function endStretch(event) {
    if (isStretch === true) {
      setIsStretch(false);
      setStretchX([0, 0]);
      let data = {};
      let x = ((event.clientX - initMouseClientX) / 20) * 1000 * 60 * 60 * 24;
      if (date === "start") {
        data = { start: new Date(item.start.seconds * 1000 + x) };
        // Timestamp.fromDate(new Date(clickDate + 1000 * 60 * 60 * 24 * 7))
      } else {
        data = { end: new Date(item.end.seconds * 1000 + x) };
      }
      updateData(db, col, item.taskID, data);
      setInitMouseClientX(0);
    }
  }

  function handleStretch(event) {
    if (isStretch) {
      // setClientMouseX(event.clientX);
      let x = event.clientX - initMouseClientX;
      date === "start" ? setStretchX([x, 0]) : setStretchX([0, x]);
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

  let path = "";
  if (date === "start") {
    path = (
      <path d="M335.3,308.2L207.1,180L335.3,51.8L365.5,82l-98.1,98.1l98.1,98.1L335.3,308.2z M414.3,52H457v256h-42.7V52z" />
    );
  } else {
    path = (
      <path d="M298.5,278.2l98.1-98.1L298.5,82l30.2-30.2L457,180L328.7,308.2L298.5,278.2z M249.7,308h-42.7V52h42.7V308z" />
    );
  }

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
        height: 26,
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
        height="26"
        width="18"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="76 -76 512 512"
        enableBackground="new 76 -76 512 512"
      >
        {path}
      </svg>
    </button>
  );
}

export default StretchBtn;
