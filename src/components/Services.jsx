import React from "react";
import styled from "styled-components";
import { DivSubtitle, ArticleGrid } from "../StyleGlobal";
import ImgIcon1 from "../img/cardIcon.png";
import ImgIcon2 from "../img/cardIcon2.png";
import ImgIcon3 from "../img/cardIcon3.png";

const SectionContainer = styled.section`
	width: 100%;
	padding-top: 5rem;
	padding-bottom: 7rem;
	/* background-color: #26192b; */
`;

const ArticleGridServices = styled(ArticleGrid)`
	padding: 1rem;
	width: 100%;

	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	/* justify-content: center;
	align-items: center; */
	gap: 3rem;

	@media (max-width: 642px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

const CardServices = styled.div`
	padding: 2rem 1rem 4rem 1rem;
	width: 100%;
	text-align: center;
	background: linear-gradient(180deg, #e7e4e4b1 10%, #d8dfe0 50%);

	border-radius: 20px;
	box-shadow: 0px 5px 10px #00000059;

	img {
		width: 200px;
		filter: drop-shadow(6px 8px 8px #00000049);
	}

	h3 {
		font-size: 4rem;
		font-weight: 600;
		text-transform: uppercase;
		margin-top: 4rem;
	}

	p {
		font-size: 1.4rem;
		margin: 2rem 0rem 5rem 0rem;
	}

	button {
		/* background: linear-gradient(red, blue); */
		background: linear-gradient(90deg, #d5338c 0%, #d9a32d 100%);
		color: #ffffffd0;
		font-size: 1.3rem;
		font-weight: 700;
		/* transition: all 0.4s ease-in; */
		transition: all 0.4s ease-in-out;

		&:hover {
			background: linear-gradient(30deg, #e64da1 0%, #d9a32d 100%);
		}
	}
`;

const Services = () => {
	return (
		<SectionContainer>
			<DivSubtitle>
				<h2>Lorem ipsum dolor sit.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
					corporis, iste excepturi ut saepe minima eum reiciendis. Incidunt, rem
					quaerat.
				</p>
			</DivSubtitle>
			<ArticleGridServices>
				<CardServices>
					<img src={ImgIcon1} alt="icon" loading="lazy" />
					<h3>sewing</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed
						explicabo sint, quidem aut pariatur autem vero possimus culpa iste
						placeat repellendus fugiat distinctio dolorum!
					</p>
					<button>see more</button>
				</CardServices>
				<CardServices>
					<img src={ImgIcon2} alt="icon" loading="lazy" />
					<h3>design</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed
						explicabo sint, quidem aut pariatur autem vero possimus culpa iste
						placeat repellendus fugiat distinctio dolorum!
					</p>
					<button>see more</button>
				</CardServices>
				<CardServices>
					<img src={ImgIcon3} alt="icon" loading="lazy" />
					<h3>innovation</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed
						explicabo sint, quidem aut pariatur autem vero possimus culpa iste
						placeat repellendus fugiat distinctio dolorum!
					</p>
					<button>see more</button>
				</CardServices>
			</ArticleGridServices>
		</SectionContainer>
	);
};

export default Services;
