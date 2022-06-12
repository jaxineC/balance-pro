import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, collection, setDoc, setCol, Timestamp } from "firebase/firestore";
import { db } from "../firebase.js";

function SignUpModal({ isSignUp, setIsSignUp, userID, setUserID }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");

  const validRegExp = /[A-Za-z0-9]/;
  const invalidRegExp = /[$%^&*-+\=<>?,/]/;
  const emailRegExp = /.+@/;

  function closeModal() {
    setIsSignUp(false);
  }

  function handleSubmit() {
    if (!nameInput || !emailInput || !passwordInput) {
      setMessage("Don't leave any blank input.");
    } else if (
      validRegExp.test(nameInput) === false ||
      invalidRegExp.test(nameInput) === true
    ) {
      setMessage("Please enter a valid name that contains no symbol.");
    } else if (emailRegExp.test(emailInput) === false) {
      setMessage("That doesn't seems like an email address.");
    } else if (
      validRegExp.test(passwordInput) === false ||
      invalidRegExp.test(passwordInput) === true ||
      passwordInput.length < 6
    ) {
      setMessage(
        "Your password is too short! You need 6+ characters and contains no symbol."
      );
    } else {
      setMessage(
        "Signed up succesfully! Check your email to activate your account."
      );
      handleSignUp(emailInput, passwordInput);
      setNameInput("");
      setEmailInput("");
      setPasswordInput("");
      closeModal();
      setMessage("");
    }
  }

  function handleSignUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(userCredential.user, { displayName: nameInput });
        initUserFirestore(user);
        initDemoTasks(user, "work", "Step 1: Click to ADD NEW TASK");
        initDemoTasks(
          user,
          "life",
          "STEP 2: Hover to init DRAG/ STRETCH/ EDIT/ DELETE"
        );
        setUserID(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }

  function handeGoogleAuth() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        updateProfile(user, { displayName: user.displayName });
        initUserFirestore(user);
        initDemoTasks(user, "work", "Step 1: Click to ADD NEW TASK");
        initDemoTasks(
          user,
          "life",
          "STEP 2: Hover to init DRAG/ STRETCH/ EDIT/ DELETE"
        );
        setUserID(user);
        closeModal();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        // ...
      });
  }

  async function initUserFirestore(user) {
    try {
      await setDoc(doc(db, user.uid, "selectedProjects"), {
        work: "demoWorkProject",
        life: "demoLifeProject",
      });
      await setDoc(doc(db, user.uid, "welcomeTXT"), {
        txt1: "Greeting text.",
        txt2: "Enter your own everyday greeting text above. And some details here. --- By click, type, and enter!",
      });
      await setDoc(doc(db, user.uid, "demoWorkProject"), {
        balanced: false,
        cat: "work",
        end: Timestamp.fromDate(new Date(Date.now() + 86400000 * 10)),
        hashtag: ["hashtag", "work"],
        name: "demoWorkProject",
        projectID: "demoWorkProject",
        start: Timestamp.fromDate(new Date(Date.now())),
      });
      await setDoc(doc(db, user.uid, "demoLifeProject"), {
        balanced: false,
        cat: "life",
        end: Timestamp.fromDate(new Date(Date.now() + 86400000 * 10)),
        hashtag: ["hashtag", "life"],
        name: "demoWorkProject",
        projectID: "demoLifeProject",
        start: Timestamp.fromDate(new Date(Date.now())),
      });
    } catch (event) {
      console.error("Error init user document: ", event);
    }
  }

  async function initDemoTasks(user, cat, txt) {
    let col = `${user.uid}/${
      cat === "work" ? "demoWorkProject" : "demoLifeProject"
    }/tasks`;
    let docID = `demo${cat}Task`;
    let data = {
      balanced: true,
      cat: cat,
      content: txt,
      end: Timestamp.fromDate(new Date(Date.now() + 1000 * 60 * 60 * 24 * 10)),
      note: "",
      projectID: cat === "work" ? "demoWorkProject" : "demoLifeProject",
      start: Timestamp.fromDate(new Date(Date.now())),
      taskID: docID,
    };
    try {
      const docRef = await setDoc(doc(db, col, docID), data);
      console.log("Document written with ID: ", docID);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  }

  return (
    <div
      className="SignUpModal TextM Modal"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        bottom: 0,
        zIndex: 999,
        display: isSignUp === true ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="SignupForm"
        style={{
          position: "absolute",
          top: 25,
          width: 360,
          display: isSignUp === true ? "flex" : "none",
          flexDirection: "column",
          backgroundColor: "rgb(242, 242, 242)",
          boxShadow: "black 5px 5px 10px",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#cccccc",
          borderRadius: 10,
          padding: "50px 12.5px",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <div
          className="TextL bold"
          style={{
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Welcome to balancePro
        </div>
        <div
          className="TextM"
          style={{
            gridColumn: "1/3",
            textAlign: "center",
          }}
        >
          Achieve your own life-work balance
        </div>
        <hr
          style={{
            width: 260,
            textAlign: "center",
            margin: "25px 0px 12.5px 0px",
            borderColor: "blueviolet",
          }}
        />{" "}
        <input
          onChange={(event) => setNameInput(event.target.value)}
          value={nameInput}
          placeholder="name"
          className="nameInput"
        ></input>
        <input
          onChange={(event) => setEmailInput(event.target.value)}
          type="email"
          value={emailInput}
          placeholder="email"
          className="emailInput"
        ></input>
        <input
          onChange={(event) => setPasswordInput(event.target.value)}
          value={passwordInput}
          type="password"
          placeholder="6+ characters"
          className="passwordInput"
        ></input>
        <hr
          style={{
            width: 260,
            textAlign: "center",
            margin: "12.5px 0px 25px 0px",
            borderColor: "blueviolet",
          }}
        />
        <div className="TextS" style={{ color: "blueviolet" }}>
          {message}
        </div>
        <button
          style={{
            border: "1px solid #cccccc",
            backgroundColor: "blueviolet",
            color: "white",
          }}
          onClick={handleSubmit}
          type="button"
        >
          Create Account
        </button>
        <div style={{ textAlign: "center" }}> OR </div>
        <button
          onMouseEnter={(event) => {
            event.target.style.backgroundColor = "blueviolet";
            event.target.parentNode.children[8].style.backgroundColor =
              "#bbbbbb";
          }}
          onMouseLeave={(event) => {
            event.target.style.backgroundColor = "#bbbbbb";
            event.target.parentNode.children[8].style.backgroundColor =
              "blueviolet";
          }}
          onClick={handeGoogleAuth}
          style={{
            border: "1px solid #eeeeee",
            backgroundColor: "#bbbbbb",
            color: "white",
          }}
          type="button"
        >
          Contiune with Google
        </button>
        {/* <button
          onMouseEnter={(event) => {
            event.target.style.backgroundColor = "blueviolet";
            event.target.parentNode.children[8].style.backgroundColor =
              "#bbbbbb";
          }}
          onMouseLeave={(event) => {
            event.target.style.backgroundColor = "#bbbbbb";
            event.target.parentNode.children[8].style.backgroundColor =
              "blueviolet";
          }}
          onClick={handeGoogleAuth}
          style={{
            border: "1px solid #eeeeee",
            backgroundColor: "#bbbbbb",
            color: "white",
          }}
          type="button"
        >
          Contiune with Facebook
        </button> */}
        <div style={{ textAlign: "center" }}>
          Already a member? close popup window to Log in
        </div>
        <svg
          onClick={closeModal}
          className="closeBtn"
          style={{
            height: 20,
            position: "absolute",
            top: 15,
            right: 15,
          }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 298.667 298.667"
          fill="rgb(152,152,152)"
        >
          <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   " />
        </svg>
      </div>
      <div
        className="SignUpModal TextM Modal"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#666666",
          opacity: 0.9,
          position: "fixed",
          bottom: 0,
          zIndex: 998,
          display: isSignUp === true ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}

export default SignUpModal;
