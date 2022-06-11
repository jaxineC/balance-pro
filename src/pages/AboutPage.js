import React, { useState, useEffect } from "react";
import "./IndexPage.css";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import WelcomeImg from "../components/WelcomeImg";
import WelcomBack from "../components/WelcomeBack";
import LoginBox from "../components/LoginBox";
import Logo from "../components/Logo";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import WorkLife from "../media/Work-Life.png";
import Greeting from "../media/Greeting.gif";
import DemoDisplay from "../media/demoDisplay.gif";
import DemoOverall from "../media/DemoOverall.gif";

function IndexPage({ userID, setUserID, setIsSignUp }) {
  // const user = useContext(UserContext);
  const [isReady, setIsReady] = useState(false);

  function getCurrentUserInfo() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserID(user);
    }
  }
  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  return (
    <main
      className="AboutPage"
      style={{
        // alignContent: "center",
        display: "flex",
        flexDirection: "column",
        gap: "200px",
      }}
    >
      {/* -----------------work-life--------------------- */}
      <div
        calssName="WorkLife"
        style={{
          height: "90%",
          position: "relative",
          top: "45px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="texts" style={{ alignSelf: "center" }}>
          <div style={{ width: "450px", marginBottom: "30px", fontSize: 24 }}>
            <div>Live with a life you like.</div>
            <div style={{ width: "350px" }}>
              with simple work-life balanced GANTT CHART.
            </div>
          </div>

          <hr style={{ width: "50px" }} />
          <div style={{ width: "350px", marginBottom: "30px" }}>
            From the small stuff to the big picture, visualize your work and
            life projects side-by-side so your know when it's tilting before it
            goes too far.
          </div>
          <button
            className="SignupForm"
            style={{
              border: "1px solid blueviolet",
              color: "blueviolet",
              width: "225px",
              height: "30px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo(0, 600);
            }}
            type="button"
          >
            Next
          </button>
        </div>
        <div
          className="images"
          style={{
            width: "600px",
            position: "relative",
            alignSelf: "center",
          }}
        >
          <img
            src={WorkLife}
            alt="work life"
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          />
        </div>
      </div>
      {/* -----------------Greeting--------------------- */}
      <div
        calssName="Greeting"
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="images"
          style={{ width: "600px", position: "relative", alignSelf: "center" }}
        >
          <img
            src={Greeting}
            alt="Greeting"
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          />
        </div>
        <div
          className="texts"
          style={{ alignSelf: "center", marginLeft: "60px" }}
        >
          <div style={{ width: "450px", marginBottom: "30px", fontSize: 24 }}>
            <div>Read messeages you want to read.</div>
            <div style={{ width: "350px" }}>Your own greeting text!</div>
          </div>

          <hr style={{ width: "50px" }} />
          <div style={{ width: "350px", marginBottom: "30px" }}>
            We dedicated to let our users to own this webiste --- CLICK, TYPING,
            and don't forget to hit ENTER.
          </div>
          <button
            className="SignupForm"
            style={{
              border: "1px solid blueviolet",
              color: "blueviolet",
              width: "225px",
              height: "30px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={(event) => {
              window.scrollTo(0, 1100);
            }}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
      {/* -----------------Dispay--------------------- */}

      <div
        calssName="demoDisplay"
        style={{
          height: "90%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="texts" style={{ alignSelf: "center" }}>
          <div style={{ width: "450px", marginBottom: "50px", fontSize: 24 }}>
            <div>Visualize layout as you like.</div>
            <div style={{ width: "350px" }}>
              with our Focus/ Balance/ Overlay mode.
            </div>
          </div>

          <hr style={{ width: "50px" }} />
          <div style={{ width: "350px", marginBottom: "30px" }}>
            The default mode is 1:1 balace mode. We hope to show you how your
            work-life and personal life is balanced or tilt at the first glance.
          </div>
          <button
            className="SignupForm"
            style={{
              border: "1px solid blueviolet",
              color: "blueviolet",
              width: "225px",
              height: "30px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={(event) => {
              window.scrollTo(0, 1700);
            }}
            type="button"
          >
            Next
          </button>
        </div>
        <div
          className="images"
          style={{ width: "600px", position: "relative", alignSelf: "center" }}
        >
          <img
            src={DemoDisplay}
            alt="DemoDisplay"
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          />
        </div>
      </div>

      {/* -----------------overall--------------------- */}
      <div
        calssName="demoOverall"
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="images"
          style={{ width: "600px", position: "relative", alignSelf: "center" }}
        >
          <img
            src={DemoOverall}
            alt="DemoOverall"
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          />
        </div>
        <div
          className="texts"
          style={{ alignSelf: "center", marginLeft: "60px" }}
        >
          <div style={{ width: "450px", marginBottom: "30px", fontSize: 24 }}>
            <div style={{ width: "350px" }}>
              Move tasks with Drag & Stretch. Hover to Edit & Delete.
            </div>
          </div>

          <hr style={{ width: "50px" }} />
          <div style={{ width: "350px", marginBottom: "30px" }}>
            From the small stuff to the big picture, visualize your work and
            life projects side-by-side so your know when it's tilting before it
            goes too far.
          </div>
          <Link to="/">
            <button
              className="SignupForm"
              style={{
                border: "1px solid #cccccc",
                backgroundColor: "blueviolet",
                color: "white",
                width: "225px",
                height: "30px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              type="button"
            >
              Ready, back to the homepage
            </button>
          </Link>
        </div>
      </div>

      <div style={{ height: "200px", backgroundColor: "blueviolet" }}>
        <div
          onClick={() => {
            window.scrollBy(0, 0);
          }}
          className="TextS"
          style={{
            color: "#222500 ",
            height: "100px",
            textAlign: "center",
            backgroundColor: "blueviolet",
            position: "relative",
            bottom: "10px",
            padding: "10px",
          }}
        >
          Back to top
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
