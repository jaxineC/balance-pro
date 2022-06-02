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

  let col = userID.uid;
  let docID = "welcomeTXT";

  async function fetchData() {
    const docSnap = await getDoc(doc(db, col, docID));
    if (docSnap.exists()) {
      setTxt1Input(docSnap.data().txt1);
      setTxt2Input(docSnap.data().txt2);
    } else {
      console.log("No such document!");
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
    updateData(col, docID, data);
  }

  useEffect(() => {
    fetchData();
    docListener();
  }, []);

  return (
    <div className="WelcomeTxt">
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
      <input
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
          wordWrap: "break-word",
          hyphens: "auto",
        }}
      ></input>
    </div>
  );
}

export default WelcomeTxt;
