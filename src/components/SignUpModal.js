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
import { ModalButton, Modal } from "../styles/SharedStyled.js";

function SignUpModal({ isSignUp, setIsSignUp, userID, setUserID }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [isHover, setIsHover] = useState(false);

  const validRegExp = /[A-Za-z0-9]/;
  const invalidRegExp = /[$%^&*-+\=<>?,/]/;
  const emailRegExp = /.+@/;

  function closeModal() {
    setIsSignUp(false);
  }

  function handleSubmit() {
    if (!nameInput || !emailInput || !passwordInput) {
      setMessage("Don't leave any blank input.");
      setTimeout(() => setMessage(""), 3000);
    } else if (
      validRegExp.test(nameInput) === false ||
      invalidRegExp.test(nameInput) === true
    ) {
      setMessage("No symbol allowed in the name.");
      setTimeout(() => setMessage(""), 3000);
    } else if (emailRegExp.test(emailInput) === false) {
      setMessage("That doesn't seems like an email address.");
      setTimeout(() => setMessage(""), 3000);
    } else if (
      validRegExp.test(passwordInput) === false ||
      invalidRegExp.test(passwordInput) === true ||
      passwordInput.length < 6
    ) {
      setMessage("6+ characters and contains no symbol password!");
      setTimeout(() => setMessage(""), 3000);
    } else {
      handleSignUp(emailInput, passwordInput);
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
        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
        setMessage("Signed up succesfully!");
        console.log("Signed up succesfully!");
        setTimeout(() => {
          closeModal();
          setMessage("");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
        setMessage(errorMessage.replace("Firebase: Error", "Oops!"));
        console.log(errorMessage);
        setTimeout(() => {
          closeModal();
          setMessage("");
        }, 3000);
      });
  }

  function handeGoogleAuth() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
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
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setMessage(errorMessage);
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
    <Modal isSignUp={isSignUp} size="full" className="SignUpModal TextM Modal">
      <div className="Modal__Form">
        <div
          className="TextL bold"
          style={{
            marginBottom: 5,
          }}
        >
          Welcome to balancePro
        </div>
        <div className="TextM">Achieve your own life-work balance</div>
        <hr />{" "}
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
        <hr />
        <div className="errorMessage">{message}</div>
        <ModalButton
          attr={isHover ? "" : "primary"}
          onClick={handleSubmit}
          type="button"
        >
          Create Account
        </ModalButton>
        <div> OR </div>
        <ModalButton
          attr={isHover ? "primary" : ""}
          onMouseEnter={(event) => {
            setIsHover(true);
          }}
          onMouseLeave={(event) => {
            setIsHover(false);
          }}
          onClick={handeGoogleAuth}
          type="button"
        >
          Contiune with Google
        </ModalButton>
        <div>
          Already a member?
          <br />
          close this window to Log in
        </div>
        <svg
          onClick={closeModal}
          className="closeBtn"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 298.667 298.667"
          fill="rgb(152,152,152)"
        >
          <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   " />
        </svg>
      </div>
      <div className="Modal__Background"></div>
    </Modal>
  );
}

export default SignUpModal;
