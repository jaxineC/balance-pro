import React, { useState, useEffect } from "react";
import Hashtag from "./Hashtag";
import EditableTxt from "./EditableTxt.js";
import ProjectDate from "./ProjectDate.js";
import LoadingModal from "./LoadingModal.js";
import {
  doc,
  getDoc,
  onSnapshot,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { HashtagButton } from "../styles/SharedStyled.js";
import {
  StyledHashtag,
  StyledEditableInput,
} from "../styles/styledComponents.js";

function ProjectInfo({
  isDesktop,
  userID,
  cat,
  selectedProjects,
  test,
  Tasks,
  setTasks,
  focus,
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
      setIsAddHashtag(false);
      await updateDoc(queryRef, data);
      setAddHashtagInput("");
    } catch (error) {}
  }

  async function renderAddHashtag() {
    isAddHashtag ? setIsAddHashtag(false) : setIsAddHashtag(true);
  }

  //------------------------------------------------------------------------------
  let HashtagInputStyle = {
    // width: "60px",
  };

  let addHashtagForm = (
    <StyledHashtag className="Hashtag TextXS">
      <span>#</span>
      <StyledEditableInput
        isAddHashtag={isAddHashtag}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleHashtagUpdate();
          }
        }}
        onChange={(event) => {
          setAddHashtagInput(event.target.value);
        }}
        value={addHashtagInput}
      ></StyledEditableInput>
    </StyledHashtag>
  );

  const hashtagItems = hashtags.map((item, index) => (
    <Hashtag
      isAddHashtag={isAddHashtag}
      key={item}
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

      <div className="ProjectDate TextS">
        <ProjectDate
          userID={userID}
          col={userID.uid}
          docID={projectID}
          projectInfo={projectInfo}
        />
      </div>
      <div className="Hashtags">
        {hashtagItems}
        {isAddHashtag ? addHashtagForm : ""}
        <HashtagButton
          onClick={renderAddHashtag}
          className="TextS theme bold"
          style={{ cursor: "pointer" }}
        >
          {""}
          >>>+{" "}
        </HashtagButton>
      </div>
    </div>
  ) : (
    <LoadingModal />
  );
}

export default ProjectInfo;
