import styled from "styled-components";
import "../../styles/index.css";

export const StyledTimeline = styled.div`
	border-width: 0px 0px 1px 0px;
	border-style: solid;
	border-color: #666666;
	width: 100vw;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
