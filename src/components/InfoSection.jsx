import React from "react";
import styled from "styled-components";
import { ArticleGrid } from "../StyleGlobal";
import infoImg from "../img/infoImg.jpg";
// ;
import { FaQuoteLeft } from "react-icons/fa";

// FaQuoteLeft;

const SectionInfo = styled.section`
	width: 100%;
	margin: 0 auto;
	padding-top: 9rem;
	padding-bottom: 8rem;
	/* background-color: #141e26; */
	/* background-color: #00202e; */
`;

const ArticleGridInfo = styled(ArticleGrid)`
	padding: 1rem;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;

	@media (max-width: 1070px) {
		gap: 1rem;
	}

	@media (max-width: 804px) {
		grid-template-columns: 1fr;
	}
`;

const DivImgContent = styled.div`
	grid-column: span 2;
	padding: 5rem;

	@media (max-width: 476px) {
		padding: 1rem;
	}
`;

const Img = styled.img`
	max-width: 100%;
`;

const DivTextContent = styled.div`
	grid-column: span 2;
	padding: 4rem 1rem 1rem 1rem;

	@media (max-width: 1070px) {
		/* padding: 1rem; */
		padding: 4rem 1rem 1rem 1rem;
	}

	@media (max-width: 966px) {
		padding: 1rem;
	}
`;

const InfoText = styled.div`
	display: flex;
	flex-direction: column;
`;

const DivBorder = styled.div`
	width: 100%;
	height: 4px;
	background-color: #777777;
	margin-bottom: 3rem;

	@media (max-width: 1070px) {
		margin-bottom: 1rem;
	}
`;

const SpamInfo = styled.span`
	font-size: 1.4rem;
	color: #ffffff86;
`;

const H2Info = styled.h2`
	font-size: 5.6rem;
	text-transform: uppercase;
	margin: 2rem 0rem;
	color: #ffffffe7;

	@media (max-width: 1070px) {
		font-size: 4.6rem;
	}

	@media (max-width: 366px) {
		font-size: 3.6rem;
	}
`;

const ParafoInfo = styled.p`
	font-size: 1.9rem;
	line-height: 1.5;
	margin-bottom: 3rem;
	color: #ffffffc4;

	@media (max-width: 1070px) {
		font-size: 1.7rem;
	}

	@media (max-width: 894px) {
		font-size: 1.4rem;
	}

	@media (max-width: 804px) {
		font-size: 1.6rem;
	}
`;

// ---------------------------------

const DivResenaContent = styled.div`
	width: 100%;
	padding: 1rem;
	display: flex;
	gap: 2rem;

	@media (max-width: 526px) {
		flex-direction: column;
	}
`;

const IconsBox = styled.div`
	/* display: contents; */
	padding: 1rem;
	font-size: 4rem;

	&:first-child {
		padding: 1.3rem 1.4rem 0.5rem 1.4rem;
		background-color: #ede8e8;
		height: fit-content;
		border-radius: 50px;

		@media (max-width: 804px) {
			padding: 1rem 1rem 0.7rem 1rem;
		}
	}
	@media (max-width: 804px) {
		font-size: 2rem;
	}

	@media (max-width: 526px) {
		width: fit-content;
	}
`;

const TextResena = styled.div`
	width: 100%;
`;

const ParafResena = styled.p`
	font-size: 1.9rem;
	margin-bottom: 2rem;
	color: #ffffffac;
	font-weight: 600;

	@media (max-width: 1070px) {
		margin-bottom: 2rem;
		font-size: 1.5rem;
	}
`;

const SpamResena = styled.span`
	font-size: 1.5rem;
	font-weight: 800;
	text-transform: uppercase;
	color: #ffffffe7;
`;

const InfoSection = () => {
	return (
		<SectionInfo>
			<ArticleGridInfo>
				<DivImgContent>
					<Img src={infoImg} alt="img" loading="lazy" />
				</DivImgContent>
				<DivTextContent>
					<InfoText>
						<SpamInfo>Lorem ipsum dolor sit amet consectetur.</SpamInfo>
						<H2Info>imagine it big</H2Info>
						<ParafoInfo>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
							odio, ipsam totam non voluptatum, magnam quod neque blanditiis ut
							voluptatibus repellendus aliquam. Tempora perferendis tempore odit
							maiores debitis quasi aliquam?
						</ParafoInfo>
						<DivBorder></DivBorder>
						<DivResenaContent>
							<IconsBox>
								<FaQuoteLeft />
							</IconsBox>
							<TextResena>
								<ParafResena>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Assumenda beatae ea officia quam vel labore!
								</ParafResena>
								<SpamResena>- Lucia</SpamResena>
							</TextResena>
						</DivResenaContent>
					</InfoText>
				</DivTextContent>
			</ArticleGridInfo>
		</SectionInfo>
	);
};

export default InfoSection;
