import React from "react";
import styled from "styled-components";

const AboutPage = ({ isDesktop, className }) => {
  return (
    <main className={className}>
      <section className="section" />
      <div className="element__info">
        <div className="element__title" skyblue>
          Cute Puppy
        </div>
        <div className="element__description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </main>
  );
};

const styledAboutPage = styled(AboutPage)`
    height: 40px;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
  .EditableTxt__input {
    width: 100%;
    padding: 0px;
    margin: 0px;
    border-style: none;
    font-size: 24px;
  }
  .EditableTxt__span__box {
    height: 6px;
    display: updateAlert === "ok" ? "block" : "none";
    position: "absolute";
    left: 0px;
    top: -12px;
    padding: 0px 4px;
    background-color: #fae6ff;
    .EditableTxt__span__txt {
      font-size: 14px;
      color: blueviolet;
      position: relative;
      top: -10px;
    }
  }
`;

export { styledAboutPage };