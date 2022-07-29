import styled from "styled-components";
import "../../styles/index.css";
import MQ from "../../styles/MQ";

export const StyledSectionBlock = styled.section`
	height: 90%;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: ${(props) => (props.start ? "relative" : "none")};
	top: ${(props) => (props.start ? "45px" : "none")};
	.SectionBlock__img {
		width: 600px;
		align-self: center;
		${MQ} {
			width: 320px;
			margin-top: 20px;
		}
	}

	${MQ} {
		flex-direction: column;
	}
`;

export const StyledTextSection = styled.div`
	align-self: center;
	margin-left: ${(props) => (props.order % 2 === 0 ? "60px" : "0px")};
	font-size: var(--TextM);
	.TextSection__title {
		width: 450px;
		margin-bottom: 30px;
		font-size: 24px;
		${MQ} {
			width: 80%;
		}
	}
	.TextSection__sub {
		width: "350px";
	}
	hr {
		width: 50px;
	}
	.TextSection__description {
		width: 350px;
		margin-bottom: 30px;
	}

	${MQ} {
		margin-left: 0px;
	}
`;
