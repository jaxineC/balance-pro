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
import EditableTxt from "./EditableTxt.js";
import LoadingModal from "./LoadingModal.js";

function ProjectInfo({ userID, cat, projectID, Tasks, setTasks }) {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag
  const [projectInfo, setprojectInfo] = useState({});
  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState("");
  let col = userID.uid;
  let [YYYY, MM, DD] = ["", "", ""];

  useEffect(() => {
    fetchInfo(cat);
    docListener(cat, projectID);
  }, []);

  // useEffect(() => {
  //   renderDate();
  // }, [projectInfo]);

  async function fetchInfo(cat) {
    console.log({ cat }, "run fetchInfo");
    const docRef = doc(db, col, projectID);
    const docSnap = await getDoc(docRef);
    setprojectInfo(docSnap.data());
    setHashtags(docSnap.data().hashtag);
    // renderDate();
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    console.log({ cat }, "run docListener");
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

  async function handleAddHashTag() {
    console.log({ cat }, "run addHashTag");
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

  function renderDate() {
    console.log({ cat }, "run renderTime");
    // let startDate = new Date(projectInfo.start.seconds * 1000);
    let startDate = projectInfo.start.toDate();
    let options = { month: "short" };
    [YYYY, MM, DD] = [
      startDate.getFullYear(),
      new Intl.DateTimeFormat("en-US", options).format(startDate),
      startDate.getDate().toString().padStart(2, "0"),
    ];
  }
  console.log({ cat }, "render-----");
  console.log(projectInfo);

  function renderDateModal() {}

  async function addHashtag() {
    let docID = projectID;
    let data = { hashtag: arrayUnion(hashtagInput) };
    const queryRef = doc(db, col, docID);
    await updateDoc(queryRef, data);
  }

  //------------------------------------------------------------------------------
  let HashtagStyle = {
    textTransform: "capitalize",
    marginRight: "10px",
    alignSelf: "flex-end",
    whiteSpace: "nowrap",
    padding: "0px 8px",
    backgroundColor: "#e6f252",
    color: "#666666",
    borderStyle: "none",
    borderRadius: "5px",
  };
  const hashtagItems = hashtags.map((item, index) => (
    <li key={index} className="Hashtag TextXS">
      {/* <Hashtag
        item={item}
        index={index}
        col={userID.uid}
        docID={projectID}
        projectInfo={projectInfo}
        HashtagStyle={HashtagStyle}
      /> */}
      <span>{`# ${hashtags[index]}`}</span>
    </li>
  ));
  const editableTxtStyle = {
    height: 40,
    width: "100%",
    overflow: "scroll",
    padding: 0,
    margin: 0,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
    borderStyle: "none",
    fontSize: "24px",
  };

  return projectInfo ? (
    <div className="ProjectInfo ">
      {/* <div
        className="TextL projectName"
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
        }}
      >
        {projectInfo.name}

      </div> */}
      <EditableTxt
        col={userID.uid}
        docID={projectID}
        projectInfo={projectInfo}
        editableTxtStyle={editableTxtStyle}
      />
      <div
        className="ProjectDate TextS"
        onClick={renderDateModal}
        // onClick={() => {
        //   console.log(projectInfo.start.toDate().getFullYear());
        //   console.log(projectInfo.start.toDate().getMonth() + 1);
        //   // console.log(
        //   //   new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        //   //     projectInfo.start
        //   //   )
        //   // );
        //   console.log(projectInfo.start.toDate().getDate());
        // }}
      >
        {projectInfo.start ? projectInfo.start.toDate().getFullYear() : ""}/
        {projectInfo.start ? projectInfo.start.toDate().getMonth() + 1 : ""}/
        {projectInfo.start ? projectInfo.start.toDate().getDate() : ""}~
        {projectInfo.end ? projectInfo.end.toDate().getFullYear() : ""}/
        {projectInfo.end ? projectInfo.end.toDate().getMonth() + 1 : ""}/
        {projectInfo.end ? projectInfo.end.toDate().getDate() : ""}
      </div>
      <ul className="Hashtags">
        {hashtagItems}
        <button
          onClick={addHashtag}
          className="TextS theme bold"
          style={{ cursor: "pointer" }}
        >
          {" "}
          >>>+{" "}
        </button>
      </ul>
    </div>
  ) : (
    <LoadingModal />
  );
}

export default ProjectInfo;
