import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Hashtag from "./Hashtag";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  onSnapshot,
  arrayUnion,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { render } from "react-dom";
import { fetchAllData } from "../module/manageDB.js";
import { renderIntoDocument } from "react-dom/test-utils";

function ProjectInfo({ userID, cat, projectID, Tasks, setTasks }) {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag
  const [projectInfo, setprojectInfo] = useState({});
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState("");
  let col = userID.uid;
  let [YYYY, MM, DD] = ["", "", ""];

  async function fetchInfo(cat) {
    const docRef = doc(db, col, projectID);
    const docSnap = await getDoc(docRef);
    setprojectInfo(docSnap.data());
    setHashtags(docSnap.data().hashtag);
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    const docRef = doc(db, col, projectID);
    const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
      let updatedInfo = changedSnapshot.data();
      setprojectInfo(updatedInfo);
      setHashtags(updatedInfo.hashtag);
    });

    // if (cat === "work") {
    //   const docRef = doc(db, col, projectID);
    //   const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
    //     let updatedTasks = changedSnapshot.data();
    //     setprojectInfo(updatedTasks);
    //     setHashtags(updatedTasks.hashtag);
    //   });
    // } else {
    //   const docRef = doc(db, col, projectID);
    //   const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
    //     let updatedInfo = changedSnapshot.data();
    //     setprojectInfo(updatedInfo);
    //     setHashtags(updatedInfo.hashtag);
    //   });
    // }
  }

  async function addHashTag() {
    let docID = projectID;
    let data = { hashtag: arrayUnion("hashtag") };
    try {
      const docRef = await updateDoc(doc(db, col, docID), data);
      setInputText("");
      console.log("update field in: ", docID);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  }

  useEffect(() => {
    fetchInfo(cat);
    docListener(cat, projectID);
  }, []);
  function renderTime() {
    // let startDate = new Date(projectInfo.start.seconds * 1000);
    let startDate = projectInfo.start.toDate();
    let options = { month: "short" };
    [YYYY, MM, DD] = [
      startDate.getFullYear(),
      new Intl.DateTimeFormat("en-US", options).format(startDate),
      startDate.getDate().toString().padStart(2, "0"),
    ];
  }

  //------------------------------------------------------------------------------
  const tags = hashtags.map((item, index) => (
    <li key={index} className="Hashtag TextS">
      # <span>{hashtags[index]}</span>
    </li>
  ));

  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">{projectInfo.name}</div>
        {/* <div
          onClick={() => {
            console.log(projectInfo.start.toDate().toString());
            renderTime();
            console.log(typeof projectInfo.start.toDate().toString());
          }}
          className="TextS"
        >
          {YYYY}/{MM}/{DD}~
        </div> */}
      </div>
      <ul className="Hashtags TextS">
        {tags}
        <button
          onClick={addHashTag}
          className="TextS theme bold"
          style={{ cursor: "pointer" }}
        >
          {" "}
          >>>+{" "}
        </button>
      </ul>
    </div>
  );
}

export default ProjectInfo;
