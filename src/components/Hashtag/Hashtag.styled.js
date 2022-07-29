import styled from "styled-components";
import "../../styles/index.css";

export const StyledHashtag = styled.div`
	height: 18px;
	margin-right: 20px;
	align-self: flex-end;
	white-space: nowrap;
	padding: 2px 18px 2px 12px;
	background-color: #e6f252;
	color: #666666;
	border-style: none;
	border-radius: 8px;
	position: relative;
	font-size: var(--TextS);
	span {
		width: auto;
		pointer-events: none;
		margin-right: 0px;
		align-self: flex-end;
		white-space: nowrap;
		padding: 2px;
		background-color: #e6f252;
		color: #666666;
		border-style: none;
		border-radius: 5px;
		margin: 0;
	}
`;
