import styled from "styled-components";
import "../../styles/index.css";

export const StyledEditableInput = styled.input`
	width: ${(props) => (props.value ? props.value.length + 1 + "ch" : "40px")};
	pointer-events: ${(props) => (props.isAddHashtag ? "auto" : "none")};
	margin-right: 0px;
	align-self: flex-end;
	white-space: nowrap;
	padding: 2px;
	background-color: #e6f252;
	color: #666666;
	border-style: none;
	border-radius: 8px;
	margin: 0;
	&:focus {
		outline: 0px solid blueviolet;
	}
`;
