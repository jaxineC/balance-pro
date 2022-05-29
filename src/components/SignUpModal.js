import React, { useState, useEffect } from "react";

function SignUpModal({ isSignUp, setIsSignUp }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function closeModal() {
    setIsSignUp(false);
  }

  function handleSubmit() {}

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
          gridTemplateColumns: "20% 60%",
          justifyContent: "flex-start",
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
          value={emailInput}
          placeholder="email"
          className="emailInput"
        ></input>
        <input
          onChange={(event) => setPasswordInput(event.target.value)}
          value={passwordInput}
          type="password"
          placeholder="password"
          className="passwordInput"
        ></input>
        <hr
          style={{
            width: 260,
            gridColumn: "1/3",
            textAlign: "center",
            margin: "12.5px 0px 25px 0px",
            borderColor: "blueviolet",
          }}
        />
        <button
          style={{
            margin: "10px 0px",
            height: 28,
            width: 200,
            border: "1px solid #cccccc",
            backgroundColor: "blueviolet",
            color: "white",
            gridColumn: "1/3",
            textAlign: "center",
            placeSelf: "center",
          }}
          onClick={handleSubmit}
          type="button"
        >
          Create Account
        </button>
        <div style={{ gridColumn: "1/3", textAlign: "center" }}> OR </div>
        <button
          style={{
            margin: "10px 0px",
            height: 28,
            width: 200,
            border: "1px solid #eeeeee",
            backgroundColor: "#bbbbbb",
            color: "white",
            gridColumn: "1/3",
            textAlign: "center",
            placeSelf: "center",
          }}
          onClick={handleSubmit}
          type="button"
        >
          Contiune with Google
        </button>
        <button
          style={{
            margin: "10px 0px",
            height: 28,
            width: 200,
            border: "1px solid #eeeeee",
            backgroundColor: "#bbbbbb",
            color: "white",
            gridColumn: "1/3",
            textAlign: "center",
            placeSelf: "center",
          }}
          onClick={handleSubmit}
          type="button"
        >
          Contiune with Facebook
        </button>
        <div style={{ gridColumn: "1/3", textAlign: "center" }}>
          Already a member? Log in
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
