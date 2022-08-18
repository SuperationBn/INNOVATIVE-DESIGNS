import React from "react";
import styled from "styled-components";
// import { ArticleGrid } from "../StyleGlobal";

const SpanmerSection = styled.section`
	width: 100%;
	padding: 7rem 1rem 5rem 1rem;

	@media (max-width: 400px) {
		padding: 3rem 1rem 3rem 1rem;
	}
`;

const DivContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 3rem;
	background: linear-gradient(#ca35a0, #c30944);
	border-radius: 8px;

	@media (max-width: 400px) {
		padding: 1.5rem;
	}

	.SpanContent {
		text-align: center;

		p {
			text-transform: capitalize;
			font-size: 4rem;
			font-weight: 600;
			color: white;
			line-height: 1.6;

			@media (max-width: 568px) {
				font-size: 2rem;
			}
		}

		button {
			margin-top: 4rem;
			font-size: 1.6rem;
			font-weight: 600;
			transition: all 0.4s ease-in-out;

			@media (max-width: 568px) {
				font-size: 1.4rem;
			}

			&:hover {
				color: white;
				background-color: black;
			}
		}
	}
`;

const Spamear = () => {
	return (
		<SpanmerSection>
			<DivContent className="divSpan">
				<div className="SpanContent">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus, asperiores.
					</p>
					<button>see more</button>
				</div>
			</DivContent>
		</SpanmerSection>
	);
};

export default Spamear;
