import React from "react";
import styled from "styled-components";
import { ArticleFlex, DivSubtitle } from "../StyleGlobal";
import disenadora1 from "../img/disenadora.jpg";
import disenadora2 from "../img/disenadora1.jpg";
import disenadora3 from "../img/disenadora2.jpg";
import { FaFacebook, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

const TopDisenadoreSection = styled.section`
	width: 100%;
	min-height: 100vh;
	padding-top: 4rem;
	padding-bottom: 7rem;
	padding-left: 1rem;
	padding-right: 1rem;

	.desingFlex {
		width: 100%;
		height: max-content;
		padding: 4rem 0rem;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		background-color: #ffffff13;
		border-radius: 20px;
		border-top: 2px solid #d8d8d85c;
		border-right: 2px solid #7979793c;
		border-bottom: 2px solid #2c2c2c;
		border-left: 2px solid #7c7c7c9f;
		box-shadow: 0px 4px 9px #00000041;

		backdrop-filter: blur(4px);

		.people {
			width: 380px;
			padding: 1rem;
			text-align: center;
			background: linear-gradient(10deg, #ede9e9 30%, #c11a73);
			border-radius: 6px;
			box-shadow: 0px 4px 9px #00000061;

			@media (max-width: 457px) {
				width: 99%;
			}

			.imgDesing {
				width: 350px;
				height: 350px;
				margin-inline: auto;

				@media (max-width: 457px) {
					width: 100%;
					height: auto;
				}
				img {
					border-radius: 6px;
					box-shadow: 0px 4px 9px #00000031;
				}
			}

			.textDesing {
				padding: 1rem;

				h3 {
					font-size: 3rem;
					font-weight: 600;

					margin-top: 2rem;
					color: #00000099;
				}

				p {
					font-size: 1.4rem;
					font-weight: 400;
					margin: 2rem 0rem 4rem 0rem;
					color: #00000089;
				}

				.iconDesing {
					a {
						font-size: 2.4rem;
						color: #cb1375;

						&:not(:last-child) {
							margin-right: 3rem;
						}
					}
				}
			}
		}

		.uno {
			align-self: flex-start;
		}

		.dos {
			align-self: center;
		}

		.tres {
			align-self: flex-end;
		}
	}
`;

const TopDisenadore = () => {
	return (
		<TopDisenadoreSection>
			<DivSubtitle>
				<h2>Helllo galaxy</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint
					nostrum labore. Dolores non sed voluptatum modi. Harum, distinctio
					facere.
				</p>
			</DivSubtitle>
			<ArticleFlex className="desingFlex">
				<div className="people uno">
					<div className="imgDesing">
						<img src={disenadora1} alt="" />
					</div>
					<div className="textDesing">
						<h3>Barbara Segui</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad!</p>
						<div className="iconDesing">
							<a href="#">
								<FaFacebook />{" "}
							</a>
							<a href="#">
								<FaInstagram />{" "}
							</a>
							<a href="#">
								<FaFacebookMessenger />{" "}
							</a>
						</div>
					</div>
				</div>
				<div className="people dos">
					<div className="imgDesing">
						<img src={disenadora2} alt="" />
					</div>
					<div className="textDesing">
						<h3>Rosa Ferreira</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad!</p>
						<div className="iconDesing">
							<a href="#">
								<FaFacebook />{" "}
							</a>
							<a href="#">
								<FaInstagram />{" "}
							</a>
							<a href="#">
								<FaFacebookMessenger />{" "}
							</a>
						</div>
					</div>
				</div>
				<div className="people tres">
					<div className="imgDesing">
						<img src={disenadora3} alt="" />
					</div>
					<div className="textDesing">
						<h3>Lydia Alcantara.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad!</p>
						<div className="iconDesing">
							<a href="#">
								<FaFacebook />{" "}
							</a>
							<a href="#">
								<FaInstagram />{" "}
							</a>
							<a href="#">
								<FaFacebookMessenger />{" "}
							</a>
						</div>
					</div>
				</div>
			</ArticleFlex>
		</TopDisenadoreSection>
	);
};

export default TopDisenadore;
