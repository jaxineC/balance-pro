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

function StretchBtn({ date, item }) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [isHovered, setIsHovered] = useState(false);
  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

  function renderStretchBtn() {
    if (isHovered) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  }

  function triggerDrag(event) {
    console.log(event.clientX);
  }

  function triggerDrop(event) {
    console.log(event.clientX);
  }

  //--------------------------------------------------CRUD-------------------------------------------------------// 2
  //--------------------------------------------------CRUD-------------------------------------------------------//
  async function handleStretch(event) {
    let data = {};
    if (date === "start") {
      data = { start: true };
    } else {
      data = { end: true };
    }
    const queryRef = doc(
      db,
      "jx-tasks",
      event.target.parentElement.parentElement.getAttribute("value")
    );
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
      onMouseEnter={renderStretchBtn}
      onMouseLeave={renderStretchBtn}
      className="stretchBtn"
      style={{
        height: 22,
        width: 18,
        display: "none",
        position: "absolute",
        top: -3,
        left: date === "start" ? -20 : "auto",
        right: date === "end" ? -8 : "auto",
      }}
    >
      <svg
        style={{
          display: isHovered ? "block" : "none",
        }}
        height="22"
        width="18"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="76 -76 512 512"
        enable-background="new 76 -76 512 512"
      >
        {path}
      </svg>
    </button>
  );
}

export default StretchBtn;
