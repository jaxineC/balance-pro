import React from "react";
import cover from "../icon/2201_w039_n003_74b_p1_74 [Converted].png";
import { WelcomeImg } from "../styles/styledComponents.js";

function Welcome() {
	return (
		<div className="WelcomeImg">
			<img
				src={cover}
				alt="welcome"
				style={{
					objectFit: "cover",
					height: "95%",
					width: "120%",
					overflow: "visible",
				}}
			/>
			<div>
				<a
					className="TextXS"
					href="https://www.freepik.com/vectors/working-time"
					style={{ color: "#dddddd" }}
				>
					Working time vector created by upklyak - www.freepik.com
				</a>
			</div>
		</div>
	);
}

export default Welcome;
