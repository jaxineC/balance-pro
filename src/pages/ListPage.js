import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WelcomeTxt from "../components/WelcomeTxt";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoButton } from "../components/Button/Button.styled.js";
import { StyledListPage } from "../styles/styledMain.js";

function ListPage({
	userID,
	setUserID,
	selectedProjects,
	setSelectedProjects,
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
			<>
				<StyledListPage className="ListPage">
					<WelcomeTxt userID={userID} attr="WelcomeTxt1" />
					<WelcomeTxt userID={userID} attr="WelcomeTxt2" />
					<AddProject userID={userID} />
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
					<div className="Background ">
						<hr />
					</div>
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
			</>
		);
	} else {
		return <></>;
	}
}

export default ListPage;
