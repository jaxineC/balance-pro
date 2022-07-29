import React from "react";
import { Link } from "react-router-dom";
import { StyledSectionBlock, StyledTextSection } from "./SectBlock.styled";
import WorkLife from "../../media/Work-Life.png";
import Greeting from "../../media/Greeting.gif";
import Display from "../../media/Display.gif";
import ProjectInfo from "../../media/ProjectInfo.gif";
import Edit from "../../media/Edit.gif";
import DragStretch from "../../media/DragStretch.gif";
import { Button } from "../Button/Button.styled";

function SectBlock({ sect, isDesktop, order, end, start }) {
	let secContent;
	switch (sect) {
		case "general":
			secContent = {
				title: "Live with a life you like.",
				sub: "with simple work-life balanced GANTT CHART.",
				description:
					"From the small stuff to the big picture, visualize your work and life projects side-by-side so your know when it's tilting before it goes too far.",
				src: WorkLife,
			};
			break;
		case "Greeting":
			secContent = {
				title: "Read messeages you want to read.",
				sub: "Your own greeting text!",
				description:
					"We dedicated to let our users to own this webiste --- CLICK, TYPING, and don't forget to hit ENTER.",
				src: Greeting,
			};
			break;
		case "Display":
			secContent = {
				title: "Visualize layout as you like.",
				sub: "with our Focus/ Balance/ Overlay mode.",
				description:
					"The default mode is 1:1 balace mode. We hope to show you how your work-life and personal life is balanced or tilt at the first glance.",
				src: Display,
			};
			break;
		case "ProjectInfo":
			secContent = {
				title: "Change what you saw.",
				sub: "Intuitively!",
				description: "It's simple.",
				src: ProjectInfo,
			};
			break;
		case "Edit":
			secContent = {
				title: "For those additional notes",
				sub: "Or major plan changes.",
				description:
					"We hate form-filling, but it's convinent when you're editing something don't show visually -- hidden notes or the planned task happens far from now.",
				src: Edit,
			};
			break;
		case "DragStretch":
			secContent = {
				title: "Move tasks with Drag & Stretch.",
				sub: "Hover to Edit & Delete.",
				description:
					"From the small stuff to the big picture, visualize your work and life projects side-by-side so your know when it's tilting before it	goes too far.",
				src: DragStretch,
			};
			break;
		default:
			secContent = {
				title: "NA",
				sub: "NA",
				description: "NA",
			};
	}
	return (
		<StyledSectionBlock start={start} className={sect}>
			{order % 2 === 0 ? (
				<img className="SectionBlock__img" src={secContent.src} alt={sect} />
			) : (
				""
			)}
			<StyledTextSection order={order}>
				<div className="TextSection__title">
					<div>{secContent.title}</div>
					<div className="TextSection__sub">{secContent.sub}</div>
				</div>

				<hr />
				<div className="TextSection__description">{secContent.description}</div>
				{!end ? (
					<Button
						onClick={() => {
							isDesktop
								? window.scrollTo(0, window.innerHeight * 0.7 * order)
								: window.scrollTo(0, window.innerHeight * 0.9 * order);
						}}
						type="button"
					>
						Next
					</Button>
				) : (
					<Link to="/">
						<Button attr="primary" type="button">
							Ready, back to the homepage
						</Button>
					</Link>
				)}
			</StyledTextSection>
			{order % 2 === 0 ? (
				""
			) : (
				<img className="SectionBlock__img" src={secContent.src} alt={sect} />
			)}
		</StyledSectionBlock>
	);
}

export default SectBlock;
