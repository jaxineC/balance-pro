import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hashtag from "./Hashtag";
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
import { isEditable } from "@testing-library/user-event/dist/utils";

function ProjectInfo({
  isDesktop,
  userID,
  cat,
  selectedProjects,
  test,
  Tasks,
  setTasks,
}) {
  const [inputText, setInputText] = useState(""); //inside ProjectTinfo or Hashtag component for addHashTag
  const [projectInfo, setprojectInfo] = useState({});
  const [hashtags, setHashtags] = useState([]);
  const [addHashtagInput, setAddHashtagInput] = useState("");
  const [isAddHashtag, setIsAddHashtag] = useState(false);
  let col = userID.uid;
  let projectID;
  if (cat === "work") {
    projectID = selectedProjects[0];
  } else {
    projectID = selectedProjects[1];
  }

  let [YYYY, MM, DD] = ["", "", ""];
  let inputArea = "";

  useEffect(() => {
    fetchInfo(cat);
    docListener(cat, projectID);
  }, []);

  // useEffect(() => {
  //   renderDate();
  // }, [projectInfo]);

  async function fetchInfo(cat) {
    const docRef = doc(db, col, projectID);
    const docSnap = await getDoc(docRef);
    setprojectInfo(docSnap.data());
    setHashtags(docSnap.data().hashtag);
    // renderDate();
  }
  // listen: todos collection
  function docListener(cat, projectID) {
    const docRef = doc(db, col, projectID);
    const unsubscribe = onSnapshot(docRef, (changedSnapshot) => {
      let updatedInfo = changedSnapshot.data();
      setprojectInfo(updatedInfo);
      setHashtags(updatedInfo.hashtag);
    });
  }

  function renderDate() {
    // let startDate = new Date(projectInfo.start.seconds * 1000);
    let startDate = projectInfo.start.toDate();
    let options = { month: "short" };
    [YYYY, MM, DD] = [
      startDate.getFullYear(),
      new Intl.DateTimeFormat("en-US", options).format(startDate),
      startDate.getDate().toString().padStart(2, "0"),
    ];
  }

  function renderDateModal() {}

  async function handleHashtagUpdate() {
    let docID = projectID;
    let data = { hashtag: arrayUnion(addHashtagInput) };
    const queryRef = doc(db, col, docID);
    try {
      await updateDoc(queryRef, data);
      setIsAddHashtag(false);
      setAddHashtagInput("");
    } catch (error) {}
  }

  async function renderAddHashtag() {
    isAddHashtag ? setIsAddHashtag(false) : setIsAddHashtag(true);
  }

  //------------------------------------------------------------------------------
  let HashtagInputStyle = {
    pointerEvents: isAddHashtag ? "auto" : "none",
    // width: "60px",
    marginRight: "0px",
    alignSelf: "flex-end",
    whiteSpace: "nowrap",
    padding: "0px 8px",
    backgroundColor: "#e6f252",
    color: "#666666",
    borderStyle: "none",
    borderRadius: "5px",
    margin: 0,
  };

  let addHashtagForm = (
    <div className="Hashtag TextXS">
      <span>#</span>
      <input
        style={HashtagInputStyle}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleHashtagUpdate();
          }
        }}
        onChange={(event) => {
          setAddHashtagInput(event.target.value);
        }}
        value={addHashtagInput}
      ></input>
    </div>
  );

  const hashtagItems = hashtags.map((item, index) => (
    <Hashtag
      key={index}
      className="Hashtag TextXS"
      item={item}
      index={index}
      col={userID.uid}
      docID={projectID}
      projectInfo={projectInfo}
      HashtagInputStyle={HashtagInputStyle}
    />
  ));
  const editableBoxStyle = {
    // overflow: "scroll",
    height: 40,
    width: "100%",
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
    position: "relative",
  };

  const editableTxtStyle = {
    width: isDesktop ? "100%" : "60%",
    padding: 0,
    margin: 0,
    borderStyle: "none",
    fontSize: "24px",
  };

  const options = { year: "numeric", month: "numeric", day: "numeric" };

  return projectInfo ? (
    <div className="ProjectInfo ">
      <EditableTxt
        col={userID.uid}
        docID={projectID}
        projectInfo={projectInfo}
        editableTxtStyle={editableTxtStyle}
        editableBoxStyle={editableBoxStyle}
      />
      <div
        className="ProjectDate TextS"
        onClick={renderDateModal}
        // onClick={() => {
        // }}
      >
        <span>
          {projectInfo.start
            ? projectInfo.start.toDate().toLocaleDateString(undefined, options)
            : ""}
        </span>
        <span>~</span>
        <span>
          {projectInfo.end
            ? projectInfo.end.toDate().toLocaleDateString(undefined, options)
            : ""}
        </span>
      </div>
      <div className="Hashtags">
        {hashtagItems}
        {isAddHashtag ? addHashtagForm : ""}
        <button
          onClick={renderAddHashtag}
          className="TextS theme bold"
          style={{ cursor: "pointer" }}
        >
          {""}
          >>>+{" "}
        </button>
      </div>
    </div>
  ) : (
    <LoadingModal />
  );
}

export default ProjectInfo;
