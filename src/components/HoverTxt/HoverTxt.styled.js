import styled from "styled-components";
import "../../styles/index.css";

export const StyledHoverTxt = styled.div`
	color: #000000;
	display: ${(props) => (props.instruction ? "block" : "none")};
	position: fixed;
	top: ${(props) => (props.instruction ? props.mousePosition[1] - 10 : 0)};
	left: ${(props) => (props.instruction ? props.mousePosition[0] + 10 : 0)};
	background-color: #fae6ff;
	height: 4px;
	text-align: center;
	span {
		position: relative;
		bottom: 10px;
		padding: 0px 3px;
	}
`;
