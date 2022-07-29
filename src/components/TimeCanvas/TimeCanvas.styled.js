import styled from "styled-components";
import "../../styles/index.css";

export const StyledTimeCanvas = styled.div`
	height: calc(100% - 33px);
	width: 100%;
	display: -webkit-inline-box;
	overflow-x: visible;
	white-space: nowrap;
	position: relative;
	background-color: var(--white);
	&::-webkit-scrollbar {
		display: none;
	}
	.timeFrame {
		width: 19px;
		height: 100%;
		/* float: left; */
		border-width: 0px 0px 0px 1px;
		border-style: dotted;
		border-color: #eeeeee;
		z-index: -1;
	}

	.weekend {
		background-color: #eeeeee;
		border-width: 0px 0px 0px 1px;
		border-style: solid;
		border-color: #ffffff;
	}
`;
