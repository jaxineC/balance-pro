import styled from "styled-components";
// import "../App.css";
import MQ from "../../styles/MQ.js";

export const StyledAddProject = styled.section`
	width: 100%;
	margin: auto;
	background-color: #ffffff;
	grid-row: 1 / -1;
	align-self: center;
	z-index: 99;
	text-align: center;

	${MQ} {
		grid-row: 3/4;
		margin: auto;
		position: relative;
		z-index: 99;
	}
`;
