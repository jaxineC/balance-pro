import styled from "styled-components";
import "../App.css";
import MQ from "./MQ.js";


export const MainAbout = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  .demo {
    box-shadow: 10px 10px 10px var(--lightGrey);
  }
  .backToTop {
    height: 100px;
    align-self: flex-end;
    padding: 20px;
    cursor: pointer;
  }

  .footerBackground {
    height: 150px;
    background-color: blueviolet;
  }

  .FooterSec {
    box-sizing: border-box;
    width: 160px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: calc(50vw - 70px);
    bottom: 10px;
    z-index: 99;
  }
  ${MQ} {
    height: auto;
  }
`;

export const SectionBlock = styled.section`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: ${(props) => (props.start ? "relative" : "none")};
  top: ${(props) => (props.start ? "45px" : "none")};
  .SectionBlock__img {
    width: 600px;
    align-self: center;
    ${MQ} {
      width: 320px;
      margin-top: 20px;
    }
  }

  ${MQ} {
    flex-direction: column;
  }
`;

export const TextSection = styled.div`
  align-self: center;
  margin-left: ${(props) => (props.rightSide ? "60px" : "0px")};
  font-size: var(--TextM);
  .TextSection__title {
    width: 450px;
    margin-bottom: 30px;
    font-size: 24px;
    ${MQ} {
      width: 80%;
    }
  }
  .TextSection__sub {
    width: "350px";
  }
  hr {
    width: 50px;
  }
  .TextSection__description {
    width: 350px;
    margin-bottom: 30px;
  }

  ${MQ} {
    margin-left: ${(props) => (props.rightSide ? "30px" : "auto")};
  }
`;

//------------------- Index Page--------------------//
export const MainIndex = styled.main`
  display: grid;
  column-gap: 2.5%;
  align-content: center;
  justify-content: center;
  grid-template-columns: 53% 27% 15%;
  grid-template-rows: 1fr;
  .WelcomeImg {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: auto;
    z-index: -1;
    img {
      object-fit: cover;
      height: 95%;
      width: 120%;
      overflow: visible;
    }
    div {
      a {
        color: #dddddd;
      }
    }
  }
  .Logo {
    width: 100%;
    object-fit: scale-down;
    margin: auto;
  }
  ${MQ} {
    height: calc(100% - 45px);
    grid-template-columns: 100%;
    grid-template-rows: 70% 20%;
    align-content: flex-start;
    .WelcomeImg {
      height: 100% !important;
      width: 100% !important;
      object-fit: cover !important;
      margin: auto;
      overflow: hidden;
    }
    .Logo {
      display: none;
    }
  }
`;

export const Login = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: auto;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  font-size: var(--TextM);
  z-index: 99;
  label {
    margin: 10px 5px;
    padding: 5px 10px 1px;
  }
  input {
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-width: 0 0 1px;
    margin: 10px;
    letter-spacing: 1px;
    &:focus {
      outline: 1.5px solid blueviolet;
      box-shadow: blueviolet;
      border-radius: 5px;
    }
  }
  .passwordInput {
    &::placeholder {
      letter-spacing: 1px;
    }
    letter-spacing: 6px;
  }

  .Login__ErrorMessage {
    color: blueviolet;
    grid-column: 1/3;
    padding: 5px 0px 1px 10px;
    margin: 0px 5px;
    text-align: center;
    font-size: var(--TextS);
  }
  .Login__Method {
    grid-column: 2/3;
    display: flex;
    padding: 5px 0px 1px 10px;
    text-align: center;
    place-self: flex-start;
    .Login__Method__icon {
      height: 16;
      height: 18px;
      padding: 0px 5px;
      place-self: flex-start;
      background-color: white;
      border-radius: 7px;
      padding: 1px 5px;
      cursor: pointer;
    }
  }

  ${MQ} {
    margin: auto;
    background: none;
    z-index: 99;
    padding: 10px;
  }
`;

export const WelcomeBack = styled(Login)`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: var(--TextXXL);
  div {
    padding: 5px 0px 1px 10px;
    margin: 0px 5px;
  }
  ${MQ} {
    font-size: var(--TextXL);
    width: 80%;
    justify-self: start;
    position: relative;
    right: 30px;
  }
`;

//------------------- List Page--------------------//
export const StyledListPage = styled.main`
  height: calc(100vh - 45px);
  width: 100%;
  position: absolute;
  top: 45px;
  display: grid;
  column-gap: 2.5%;
  align-content: center;
  justify-content: center;
  grid-template-columns: 50% 15% 25%;
  grid-template-rows: repeat(2, 1fr);
  ${MQ} {
    height: calc(100vh - 45px);
    overflow: clip;
    grid-template-columns: 90%;
    grid-template-rows: 20% 20% 10% 20% 20%;
    row-gap: 2%;
  }
`;

export const StyledAddProjectSection = styled.section`
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  grid-row: 1 / -1;
  align-self: center;
  z-index: 99;
  text-align: center;

  ${MQ} {
    grid-row: 3/4;
    margin: auto;
    position: relative;
    z-index: 99;
  }
`;

//------------------- Project Page--------------------//
export const StyledDisplayMode = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  ${MQ} {
    right: 10px;
  }
  button {
    background-color: transparent;
    margin: auto 2px;
    border-width: 0px 0px 5px 0px;
    border-style: solid;
    border-color: #eeeeee;
    cursor: pointer;
    ${MQ} {
      border-style: none;
      padding: 2px;
    }
  }
  .Focus {
    border-color: ${(props) =>
      props.focus === "work" || props.focus === "life" ? "#e6f252" : "#eeeeee"};
    svg {
      path {
        fill: ${(props) =>
          props.focus === "work" || props.focus === "life"
            ? "blueviolet"
            : "rgb(152,152,152)"};
      }
    }
  }
  .Balance {
    border-color: ${(props) =>
      props.focus === "balance" ? "#e6f252" : "#eeeeee"};
    svg {
      path {
        fill: ${(props) =>
          props.focus === "balance" ? "blueviolet" : "rgb(152,152,152)"};
      }
    }
  }
  .Overlay {
    border-color: ${(props) =>
      props.focus === "overlay" ? "#e6f252" : "#eeeeee"};
    svg {
      path {
        fill: ${(props) =>
          props.focus === "overlay" ? "blueviolet" : "rgb(152,152,152)"};
      }
    }
  }
`;

export const StyledHashtag = styled.div`
  height: 18px;
  margin-right: 20px;
  align-self: flex-end;
  white-space: nowrap;
  padding: 2px 18px 2px 12px;
  background-color: #e6f252;
  color: #666666;
  border-style: none;
  border-radius: 8px;
  position: relative;
  font-size: var(--TextS);
  span {
    width: auto;
    pointer-events: none;
    margin-right: 0px;
    align-self: flex-end;
    white-space: nowrap;
    padding: 2px;
    background-color: #e6f252;
    color: #666666;
    border-style: none;
    border-radius: 5px;
    margin: 0;
  }
`;

export const StyledEditableInput = styled.input`
  width: ${(props) => (props.value ? props.value.length + 1 + "ch" : "40px")};
  pointer-events: ${(props) => (props.isAddHashtag ? "auto" : "none")};
  margin-right: 0px;
  align-self: flex-end;
  white-space: nowrap;
  padding: 2px;
  background-color: #e6f252;
  color: #666666;
  border-style: none;
  border-radius: 8px;
  margin: 0;
  &:focus {
    outline: 0px solid blueviolet;
  }
`;

export const StyledColorpicker = styled.input`
  height: 30px;
  width: 60px;
  position: fixed;
  bottom: 15px;
  right: 20px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  padding: 0;
`;
