import styled from "styled-components";
import "../App.css";
import MQ from "./MQ.js";

export const StyledWelcomeTxt = styled.div`
	position: relative;

	input {
		width: 100%;
		height: 80px;
		color: #222500;
		border-style: none;
		margin-left: 0px;
		padding-left: 10px;
		font-family: Segoe UI, sans-serif;
	}
	span {
		height: 6px;
		display: ${(props) => (props.updateAlert === "ok" ? "block" : "none")};
		position: absolute;
		left: 0px;
		top: -12px;
		padding: 0px 4px;

		.updated {
			font-size: 14px;
			color: blueviolet;
			position: relative;
			top: -10px;
			background-color: #fae6ff;
		}
		.failed {
			display: ${(props) => (props.updateAlert === "fail" ? "block" : "none")};
			position: absolute;
			left: 0px;
			top: -12px;
			padding: 0px 4px;
			background-color: #fae6ff;
		}
	}
`;
