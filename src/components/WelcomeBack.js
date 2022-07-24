import React from "react";
import { WelcomeBack } from "../styles/styledComponents.js";

function LoginBox({ userID }) {
	return (
		<WelcomeBack className="WelcomeBack">
			<div className="bold">
				Hey {userID.displayName ? userID.displayName : "newcomer"},
			</div>
			<div className="bold">Welcome {userID.displayName ? "back!" : "!"}</div>
		</WelcomeBack>
	);
}

export default LoginBox;
