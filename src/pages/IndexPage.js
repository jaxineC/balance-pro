import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cover from "../icon/2201_w039_n003_74b_p1_74 [Converted].png";
import LogoImage from "../media/Logo144.png";
import LoginBox from "../components/LoginBox";
import { getAuth } from "firebase/auth";
import { StyledIndexPage } from "../styles/styledMain.js";
import { GoButton } from "../components/Button/Button.styled";

function IndexPage({ userID, setUserID, isDesktop, setIsDeskTop }) {
	function getCurrentUserInfo() {
		const auth = getAuth();
		const user = auth.currentUser;
		if (user) {
			setUserID(user);
		}
	}
	useEffect(() => {
		getCurrentUserInfo();
	}, []);

	return (
		<StyledIndexPage className="IndexPage" isDesktop={isDesktop}>
			<div className="WelcomeImg">
				<img src={cover} alt="welcome" />
				<div>
					<a
						className="TextXS"
						href="https://www.freepik.com/vectors/working-time"
					>
						Working time vector created by upklyak - www.freepik.com
					</a>
				</div>
			</div>
			<LoginBox userID={userID} setUserID={setUserID} />
			<div className="Logo">
				<img src={LogoImage} alt="logo for images" className="image" />
			</div>
			<div className="Background ">
				<hr />
			</div>
			<Link className="Link" to="/list">
				<GoButton attr="primary" userID={userID} className="GoButton bold">
					Enter
				</GoButton>
			</Link>
		</StyledIndexPage>
	);
}

export default IndexPage;
