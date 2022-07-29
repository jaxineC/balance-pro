import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { StyledDeleteBtn } from "./Button.styled.js";

function DeleteBtn({ item, isHover, userID }) {
	async function handleDeleteTask(event) {
		let col = `${userID.uid}/${item.projectID}/tasks`;
		await deleteDoc(
			doc(
				db,
				col,
				event.target.parentElement.parentElement.getAttribute("value")
			)
		);
	}

	return (
		<StyledDeleteBtn>
			<svg
				className="DeleteBtn"
				onClick={handleDeleteTask}
				attr="DeleteBtn"
				isHover={isHover}
				fill="none"
				height="26"
				viewBox="0 0 24 24"
				width="22"
			>
				<path
					clipRule="evenodd"
					d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm1.68415 6.55788c-.2243-.22431-.588-.22431-.81232 0-.22431.22432-.22431.58802 0 .81232l1.28612 1.2861-1.28612 1.2861c-.22431.2243-.22431.588 0 .8123.22432.2243.58802.2243.81232 0l1.2861-1.2861 1.2861 1.2861c.2243.2243.588.2243.8123 0s.2243-.588 0-.8123l-1.2861-1.2861 1.2861-1.2861c.2243-.2243.2243-.588 0-.81232-.2243-.22431-.588-.22431-.8123 0l-1.2861 1.28612z"
					fill="rgb(152,152,152)"
					fillRule="evenodd"
				/>
			</svg>
		</StyledDeleteBtn>
	);
}

export default DeleteBtn;
