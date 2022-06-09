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
  const refInput = useRef(item);

  useEffect(() => {
    setHashtagInput(projectInfo.hashtag.index);
  }, [projectInfo]);

  //--------------------------------------------------handle event-----------------------------------------------// 1
  //--------------------------------------------------handle event-----------------------------------------------//
  // setHashtagInput(item);
  async function removeHashtag() {
    const queryRef = doc(db, col, docID);

    await updateDoc(queryRef, {
      field: arrayUnion(hashtagInput),
    });
    await updateDoc(queryRef, {
      field: arrayRemove(hashtagInput),
    });
  }

  function handleHover(event) {
    // let deleteBtntNode = event.currentTarget.children[0];
    // if (deleteBtntNode) {
    //   if (deleteBtntNode.style.display === "none") {
    //     deleteBtntNode.style.display = "inline";
    //   } else {
    //     deleteBtntNode.style.display = "none";
    //   }
    // }
  }

  return (
    <div className="Hashtag TextXS">
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
      <DeleteBtn />
    </div>
  );
}

export default Hashtag;
