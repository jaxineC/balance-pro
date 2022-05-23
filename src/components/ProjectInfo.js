import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "./Hashtag";
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

function ProjectInfo({
  cat,
  projectID,
  Tasks,
  setTasks,
  selectedProjects,
  setSelectedProjects,
}) {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag
  const [projectInfo, setprojectInfo] = useState({});
  const [hashtag, setHashtag] = useState([]);

  async function fetchInfo(cat) {
    if (cat === "work") {
      const docRef = doc(db, "jx-projects", selectedProjects[0]);
      const docSnap = await getDoc(docRef);
      setprojectInfo(docSnap.data());
      setHashtag(docSnap.data().hashtag);
    } else {
      const docRef = doc(db, "jx-projects", selectedProjects[1]);
      const docSnap = await getDoc(docRef);
      setprojectInfo(docSnap.data());
      setHashtag(docSnap.data().hashtag);
    }
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    if (cat === "work") {
      const docRef = doc(db, "jx-projects", selectedProjects[0]);
      const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        setprojectInfo(updatedTasks);
        setHashtag(doc.data().hashtag);
      });
    } else {
      const docRef = doc(db, "jx-projects", selectedProjects[1]);
      const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
        let updatedTasks = [];
        changedSnapshot.forEach((doc) => {
          updatedTasks = [...updatedTasks, doc.data()];
        });
        let updatedTags = [];
        changedSnapshot.forEach((doc) => {
          updatedTags = [...updatedTags, doc.data().hashtag];
        });
        setprojectInfo(updatedTasks);
        setHashtag(doc.data().hashtag);
      });
    }
  }

  function addHashTag({}) {}

  useEffect(() => {
    fetchInfo(cat);
    docListener();
  }, []);

  //------------------------------------------------------------------------------
  const tags = hashtag.map((item, index) => (
    <li key={index} className="Hashtag TextS">
      # {item}
    </li>
  ));

  console.log(hashtag);
  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">
          {cat === "work" ? projectInfo.name : projectInfo.name}
        </div>
        <div className="TextS">2021/12/27 ~ 2022/07/08</div>
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
