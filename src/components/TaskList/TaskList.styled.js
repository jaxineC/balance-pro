import styled from "styled-components";
import "../../styles/index.css";

export const StyledTaskList = styled.ul`
	&:hover {
		border-color: #666666;
		border-width: 1px 4px 1px 4px;
	}
	&:focus {
		border-color: #ab52f2;
		border-width: 1px 4px 1px 4px;
	}
`;
