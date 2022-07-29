import React, { useState, useEffect } from "react";
import Hashtag from "../Hashtag";
import EditableTxt from "../EditableTxt";
import ProjectDate from "../ProjectDate";
import LoadingModal from "../LoadingModal/index.js";
import {
	doc,
	getDoc,
	onSnapshot,
	arrayUnion,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import { HashtagButton } from "../Button/Button.styled";
import { StyledEditableTxt } from "../EditableTxt/EditableTxt.styled.js";
import { StyledHashtag } from "../Hashtag/Hashtag.styled.js";

function ProjectInfo({ userID, cat, selectedProjects }) {
	const [projectInfo, setprojectInfo] = useState({});
	const [hashtags, setHashtags] = useState([]);
	const [addHashtagInput, setAddHashtagInput] = useState("");
	const [isAddHashtag, setIsAddHashtag] = useState(false);
	let col = userID.uid;
	let projectID;
	if (cat === "work") {
		projectID = selectedProjects[0];
	} else {
		projectID = selectedProjects[1];
	}

	// let [YYYY, MM, DD] = ["", "", ""];

	useEffect(() => {
		fetchInfo(cat);
		docListener(cat, projectID);
	}, []);

	async function fetchInfo(cat) {
		const docRef = doc(db, col, projectID);
		const docSnap = await getDoc(docRef);
		setprojectInfo(docSnap.data());
		setHashtags(docSnap.data().hashtag);
	}

	function docListener(cat, projectID) {
		const docRef = doc(db, col, projectID);
		onSnapshot(docRef, (changedSnapshot) => {
			let updatedInfo = changedSnapshot.data();
			setprojectInfo(updatedInfo);
			setHashtags(updatedInfo.hashtag);
		});
	}

	async function handleHashtagUpdate() {
		let docID = projectID;
		let data = { hashtag: arrayUnion(addHashtagInput) };
		const queryRef = doc(db, col, docID);
		try {
			setIsAddHashtag(false);
			await updateDoc(queryRef, data);
			setAddHashtagInput("");
		} catch (error) {}
	}

	async function renderAddHashtag() {
		isAddHashtag ? setIsAddHashtag(false) : setIsAddHashtag(true);
	}

	let addHashtagForm = (
		<StyledHashtag className="Hashtag TextXS">
			<span>#</span>
			<StyledEditableTxt
				isAddHashtag={isAddHashtag}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						handleHashtagUpdate();
					}
				}}
				onChange={(event) => {
					setAddHashtagInput(event.target.value);
				}}
				value={addHashtagInput}
			></StyledEditableTxt>
		</StyledHashtag>
	);

	const hashtagItems = hashtags.map((item, index) => (
		<Hashtag
			isAddHashtag={isAddHashtag}
			key={item}
			className="Hashtag TextXS"
			item={item}
			index={index}
			col={userID.uid}
			docID={projectID}
			projectInfo={projectInfo}
		/>
	));

	return projectInfo ? (
		<div className="ProjectInfo ">
			<EditableTxt
				col={userID.uid}
				docID={projectID}
				projectInfo={projectInfo}
			/>

			<div className="ProjectDate TextS">
				<ProjectDate
					userID={userID}
					col={userID.uid}
					docID={projectID}
					projectInfo={projectInfo}
				/>
			</div>
			<div className="Hashtags">
				{hashtagItems}
				{isAddHashtag ? addHashtagForm : ""}
				<HashtagButton
					onClick={renderAddHashtag}
					className="TextS theme bold"
					style={{ cursor: "pointer" }}
				>
					{`>>>+ `}
				</HashtagButton>
			</div>
		</div>
	) : (
		<LoadingModal />
	);
}

export default ProjectInfo;
