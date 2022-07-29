import React from "react";
import { StyledAboutPage } from "../styles/styledMain.js";
import SectBlock from "../components/SectBlock";

function AboutPage({ isDesktop }) {
	return (
		<StyledAboutPage className="AboutPage">
			{/* -----------------general--------------------- */}
			<SectBlock
				start="start"
				className="balancePro"
				sect="general"
				isDesktop={isDesktop}
				order="1"
			/>
			{/* -----------------Greeting--------------------- */}
			<SectBlock
				className="Greeting"
				sect="Greeting"
				isDesktop={isDesktop}
				order="2"
			/>
			{/* -----------------Dispay--------------------- */}

			<SectBlock
				className="Display"
				sect="Display"
				isDesktop={isDesktop}
				order="3"
			/>

			{/* -----------------ProjectInfo--------------------- */}
			<SectBlock
				className="ProjectInfo"
				sect="ProjectInfo"
				isDesktop={isDesktop}
				order="4"
			/>
			{/* -----------------Edit--------------------- */}

			<SectBlock className="Edit" sect="Edit" isDesktop={isDesktop} order="5" />

			{/* -----------------DragStretch--------------------- */}

			<SectBlock
				className="DragStretch"
				sect="ProjectInfo"
				isDesktop={isDesktop}
				order="6"
				end="end"
			/>

			{/* -----------------backToTop--------------------- */}
			<div
				className="grey backToTop"
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<span>back to top </span>
				<svg
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
		</StyledAboutPage>
	);
}

export default AboutPage;
