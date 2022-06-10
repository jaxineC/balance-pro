import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import QuickAccess from "../components/QuickAccess";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";
import HoverTxt from "../components/HoverTxt.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  getCurrentUserInfo,
} from "firebase/auth";
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
} from "firebase/firestore";
import { db } from "../firebase.js";

function ProjectPage({
  userID,
  selectedProjects,
  setSelectedProjects,
  setUserID,
}) {
  const [XPosition, setXPosition] = useState(20 * (8 * 7 - 1));
  const [focus, setFocus] = useState("balance"); //"balance", "work", "life", "overlay"
  const [instruction, setInstruction] = useState("");
  const [mousePosition, setMousePosition] = useState([]);

  function getCurrentUserInfo() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user);
        console.log(selectedProjects);
      } else {
        // User is signed out
        // ...
      }
    });

    async function fetchData() {
      try {
        const docSnap = await getDoc(doc(db, userID.uid, selectedProjects));
        if (docSnap.exists()) {
          console.log(docSnap.data());
          setSelectedProjects([docSnap.data().work, docSnap.data().life]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error getting cached document:", error);
      }
    }
    fetchData();
  }

  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  let divStyle;
  if (focus === "balance") {
    divStyle = {
      gridTemplateRows: "11% calc(39% - 1px) 11% calc(39% - 1px) 0%",
    };
  } else if (focus === "work") {
    divStyle = {
      gridTemplateRows: "11% calc(78% - 2px) 11% 0% 0%",
    };
  } else if (focus === "life") {
    divStyle = {
      gridTemplateRows: "11% 0% 11% calc(78% - 2px) 0%",
    };
  } else {
    divStyle = {
      gridTemplateRows: "11% 0% 11% 0% calc(78% - 2px)",
    };
  }

  if (userID) {
    return (
      <main className="ProjectPage" style={divStyle}>
        <ProjectInfo
          userID={userID}
          cat="work"
          projectID={selectedProjects[0]}
        />
        <Timeline
          userID={userID}
          cat="work"
          projectID={selectedProjects[0]}
          XPosition={XPosition}
          setXPosition={setXPosition}
        />
        <Unfold
          focus={focus}
          setFocus={setFocus}
          mousePosition={mousePosition}
          setMousePosition={setMousePosition}
          instruction={instruction}
          setInstruction={setInstruction}
        />
        <ProjectInfo
          userID={userID}
          cat="life"
          projectID={selectedProjects[1]}
        />
        <Timeline
          userID={userID}
          cat="life"
          projectID={selectedProjects[1]}
          XPosition={XPosition}
          setXPosition={setXPosition}
        />
        <Timeline
          userID={userID}
          cat="overlay"
          projectID={selectedProjects}
          XPosition={XPosition}
          setXPosition={setXPosition}
        />
        <DisplayMode focus={focus} setFocus={setFocus} />
        {/* <QuickAccess XPosition={XPosition} setXPosition={setXPosition} /> */}
        <HoverTxt instruction={instruction} mousePosition={mousePosition} />
      </main>
    );
  } else {
    return <></>;
  }
}

export default ProjectPage;
