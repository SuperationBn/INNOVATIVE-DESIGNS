import React from "react";
import styled from "styled-components";
import { ArticleGrid } from "../StyleGlobal";

const PropuestasSectioin = styled.section`
	width: 100%;
	padding-top: 6rem;
	padding-bottom: 6rem;

	@media (max-width: 542px) {
		padding-top: 8rem;
	}

	h2 {
		max-width: 900px;
		width: 98%;
		margin: 0 auto;
		text-align: center;
		text-transform: capitalize;

		font-size: 6rem;
		font-weight: 500;
		margin-bottom: 2rem;
		color: #f0f8ffe4;

		@media (max-width: 841px) {
			font-size: 5rem;
		}

		@media (max-width: 378px) {
			font-size: 3.8rem;
		}
	}
`;

const ArticleGridPropuestas = styled(ArticleGrid)`
	padding: 3rem 1rem;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 4rem;

	@media (max-width: 980px) {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 639px) {
		grid-template-columns: 1fr;
	}
`;

const ContentText = styled.div`
	padding: 1rem;
	width: 100%;
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0.973),
		rgb(226, 226, 226)
	);
	border-radius: 7px;
	box-shadow: 0px 4px 20px #00000036;

	display: flex;
	gap: 1rem;

	.gradient {
		flex: 1 1 10rem;
		border-radius: 50px;

		display: block;
		background-size: 100% 1100%;

		animation: animateBg 10s linear infinite;
		background-image: linear-gradient(
			0deg,
			#cf5c5c,
			#c19b4a,
			#69be7b,
			#ee9c4a,
			#42eca6,
			#64b3d9,
			#208ea2,
			#498ada,
			#5b73df,
			#897ed3,
			#cf5c5c,
			#c19b4a
		);

		@media (max-width: 639px) {
			flex: 1 1 5rem;
		}
	}
	@keyframes animateBg {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 0% 100%;
		}
	}

	.textContent {
		padding: 0.7rem;

		p {
			font-size: 1.6rem;
			line-height: 1.4;
			letter-spacing: 1px;
			font-weight: 400;

			@media (max-width: 872px) {
				line-height: 1.2;
				font-size: 1.4rem;
			}
		}
	}
`;

// const GradientBox = styled.div`
//   `;

const Propuestas = () => {
	return (
		<PropuestasSectioin>
			<h2>discover new design methods for your business</h2>
			<ArticleGridPropuestas>
				<ContentText>
					<div className="gradient">.</div>
					<div className="textContent">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
							nisi iste quibusdam quis maiores aspernatur perferendis harum.
							Rerum eum velit neque dolore dolorem animi tempore harum
							recusandae quod, amet necessitatibus.
						</p>
					</div>
				</ContentText>
				<ContentText>
					<div className="gradient">.</div>
					<div className="textContent">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
							nisi iste quibusdam quis maiores aspernatur perferendis harum.
							Rerum eum velit neque dolore dolorem animi tempore harum
							recusandae quod, amet necessitatibus.
						</p>
					</div>
				</ContentText>
				<ContentText>
					<div className="gradient">.</div>
					<div className="textContent">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
							nisi iste quibusdam quis maiores aspernatur perferendis harum.
							Rerum eum velit neque dolore dolorem animi tempore harum
							recusandae quod, amet necessitatibus.
						</p>
					</div>
				</ContentText>
				<ContentText>
					<div className="gradient">.</div>
					<div className="textContent">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
							nisi iste quibusdam quis maiores aspernatur perferendis harum.
							Rerum eum velit neque dolore dolorem animi tempore harum
							recusandae quod, amet necessitatibus.
						</p>
					</div>
				</ContentText>
			</ArticleGridPropuestas>
		</PropuestasSectioin>
	);
};

export default Propuestas;
