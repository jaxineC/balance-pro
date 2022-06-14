import React from "react";
import styled from "styled-components";

//https://ithelp.ithome.com.tw/articles/10215800

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
  height: ${props.isDesktop ? "calc(100vh - 45px)" : "auto"};
  width: 100%;
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: column;
  gap: 200px;
  .section {
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .section__text {
      align-self: center;
      .section__text__hr {
        width: 50px;
      }
      .section__text__title {
        width: 450px;
        margin-bottom: 30px;
        font-size: 24px;
      }
      .section__text__sub {
        width: "350px";
      }
      .section__text__description {
        width: 350px;
        margin-bottom: 30px;
      }
      .section__text__button {
        border: 1px solid blueviolet;
        color: blueviolet;
        width: 225px;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
      }
      .section__text__button--backToHome {
        border: 1px solid #cccccc;
        background-color: blueviolet;
        color: white;
      }
    }
    .section__text--reverse {
      margin-left: 60px;
    }
    .section__image {
      width: 600px;
      align-self: center;
    }
  }
  .section--start {
    position: relative;
    top: 45px;
  }

  .backToTop {
    height: 100px;
    text-align: end;
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
`;

export { styledAboutPage };
