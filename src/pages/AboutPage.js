import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WorkLife from "../media/Work-Life.png";
import Greeting from "../media/Greeting.gif";
import DemoDisplay from "../media/demoDisplay.gif";
import DemoOverall from "../media/DemoOverall.gif";
import {
  MainAbout,
  SectionBlock,
  TextSection,
} from "../styles/styledComponents.js";
import { Button } from "../styles/SharedStyled.js";

function AboutPage({ isDesktop, setUserID }) {
  return (
    <MainAbout className="AboutPage">
      {/* -----------------work-life image--------------------- */}
      <SectionBlock start className="balancePro">
        <TextSection>
          <div className="TextSection__title">
            <div>Live with a life you like.</div>
            <div className="TextSection__sub">
              with simple work-life balanced GANTT CHART.
            </div>
          </div>

          <hr />
          <div className="TextSection__description">
            From the small stuff to the big picture, visualize your work and
            life projects side-by-side so your know when it's tilting before it
            goes too far.
          </div>
          <Button
            onClick={() => {
              isDesktop
                ? window.scrollTo(0, 600)
                : window.scrollTo(0, window.innerHeight * 0.9);
            }}
            type="button"
          >
            Next
          </Button>
        </TextSection>
        <img className="SectionBlock__img" src={WorkLife} alt="work life " />
      </SectionBlock>
      {/* -----------------Greeting--------------------- */}
      <SectionBlock className="Greeting">
        <img className="SectionBlock__img" src={Greeting} alt="Greeting" />
        <TextSection rightSide>
          <div className="TextSection__title">
            <div>Read messeages you want to read.</div>
            <div className="TextSection__sub">Your own greeting text!</div>
          </div>

          <hr />
          <div className="TextSection__description">
            We dedicated to let our users to own this webiste --- CLICK, TYPING,
            and don't forget to hit ENTER.
          </div>
          <Button
            onClick={(event) => {
              isDesktop
                ? window.scrollTo(0, 1100)
                : window.scrollTo(0, window.innerHeight * 1.85);
            }}
            type="button"
          >
            Next
          </Button>
        </TextSection>
      </SectionBlock>
      {/* -----------------Dispay--------------------- */}

      <SectionBlock className="demoDisplay">
        <TextSection>
          <div className="TextSection__title">
            <div>Visualize layout as you like.</div>
            <div className="TextSection__sub">
              with our Focus/ Balance/ Overlay mode.
            </div>
          </div>

          <hr />
          <div className="TextSection__description">
            The default mode is 1:1 balace mode. We hope to show you how your
            work-life and personal life is balanced or tilt at the first glance.
          </div>
          <Button
            onClick={(event) => {
              isDesktop
                ? window.scrollTo(0, 1700)
                : window.scrollTo(0, window.innerHeight * 2.9);
            }}
            type="button"
          >
            Next
          </Button>
        </TextSection>

        <img
          className="SectionBlock__img"
          src={DemoDisplay}
          alt="DemoDisplay"
        />
      </SectionBlock>

      {/* -----------------overall--------------------- */}

      <SectionBlock className="demoOverall">
        <img
          className="SectionBlock__img"
          src={DemoOverall}
          alt="DemoOverall"
        />
        <TextSection rightSide>
          <div className="TextSection__title">
            <div>Move tasks with Drag & Stretch.</div>
            <div className="TextSection__sub">Hover to Edit & Delete.</div>
          </div>

          <hr />
          <div className="TextSection__description">
            From the small stuff to the big picture, visualize your work and
            life projects side-by-side so your know when it's tilting before it
            goes too far.
          </div>
          <Link to="/">
            <Button attr="primary" type="button">
              Ready, back to the homepage
            </Button>
          </Link>
        </TextSection>
      </SectionBlock>
      <div
        className="grey backToTop"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <span>back to top </span>
        <svg
          // fill="none"
          viewBox="76 -76 512 512"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138-23c0-11.6,9.4-21,21-21h346c11.6,0,21,9.4,21,21s-9.4,21-21,21H159C147.4-2,138-11.4,138-23z M204.2,207.7
	c-10.6-10.6-10.6-27.9,0-38.5L312.8,60.7c5.1-5.1,12-8,19.2-8s14.1,2.9,19.2,8l108.5,108.5c10.6,10.6,10.6,27.9,0,38.5
	c-10.6,10.6-27.9,10.6-38.5,0l-62.1-62.1v238.2c0,15-12.2,27.2-27.2,27.2s-27.2-12.2-27.2-27.2V145.6l-62.1,62.1
	C232.1,218.3,214.9,218.3,204.2,207.7L204.2,207.7z"
            fill="rgb(152,152,152)"
            fillRule="evenodd"
            clipRule="evenodd"
            height="50"
          />
        </svg>
      </div>

      <div className="footerBackground"></div>
    </MainAbout>
  );
}

export default AboutPage;
