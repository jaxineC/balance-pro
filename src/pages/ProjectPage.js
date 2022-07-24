import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import DisplayMode from "../components/DisplayMode";
import DisplayModeIcon from "../components/DisplayModeIcon";
import Unfold from "../components/Unfold";
import ProjectInfo from "../components/ProjectInfo";
import Timeline from "../components/Timeline";
import HoverTxt from "../components/HoverTxt.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";

function ProjectPage({
	isDesktop,
	userID,
	selectedProjects,
	setSelectedProjects,
	setUserID,
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

	let divStyle;
	if (focus === "balance") {
		divStyle = {
			gridTemplateRows: "11% calc(39% - 1px) 11% calc(39% - 1px) 0%",
		};
	} else if (focus === "work") {
		divStyle = {
			gridTemplateRows: "11% calc(78% - 2px) 11% 0% 0%",
		};
	} else if (focus === "life") {
		divStyle = {
			gridTemplateRows: "11% 0% 11% calc(78% - 2px) 0%",
		};
	} else {
		divStyle = {
			gridTemplateRows: "11% 0% 11% 0% calc(78% - 2px)",
		};
	}

	if (userID) {
		return (
			<main className="ProjectPage" style={divStyle}>
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
				{isDesktop ? (
					<DisplayMode focus={focus} setFocus={setFocus} />
				) : (
					<DisplayModeIcon focus={focus} setFocus={setFocus} />
				)}

				<HoverTxt instruction={instruction} mousePosition={mousePosition} />
			</main>
		);
	} else {
		return <></>;
	}
}

export default ProjectPage;
