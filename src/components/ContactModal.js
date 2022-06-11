import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactModal({ isContact, setIsContact }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textareaInput, setTextareaInput] = useState("");
  const [message, setMessage] = useState("");

  const emailRegExp = /.+@/;

  function closeModal() {
    setIsContact(false);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_da86wqm",
          "template_um6v3my",
          form.current,
          "LoKIzut9EdFNqs_7j"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMessage("Thank you, message sent!");
      setTimeout(() => {
        setIsContact(false);
        setMessage("");
        setNameInput("");
        setEmailInput("");
        setTextareaInput("");
      }, 2000);
    } catch (error) {}
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="closeModal TextM Modal"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        bottom: 0,
        zIndex: 999,
        display: isContact === true ? "flex" : "none",
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
          display: "flex",
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
          Hello!
        </div>
        <div
          className="TextM"
          style={{
            gridColumn: "1/3",
            textAlign: "center",
          }}
        >
          Any thoughts? Let me know!
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
          type="text"
          name="user_name"
          onChange={(event) => setNameInput(event.target.value)}
          value={nameInput}
          placeholder="name"
          className="nameInput"
        ></input>
        <input
          onChange={(event) => setEmailInput(event.target.value)}
          value={emailInput}
          type="email"
          name="user_email"
          placeholder="email"
          className="emailInput"
        ></input>
        <textarea
          name="message"
          onChange={(event) => setTextareaInput(event.target.value)}
          value={textareaInput}
          type="text"
          placeholder="Leave message here"
          className="messageInput"
          style={{
            width: 225,
            border: "1px solid #dddddd",
            borderRadius: "10px",
            padding: "5px 10px 1px 10px",
            margin: "10px",
            rows: "6",
            resize: "vertical",
          }}
        ></textarea>
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
        <input
          type="submit"
          value="Send"
          style={{
            border: "1px solid #cccccc",
            backgroundColor: "blueviolet",
            color: "white",
          }}
        ></input>
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </form>
  );
}

export default ContactModal;
