import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledUpdatedMsg = styled.span`
	position: relative;
	height: 6px;
	display: ${(props) => (props.updateAlert !== "" ? "block" : "none")};
	position: absolute;
	left: 0px;
	top: -5px;
	padding: 0px 4px;
	background-color: #fae6ff;
	span {
		font-size: 14px;
		color: blueviolet;
		position: absolute;
		top: -10px;
		padding: 0px 4px;
	}
	.updatedMsg {
		display: ${(props) => (props.updateAlert === "ok" ? "block" : "none")};
	}
	.failedMsg {
		display: ${(props) => (props.updateAlert === "fail" ? "block" : "none")};
	}
`;
