import React from "react";
import styled from "styled-components";
import bg from "../img/bg.jpg";

const Section = styled.section`
	width: 100%;
	height: 100vh;
	padding: 1rem;
	background: linear-gradient(90deg, black, #00000074), url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: right;

	display: flex;
	align-items: center;
	/* justify-content: center; */

	@media (max-width: 986px) {
		background: linear-gradient(90deg, black, #0000009b), url(${bg});
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-position: right;
	}

	@media (max-width: 440px) {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
`;

const DivTextContent = styled.div`
	max-width: 900px;
	width: 99%;
`;

const H1 = styled.h1`
	font-size: 7.6rem;
	text-transform: uppercase;
	font-weight: 700;
	text-shadow: 2px 4px 8px #000000a3;
	line-height: 1.5;
	color: #fffffff3;

	@media (max-width: 986px) {
		font-size: 6.7rem;
		text-align: center;
	}

	@media (max-width: 658px) {
		font-size: 5rem;
	}

	@media (max-width: 492px) {
		font-size: 4rem;
		text-align: left;
	}
`;

const Hero = () => {
	return (
		<Section>
			<DivTextContent>
				<H1>innovative designs - creative artistic creations</H1>
			</DivTextContent>
		</Section>
	);
};

export default Hero;
