import React from "react";
import { StyledDisplayMode } from "./DisplayMode.styled.js";

function DisplayMode({ focus, setFocus, isDesktop }) {
	let focusTxt;
	let balanceTxt;
	let overlayTxt;
	if (isDesktop) {
		focusTxt = " Focus ";
		balanceTxt = " 1: 1 ";
		overlayTxt = " Overlay ";
	} else {
		focusTxt = (
			<svg fill="none" viewBox="76 -76 512 512" width="23">
				<path
					clip-rule="evenodd"
					d="M413.7-53.6c-53.8-11.9-109.5-11.9-163.3,0l-11.3,2.5C176.9-37.4,125.6,4.3,99.2,60.5c-4,8.4,2.5,17.7,11.8,17.7h441.8
c9.3,0,15.8-9.2,11.8-17.7C538.4,4.3,487.1-37.4,424.9-51.1L413.7-53.6z M86.2,262.7c-10.8-43.5-13-88.6-6.5-132.7
c1-6.4,6.6-11.1,13.1-11.1h478.5c6.5,0,12.1,4.7,13.1,11.1c6.5,44.1,4.4,89.2-6.5,132.7c-18.5,74.4-77.8,131.9-152.9,148.4
l-11.3,2.5c-53.8,11.9-109.5,11.9-163.3,0l-11.3-2.5C163.9,394.6,104.7,337.1,86.2,262.7L86.2,262.7z M195.7,159.6
c-11.3,0-20.4,9.1-20.4,20.4c0,11.2,9.2,20.4,20.4,20.4h109.1c11.3,0,20.5-9.1,20.5-20.4c0-11.2-9.2-20.4-20.5-20.4H195.7z"
					fill="rgb(152,152,152)"
					fill-rule="evenodd"
				/>
			</svg>
		);
		balanceTxt = (
			<svg
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="76 -76 512 512"
				width="23"
			>
				<path
					d="M83.7,263c-3.6-14.4-7.5-26.8-7.9-40.4c-0.6-19.6,8-20.5,14.7-20.5h482.6c6.6,0,15.9,4.7,14.8,18.6
    c-1.1,14.4-4.5,27.3-8.2,42.3c-18.7,75-78.5,133-154.3,149.7l-11.3,2.5c-54.3,12-110.5,12-164.7,0l-11.3-2.5
    C162.2,396,102.4,337.9,83.7,263L83.7,263z M580.3,97c3.6,14.4,7.4,26.8,7.9,40.4c0.6,18.3-8,20.5-14.7,20.5H91.1
    c-6.6,0-15.9-4.3-14.8-18.6c1.1-14.4,4.5-27.3,8.2-42.3c18.7-75,78.5-133,154.2-149.7l11.3-2.5c54.3-12,110.5-12,164.7,0l11.3,2.5
    C501.8-36,561.6,22,580.3,97L580.3,97z M269.8,273.8c-11.3,0-20.6,9.2-20.6,20.5s9.2,20.5,20.6,20.5h110c11.3,0,20.6-9.2,20.6-20.5
    s-9.2-20.5-20.6-20.5H269.8z M269.8,46.8c-11.3,0-20.6,9.2-20.6,20.5s9.2,20.5,20.6,20.5h110c11.3,0,20.6-9.2,20.6-20.5
    s-9.2-20.5-20.6-20.5H269.8z"
					fill="rgb(152,152,152)"
					fill-rule="evenodd"
				/>
			</svg>
		);
		overlayTxt = (
			<svg
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="76 -76 512 512"
				width="23"
			>
				<path
					d="M413.6-53.6c-53.8-11.9-109.5-11.9-163.3,0l-11.2,2.5C176.9-37.3,125.7,4.4,99.3,60.5c-3.9,8.5,2.5,17.7,11.9,17.7h441.7
c9.3,0,15.8-9.2,11.9-17.7C538.3,4.4,487.1-37.3,424.8-51.1L413.6-53.6z M86.2,262.7c-10.9-43.4-13-88.5-6.4-132.6
c1-6.4,6.6-11.1,13.1-11.1h478.3c6.6,0,12.1,4.7,13.1,11.1c6.6,44.1,4.4,89.1-6.4,132.6c-18.6,74.4-77.8,131.8-152.9,148.4
l-11.2,2.5c-53.8,11.9-109.5,11.9-163.3,0l-11.2-2.5C163.9,394.5,104.7,337,86.2,262.7L86.2,262.7z M195.6,159.7
c-11.2,0-20.5,9.1-20.5,20.3c0,11.2,9.1,20.3,20.5,20.3h109c11.2,0,20.5-9.1,20.5-20.3c0-11.2-9.1-20.3-20.5-20.3H195.6z
M369.9,255.5c-11.2,0-20.5,9.1-20.5,20.3s9.1,20.3,20.5,20.3h109c11.2,0,20.5-9.1,20.5-20.3c0-11.2-9.1-20.3-20.5-20.3L369.9,255.5
L369.9,255.5z"
					fill="rgb(152,152,152)"
					fill-rule="evenodd"
				/>
			</svg>
		);
	}

	return (
		<StyledDisplayMode focus={focus} className="DisplayMode ">
			<button
				onClick={(event) => {
					setFocus("work");
				}}
				className="Focus"
			>
				{focusTxt}
			</button>
			<button
				onClick={() => {
					setFocus("balance");
				}}
				className="Balance"
			>
				{balanceTxt}
			</button>
			<button
				onClick={() => {
					setFocus("overlay");
				}}
				className="Overlay"
			>
				{overlayTxt}
			</button>
		</StyledDisplayMode>
	);
}

export default DisplayMode;