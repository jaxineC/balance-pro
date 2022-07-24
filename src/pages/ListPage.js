import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListPage.css";
import WelcomeTxt1 from "../components/WelcomeTxt1";
import WelcomeTxt2 from "../components/WelcomeTxt2";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import Background from "../components/Background";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoButton } from "../styles/SharedStyled.js";
import { StyledListPage } from "../styles/styledComponents.js";

function ListPage({
	userID,
	selectedProjects,
	setSelectedProjects,
	setUserID,
	isDesktop,
}) {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		getCurrentUserInfo();
	}, []);

	function getCurrentUserInfo() {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserID(user);
			}
		});
	}

	if (userID) {
		return (
			<StyledListPage className="ListPage">
				<WelcomeTxt1 userID={userID} />
				<WelcomeTxt2 userID={userID} />
				<AddProject userID={userID} isDesktop={isDesktop} />
				<ProjectList
					cat="work"
					userID={userID}
					checked={checked}
					setChecked={setChecked}
					selectedProjects={selectedProjects}
					setSelectedProjects={setSelectedProjects}
				/>
				<ProjectList
					cat="life"
					userID={userID}
					checked={checked}
					setChecked={setChecked}
					selectedProjects={selectedProjects}
					setSelectedProjects={setSelectedProjects}
				/>
				<Background />
				<Link className="Link" to="/project">
					<GoButton
						userID={userID}
						attr="primary"
						onClick={(event) => {
							if (selectedProjects[0] && selectedProjects[1]) {
								console.log("ok");
							}
						}}
						className="bold"
					>
						Go!
					</GoButton>
				</Link>
			</StyledListPage>
		);
	} else {
		return <></>;
	}
}

export default ListPage;
