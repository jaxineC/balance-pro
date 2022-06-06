import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Hashtag from "./Hashtag";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { render } from "react-dom";
import { fetchAllData } from "../module/manageDB.js";

function ProjectInfo({
  userID,
  cat,
  projectID,
  Tasks,
  setTasks,
  selectedProjects,
  setSelectedProjects,
}) {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag
  const [projectInfo, setprojectInfo] = useState({});
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState("");
  let col = userID.uid;

  async function fetchInfo(cat) {
    if (cat === "work") {
      const docRef = doc(db, col, selectedProjects[0]);
      const docSnap = await getDoc(docRef);
      setprojectInfo(docSnap.data());
      setHashtags(docSnap.data().hashtag);
    } else {
      const docRef = doc(db, col, selectedProjects[1]);
      const docSnap = await getDoc(docRef);
      setprojectInfo(docSnap.data());
      setHashtags(docSnap.data().hashtag);
    }
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    if (cat === "work") {
      const docRef = doc(db, col, selectedProjects[0]);
      const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setprojectInfo(updatedTasks);
        setHashtags(doc.data().hashtag);
      });
    } else {
      const docRef = doc(db, col, selectedProjects[1]);
      const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
        let updatedInfo = changedSnapshot.data();
        setprojectInfo(updatedInfo);
        setHashtags(updatedInfo.hashtag);
      });
    }
  }

  function addHashTag({}) {}

  useEffect(() => {
    fetchInfo(cat);
    docListener();
  }, []);

  //------------------------------------------------------------------------------
  const tags = hashtags.map(
    (item, index) => (
      <li key={index} className="Hashtag TextS">
        # <span>{hashtags[index]}</span>
      </li>
    )

    // setHashtagInput(item);
    // return (
    //   <li key={index} className="Hashtag TextS">
    //     #{" "}
    //     <input
    //       onChange={(event) => {
    //         setHashtagInput(event.target.value);
    //       }}
    //       value={hashtagInput}
    //     ></input>
    //   </li>
    // );
  );

  // let startDate = new Date(projectInfo.start.second * 1000);
  // let options = { month: "long" };
  // let [YYYY, MM, DD] = [
  //   startDate.getFullYear(),
  //   new Intl.DateTimeFormat("en-US", options).format(startDate),
  //   startDate.getDate().toString().padStart(2, "0"),
  // ];

  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">
          {cat === "work" ? projectInfo.name : projectInfo.name}
        </div>
        <div
          onClick={() => {
            console.log(projectInfo.start.seconds);
          }}
          className="TextS"
        >
          {/* {YYYY}/{MM}/{DD} */}
          ~2022/05/09
        </div>
      </div>
      <ul className="Hashtags TextS">
        {tags}
        <button onClick={addHashTag} className="TextS theme bold">
          {" "}
          >>>+{" "}
        </button>
      </ul>
    </div>
  );
}

export default ProjectInfo;
