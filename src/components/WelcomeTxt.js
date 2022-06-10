import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
  getDoc, //get data once
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { updateData } from "../module/manageDB.js";

function WelcomeTxt({ userID, setUserID }) {
  const [txt1Input, setTxt1Input] = useState("");
  const [txt2Input, setTxt2Input] = useState("");
  const [updateAlert, setUpdateAlert] = useState("");

  let col = userID.uid;
  let docID = "welcomeTXT";

  async function fetchData() {
    try {
      const docSnap = await getDoc(doc(db, col, docID));
      if (docSnap.exists()) {
        setTxt1Input(docSnap.data().txt1);
        setTxt2Input(docSnap.data().txt2);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting cached document:", error);
    }
  }

  function docListener() {
    const docRef = doc(db, col, docID);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setTxt1Input(doc.data().txt1);
      setTxt2Input(doc.data().txt2);
    });
  }

  function handleGreetingUpdate() {
    let data = { txt1: txt1Input, txt2: txt2Input };
    try {
      updateData(col, docID, data);
      setUpdateAlert("ok");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    } catch (event) {
      setUpdateAlert("fail");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    }
  }

  useEffect(() => {
    fetchData();
    docListener();
  }, []);

  return (
    <div className="WelcomeTxt" style={{ position: "relative" }}>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleGreetingUpdate();
          }
        }}
        className="TextXL bold txt1Input"
        onChange={(event) => {
          setTxt1Input(event.target.value);
        }}
        value={txt1Input}
        style={{
          width: "100%",
          height: 80,
          color: "#222500",
          borderStyle: "none",
          marginLeft: 0,
          marginBlockStart: "0.67em",
          marginBlockEnd: "0.67em",
          padding: 0,
          fontFamily: "Segoe UI, sans-serif",
        }}
      ></input>
      <textarea
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleGreetingUpdate();
          }
        }}
        className="TextM txt2Input"
        onChange={(event) => {
          setTxt2Input(event.target.value);
        }}
        value={txt2Input}
        style={{
          width: "100%",
          height: 80,
          color: "#222500",
          borderStyle: "none",
          marginLeft: 0,
          marginBlockStart: "0.67em",
          marginBlockEnd: "0.67em",
          padding: 0,
          fontFamily: "Segoe UI, sans-serif",
          verticalAlign: "top",
          overflowWrap: "break-word",
          hyphens: "auto",
        }}
      ></textarea>
      <span
        style={{
          height: 6,
          display: updateAlert === "ok" ? "block" : "none",
          position: "absolute",
          left: 0,
          top: -12,
          padding: "0px 4px",
          backgroundColor: "#fae6ff",
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "blueviolet",
            position: "relative",
            top: -10,
          }}
        >
          updated!
        </span>
      </span>
      <span
        style={{
          display: updateAlert === "fail" ? "block" : "none",
          position: "absolute",
          left: 0,
          top: -12,
          padding: "0px 4px",
          backgroundColor: "#fae6ff",
        }}
      >
        Oops, try again!
      </span>
    </div>
  );
}

export default WelcomeTxt;
