import React, { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";
import { updateData } from "../module/manageDB.js";

function InputToDB({ col, docID, data }) {
  const [input, setInput] = useState("");

  async function fetchData() {
    const docSnap = await getDoc(doc(db, col, docID));
    if (docSnap.exists()) {
      setInput(docSnap.data().field);
    } else {
      console.log("No such document!");
    }
  }

  function docListener() {
    const docRef = doc(db, col, docID);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setInput(doc.data().field);
    });
  }

  function handleUpdate() {
    updateData(col, docID, data);
  }

  useEffect(() => {
    fetchData();
    docListener();
  }, []);

  return (
    <input
      className="inputToDB"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleUpdate();
        }
      }}
      onChange={(event) => {
        setInput(event.target.value);
      }}
      value={input}
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
  );
}

export default InputToDB;
