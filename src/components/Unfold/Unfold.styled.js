import styled from "styled-components";
import "../../styles/index.css";
// import MQ from "../../styles/MQ";

export const StyledUnfold = styled.svg`
	display: ${(props) =>
		props.focus === "work" || props.focus === "life" ? "block" : "none"};
	position: absolute;
	top: ${(props) => (props.focus === "work" ? "87%" : "18%")};
	z-index: 999;
	text-align: center;
	position: fixed;
	width: 18px;
	left: calc(50vw - 9px);
	top: calc(50vh + 12px);
`;
