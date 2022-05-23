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
  const [workInfo, setWorkInfo] = useState({});
  const [lifeInfo, setLifeInfo] = useState({});

  async function fetchInfo(cat) {
    if (cat === "work") {
      const docRef = doc(db, "jx-projects", selectedProjects[0]);
      const docSnap = await getDoc(docRef);
      setWorkInfo(docSnap.data());
    } else {
      const docRef = doc(db, "jx-projects", selectedProjects[1]);
      const docSnap = await getDoc(docRef);
      setLifeInfo(docSnap.data());
    }
  }

  function addHashTag({}) {}

  useEffect(() => {
    fetchInfo(cat);
    //   // docListener();
  }, []);

  //------------------------------------------------------------------------------

  return (
    <div className="ProjectInfo ">
      <div className="projectName">
        <div className="TextL">
          {cat === "work" ? workInfo.name : lifeInfo.name}
        </div>
        <div className="TextS">2021/12/27 ~ 2022/07/08</div>
      </div>
      <span className="Hashtags TextS">
        <ul className="Hashtags">
          <li className="Hashtag TextS"># Hashtag</li>
          <li className="Hashtag TextS"># Hashtag</li>
          {/* <li className="Hashtag TextS">
            {cat == "work"
              ? "#" + workInfo.hashtag[0]
              : "#" + workInfo.hashtag[1]}
          </li> */}
        </ul>
        <button onClick={addHashTag} className="TextS theme bold">
          {" "}
          >>>+{" "}
        </button>
      </span>
    </div>
  );
}

export default ProjectInfo;
