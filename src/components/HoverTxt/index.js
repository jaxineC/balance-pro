import React from "react";
import { StyledHoverTxt } from "./HoverTxt.styled.js";

function HoverTxt({ instruction, mousePosition }) {
	return (
		<StyledHoverTxt
			className="HoverTxt TextS"
			instruction={instruction}
			mousePosition={mousePosition}
		>
			<span>{instruction}</span>
		</StyledHoverTxt>
	);
}

export default HoverTxt;
