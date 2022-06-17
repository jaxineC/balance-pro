import styled from "styled-components";
import "../App.css";
import MQ from "./MQ.js";

//----------------------- function -------------------------//
const handleBtnTypes = (type) => {};

//------------------- Shared styled-components--------------------//
//------------- Button/ Modal/ Input/ Icon--------------------//
//------------------- Button--------------------//

export const Button = styled.button`
  height: 40px;
  width: 225px;
  border: ${(props) =>
    props.attr === "primary" ? "1px solid #cccccc" : "1px solid blueviolet"};
  background-color: ${(props) =>
    props.attr === "primary" ? "blueviolet" : "transparent"};
  color: ${(props) => (props.attr === "primary" ? "#ffffff" : "blueviolet")};

  border-radius: 10px;
  cursor: pointer;
`;

export const HashtagButton = styled(Button)`
  height: 18px;
  width: 6ch;
  border: none;
  color: var(--lime);
`;

export const GoButton = styled(Button)`
  display: ${(props) => (props.userID ? "block" : "none")};
  height: 90px;
  width: 140px;
  border-radius: 50px 0px 0px 50px;
  font-size: var(--TextXXL);
  position: fixed;
  right: 0px;
  top: calc(77.5vh + 45px);
  &:hover {
    outline-style: none;
    box-shadow: rgb(204 204 204) 1px 5px 10px;
  }
  ${MQ} {
    top: calc(77.5vh - 30px);
    font-size: var(--TextL);
    height: 60px;
    width: 90px;
  }
`;

export const ModalButton = styled(Button)`
  height: 30px;
  border-radius: 15px;
  margin: 10px 0px;
  text-align: center;
  place-self: center;
`;

export const LoginButton = styled(Button)`
  width: 180px;
  margin-left: 7px;
  height: 30px;
  border-radius: 15px;
`;

export const AddProjectBtn = styled(Button)`
  font-size: var(--TextL);
  color: blueviolet;
  border: none;
  border-radius: 0px;
  padding: 0px;
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  grid-row: 1 / -1;
  align-self: center;
  z-index: 99;
  text-align: center;

  ${MQ} {
    font-size: 16px;
    border: 1px solid blueviolet;
    border-radius: 25px;
    margin: auto;
    grid-row: 3 / 4;
    z-index: 99;
    padding: 10px;
  }
`;

//------------------- Shared--------------------//
//------------------- icon--------------------//
export const Icon = styled.img`
  height: 18px;
  padding: 0px 5px;
`;

//------------------- Shared--------------------//
//------------------- input--------------------//
export const EditableInput = styled.input`
  background: none;
`;

export const StyledProjectDate = styled.div`
  input {
    border-width: 0px 0px 0px 0px;
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  }
`;

//------------------- Shared--------------------//
//------------------- modal--------------------//
export const Modal = styled.div`
  height: ${(props) => (props.size === "full" ? "100vh" : props.size.height)};
  width: ${(props) => (props.size === "full" ? "100vw" : props.size.width)};
  position: fixed;
  bottom: 0px;
  z-index: 999;
  display: ${(props) => (props.isSignUp === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  .Modal__Form {
    position: absolute;
    width: 320px;
    display: ${(props) => (props.isSignUp === true ? "flex" : "none")};
    flex-direction: column;
    background-color: rgb(242, 242, 242);
    box-shadow: black 5px 5px 10px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 50px 12.5px;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    div {
      text-align: center;
    }
    hr {
      width: 260px;
      text-align: center;
      margin: 25px 0px 12.5px 0px;
      border-color: blueviolet;
    }
    input {
      width: 225px;
      height: 30px;
      border: 1px solid;
      border-radius: 10px;
      border-color: #dddddd;
      margin: 10px;
      letter-spacing: 1px;
      padding-left: 10px;
      &:hover {
        border-color: #8a2be2;
      }
    }
    .passwordInput {
      &::placeholder {
        letter-spacing: 1px;
      }
      letter-spacing: 6px;
    }
    .errorMessage {
      color: blueviolet;
      font-size: var(--TextS);
    }
    .closeBtn {
      height: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
  .Modal__Background {
    height: 100vh;
    width: 100vw;
    background-color: #666666;
    opacity: 0.9;
    position: fixed;
    bottom: 0px;
    z-index: 998;
    display: ${(props) => (props.isSignUp === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
  }
`;

export const ConModal = styled.form`
  height: ${(props) => (props.size === "full" ? "100vh" : props.size)};
  width: ${(props) => (props.size === "full" ? "100vw" : props.size)};
  position: fixed;
  bottom: 0px;
  z-index: 999;
  display: ${(props) => (props.isContact === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  .Modal__Form {
    position: absolute;
    width: 340px;
    display: ${(props) => (props.isContact === true ? "flex" : "none")};
    flex-direction: column;
    background-color: rgb(242, 242, 242);
    box-shadow: black 5px 5px 10px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 50px 12.5px;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    div {
      text-align: center;
    }
    hr {
      width: 260px;
      text-align: center;
      margin: 25px 0px 12.5px 0px;
      border-color: blueviolet;
    }
    input {
      width: 225px;
      height: 30px;
      margin: 10px;
      padding: 5px 10px 1px 10px;
      border: 1px solid;
      border-radius: 10px;
      border-color: #dddddd;
      letter-spacing: 1px;
      &:hover {
        border-color: #8a2be2;
      }
    }
    textarea {
      width: 225px;
      border: 1px solid #dddddd;
      border-radius: 10px;
      padding: 5px 10px 1px 10px;
      margin: 10px;
      resize: vertical;
    }
    .Message {
      color: blueviolet;
      font-size: var(--TextS);
    }
    .closeBtn {
      height: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
  .Modal__Background {
    height: 100vh;
    width: 100vw;
    background-color: #666666;
    opacity: 0.9;
    position: fixed;
    bottom: 0px;
    z-index: 998;
    display: ${(props) => (props.isContact === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
  }
`;

export const StyledAddProjectModal = styled.div`
  color: black;
  width: ${(props) => props.size.width};
  background-color: white;
  box-shadow: 1px 3px 8px #cccccc;
  position: absolute;
  display: ${(props) => (props.isAddProject === true ? "grid" : "none")};
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 15px;
  grid-template-columns: 35% 65%;
  font-size: var(--TextM);
  ${MQ} {
    box-sizing: border-box;
    width: 100%;
  }
  label {
    padding: 5px 10px 1px 10px;
    margin: 0px 0px 5px 0px;
    text-align: left;
    ${MQ} {
      font-size: var(--TextS);
    }
  }
  select {
    border: 1px solid var(--lightGrey);
    width: 160px;
    padding: 5px 10px 1px 5px;
    border-radius: 10px;
    margin: 0px 0px 5px 0px;
    &:focus {
      outline-style: none;
    }
  }

  input {
    width: 160px;
    padding: 5px 10px 1px 10px;
    border-radius: 0px;
    margin: 0px 0px 5px 0px;
  }
  button {
    place-self: flex-start;
  }
  .errorMessage {
    grid-column: 1/-1;
    color: blueviolet;
    font-size: var(--TextS);
  }
  .closeBtn {
    height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const StyledUpdatedMsg = styled.span`
  position: relative;
  height: 6px;
  display: ${(props) => (props.updateAlert !== "" ? "block" : "none")};
  position: absolute;
  left: 0px;
  top: -5px;
  padding: 0px 4px;
  background-color: #fae6ff;
`;
