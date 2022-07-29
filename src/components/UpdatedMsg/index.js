import React from "react";
import { StyledUpdatedMsg } from "./UpdatedMsg.styled";

function UpdatedMsg({ updateAlert }) {
	return (
		<StyledUpdatedMsg updateAlert={updateAlert}>
			<span className="updatedMsg">updated!</span>
			<span className="failedMsg">Oops, try again!</span>
		</StyledUpdatedMsg>
	);
}

export default UpdatedMsg;
