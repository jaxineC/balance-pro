import React, { useState, useEffect, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { StyledEditableTxt } from "../styles/SharedStyled";

function EditableTxt({ col, docID, projectInfo }) {
  const refInput = useRef(projectInfo.name);
  const [txtInput, setTxtInput] = useState(refInput);
  const [updateAlert, setUpdateAlert] = useState("");

  useEffect(() => {
    setTxtInput(projectInfo.name);
  }, [projectInfo]);

  function handleTxtUpdate() {
    let data = { name: txtInput };
    updateData(col, docID, data);
  }
  async function updateData(col, docID, data) {
    const queryRef = doc(db, col, docID);
    try {
      await updateDoc(queryRef, data);
      setUpdateAlert("ok");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    } catch (event) {
      setUpdateAlert("fail");
      setTimeout(() => {
        setUpdateAlert("");
      }, 1000);
    }
  }

  return (
    <StyledEditableTxt className="StyledEditableTxt" updateAlert={updateAlert}>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleTxtUpdate();
          }
        }}
        onChange={(event) => {
          setTxtInput(event.target.value);
        }}
        value={txtInput}
        ref={refInput}
      ></input>
      <div className="updateAlert">
        <span className="updatedMsg">updated!</span>
        <span className="failedMsg">Oops, try again!</span>
      </div>
    </StyledEditableTxt>
  );
}

export default EditableTxt;
