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

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//

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
      <path
        d="m5.83 11 2.58-2.59-1.41-1.41-5 5 5 5 1.41-1.41-2.58-2.59h16.17v-2z"
        fill="rgb(0,0,0)"
      />
    );
  } else {
    path = (
      <path
        d="m18.17 13-2.58 2.59 1.41 1.41 5-5-5-5-1.41 1.41 2.58 2.59h-16.17v2z"
        fill="rgb(0,0,0)"
      />
    );
  }

  return (
    // <div className="StretchBtn TextS" style={{ display: "none" }}>
    //   {date === "start" ? item.start : item.end}
    // </div>
    <svg
      className="stretchBtn"
      style={{
        display: "none",
        position: "absolute",
        left: date === "start" ? -12 : "auto",
        right: date === "end" ? -12 : "auto",
      }}
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {path}
    </svg>
  );
}

export default StretchBtn;
