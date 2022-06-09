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
  arrayUnion,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { updateData } from "../module/manageDB.js";
import DeleteBtn from "./DeleteBtn.js";

function Hashtag({ item, index, col, docID, projectInfo, HashtagInputStyle }) {
  //--------------------------------------------------useState & variables---------------------------------------// 0
  //--------------------------------------------------useState & variables---------------------------------------//
  const [hashtagInput, setHashtagInput] = useState(item);
  const [isHover, setIstHover] = useState(false);
  const refInput = useRef(item);

  useEffect(() => {
    setHashtagInput(projectInfo.hashtag.index);
  }, [projectInfo]);

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  // setHashtagInput(item);
  async function handleDeleteHashtag() {
    console.log(col);
    console.log(docID);
    console.log(item);
    const queryRef = doc(db, col, docID);
    await updateDoc(queryRef, {
      hashtag: arrayRemove(item),
    });
  }

  return (
    <div
      className="Hashtag TextXS"
      onMouseEnter={() => {
        setIstHover(true);
      }}
      onMouseLeave={() => {
        setIstHover(false);
      }}
    >
      <span>#</span>
      <input
        style={HashtagInputStyle}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // handleHashtagUpdate();
          }
        }}
        onChange={(event) => {
          setHashtagInput(event.target.value);
        }}
        value={hashtagInput}
        ref={refInput}
      ></input>
      <svg
        className="DeleteBtn"
        onClick={handleDeleteHashtag}
        style={{
          display: isHover ? "inline" : "none",
          height: 26,
          position: "absolute",
          right: 2,
          top: -4,
          padding: 0,
          margin: 0,
        }}
        fill="none"
        height="12"
        viewBox="0 0 24 24"
        width="16"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm1.68415 6.55788c-.2243-.22431-.588-.22431-.81232 0-.22431.22432-.22431.58802 0 .81232l1.28612 1.2861-1.28612 1.2861c-.22431.2243-.22431.588 0 .8123.22432.2243.58802.2243.81232 0l1.2861-1.2861 1.2861 1.2861c.2243.2243.588.2243.8123 0s.2243-.588 0-.8123l-1.2861-1.2861 1.2861-1.2861c.2243-.2243.2243-.588 0-.81232-.2243-.22431-.588-.22431-.8123 0l-1.2861 1.28612z"
          fill="blueviolet"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Hashtag;
