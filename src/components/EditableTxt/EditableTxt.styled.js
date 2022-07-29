import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ.js";

export const StyledEditableTxt = styled.div`
	height: 40px;
	width: 100%;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 2;
	position: relative;
	input {
		width: 100%;
		padding: 0;
		margin: 0;
		border-style: none;
		font-size: 24px;
		${MQ} {
			width: 60%;
		}
	}
	div {
		height: 6px;
		display: ${(props) => (props.updateAlert !== "" ? "block" : "none")};
		position: absolute;
		left: 0px;
		top: -8px;
		padding: 0px 4px;
		background-color: #fae6ff;
		span {
			font-size: 14px;
			color: blueviolet;
			position: relative;
			top: -10px;
		}
		.updatedMsg {
			display: ${(props) => (props.updateAlert === "ok" ? "block" : "none")};
		}
		.failedMsg {
			display: ${(props) => (props.updateAlert === "fail" ? "block" : "none")};
		}
	}
`;
