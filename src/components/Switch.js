import React, { useState, useEffect, useRef } from "react";
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

function Switch({
  item,
  userID,
  cat,
  selectedProjects,
  setSelectedProjects,
  checked,
  setChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);
  let col = userID.uid;
  let docID = "selectedProjects";
  let list = selectedProjects;

  const refTarget = useRef(false);

  useEffect(() => {
    fetchData();
    docListener();
  }, []);

  async function fetchData() {
    try {
      const docSnap = await getDoc(doc(db, col, docID));
      if (docSnap.exists()) {
        if (cat === "work") {
          if (docSnap.data().work === item.projectID) {
            refTarget.checked = true;
            setIsChecked(true);
            list[0] = item.projectID;
            setSelectedProjects(list);
          }
        } else if (cat === "life") {
          if (docSnap.data().life === item.projectID) {
            refTarget.checked = true;
            setIsChecked(true);
            list[1] = item.projectID;
            setSelectedProjects(list);
          }
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting cached document:", error);
    }
  }

  function docListener() {
    const docRef = doc(db, col, docID);
    const unsubscribe = onSnapshot(docRef, (doc) => {});
  }

  function handleChecked(event) {
    event.target.checked ? setIsChecked(true) : setIsChecked(false);

    let list = selectedProjects;
    if (event.target.checked) {
      // list.push(event.target.parentNode.parentNode.getAttribute("value"));
      cat === "work" ? (list[0] = item.projectID) : (list[1] = item.projectID);
      setSelectedProjects(list);
    } else {
      cat === "work" ? (list[0] = null) : (list[1] = null);
      setSelectedProjects(list);
    }

    let data;
    if (cat === "work") {
      data = { work: item.projectID };
    } else {
      data = { life: item.projectID };
    }
    try {
      updateData(col, docID, data);
    } catch (error) {
      console.log("recored selected project failed:", error);
    }
  }

  return (
    <label className="switch">
      <input
        onChange={handleChecked}
        type="radio"
        name={cat}
        ref={refTarget}
        checked={isChecked ? true : false}
      />
      <span className="slider round"></span>
    </label>
  );
}

export default Switch;
