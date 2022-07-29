import React, { useState, useEffect } from "react";
import "../styles/ProjectPage.css";
import DisplayMode from "../components/DisplayMode";
import Unfold from "../components/Unfold";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";
import HoverTxt from "../components/HoverTxt/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { StyledProjectPage } from "../styles/styledMain.js";

function ProjectPage({
	isDesktop,
	userID,
	setUserID,
	selectedProjects,
	setSelectedProjects,
}) {
	const [XPosition, setXPosition] = useState(20 * (8 * 7 - 1));
	const [focus, setFocus] = useState("balance");
	const [instruction, setInstruction] = useState("");
	const [mousePosition, setMousePosition] = useState([]);

	useEffect(() => {
		getCurrentUserInfo();
	}, []);

	function getCurrentUserInfo() {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				fetchData(user);
			}
		});
	}

	async function fetchData(user) {
		try {
			const docSnap = await getDoc(doc(db, user.uid, "selectedProjects"));
			if (docSnap.exists()) {
				let list = [];
				list = [docSnap.data().work, docSnap.data().life];
				setSelectedProjects(list);
				setUserID(user);
			} else {
				console.log("No such document!");
			}
		} catch (error) {
			console.log("Error getting cached document:", error);
		}
	}

	if (userID) {
		return (
			<StyledProjectPage className="ProjectPage" focus={focus}>
				<ProjectInfo
					focus={focus}
					isDesktop={isDesktop}
					userID={userID}
					cat="work"
					selectedProjects={selectedProjects}
				/>
				<Timeline
					userID={userID}
					cat="work"
					projectID={selectedProjects[0]}
					XPosition={XPosition}
					setXPosition={setXPosition}
				/>
				<Unfold
					focus={focus}
					setFocus={setFocus}
					mousePosition={mousePosition}
					setMousePosition={setMousePosition}
					instruction={instruction}
					setInstruction={setInstruction}
				/>
				<ProjectInfo
					focus={focus}
					isDesktop={isDesktop}
					userID={userID}
					cat="life"
					selectedProjects={selectedProjects}
				/>
				<Timeline
					userID={userID}
					cat="life"
					projectID={selectedProjects[1]}
					XPosition={XPosition}
					setXPosition={setXPosition}
				/>
				<Timeline
					userID={userID}
					cat="overlay"
					projectID={selectedProjects}
					XPosition={XPosition}
					setXPosition={setXPosition}
				/>
				<DisplayMode focus={focus} setFocus={setFocus} isDesktop={isDesktop} />
				<HoverTxt instruction={instruction} mousePosition={mousePosition} />
			</StyledProjectPage>
		);
	} else {
		return <></>;
	}
}

export default ProjectPage;
