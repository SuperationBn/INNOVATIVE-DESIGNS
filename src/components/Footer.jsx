import React from "react";
import styled from "styled-components";
import { ArticleGrid } from "../StyleGlobal";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

// lila #ff6f61
// morado #d81159
// naranja #eb5e28
// negro #252422
// crema #d9dcd6

const FooterSection = styled.footer`
	width: 100%;
	min-height: 100vh;
	padding-top: 6rem;
	padding-bottom: 6rem;

	background-color: #ecf8f8;

	.derechos {
		position: relative;
		top: 20px;

		width: 100%;

		display: flex;
		justify-content: center;

		font-size: 1.3rem;
		color: #1211114f;

		@media (min-width: 797px) {
			top: 50px;
		}
	}
`;

const ContainerGrid = styled(ArticleGrid)`
	padding: 1rem;
	grid-template-columns: 1fr 1fr;
	height: 100%;
	place-items: center;
	gap: 3rem;

	@media (max-width: 796px) {
		grid-template-columns: 1fr;
	}

	.textFooter {
		width: 100%;
		/* padding: 1rem; */
		display: flex;
		flex-direction: column;
		gap: 4rem;

		.moreInfo {
			h3 {
				font-size: 5rem;
				text-transform: capitalize;
				margin-bottom: 5rem;
				color: #0c0c0ce0;
			}

			p {
				font-size: 1.6rem;
				line-height: 1.5;
				color: #0c0c0cc0;
			}
		}

		.containerContactBox {
			margin-top: 2rem;
			display: flex;
			gap: 1rem;

			@media (max-width: 870px) {
				flex-direction: column;
				gap: 3rem;
			}

			.contact {
				flex: 1 1 0rem;
				display: flex;
				gap: 1rem;
				align-items: center;

				.icons {
					font-size: 4rem;
					color: #257fa9;
					filter: drop-shadow(0px 2px 4px #00000031);
				}

				.textInfoContact {
					span {
						font-size: 1.3rem;
					}
				}
			}
		}
	}

	.form {
		width: 100%;

		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			padding: 3rem;
			background-color: #00000082;
			border-radius: 10px;
			box-shadow: 0px 5px 10px #00000031;

			@media (max-width: 540px) {
				padding: 2rem 1rem;
			}

			label {
				font-size: 1.3rem;
				color: #f1ecec;
				font-weight: 700;
				letter-spacing: 1.1px;
			}

			input {
				font-size: 1.3rem;
				color: #f1ecec;
				font-weight: 600;
				letter-spacing: 1.1px;
				padding: 1.7rem 0.8rem;
				border-radius: 5px;
				background-color: #ffffff42;

				&:not(:last-child) {
					margin: 1rem 0rem 4rem 0rem;
				}

				&::placeholder {
					/* color: white; */
					color: #ffffff91;
				}
			}

			input[type="submit"] {
				cursor: pointer;
				margin-top: 2rem;
				background-color: #d81159;
				transition: background-color 0.2s ease-in;
				box-shadow: 0px 3px 5px #00000031;

				&:hover {
					box-shadow: 0px 4px 10px #00000051;
					background-color: #f03278;
				}
			}

			#messageLabel {
				margin-bottom: 1rem;
			}

			textarea {
				border-radius: 5px;
				resize: none;
				background-color: #ffffff42;

				font-size: 1.3rem;
				color: #f1ecec;
				font-weight: 600;
				letter-spacing: 1.1px;
				padding: 1rem 0.8rem;

				&::placeholder {
					color: #ffffff91;
				}
			}
		}
	}
`;

const Footer = () => {
	const preventForm = e => {
		e.preventDefault();
	};

	return (
		<FooterSection>
			<ContainerGrid>
				<div className="textFooter">
					<div className="moreInfo">
						<h3>information about us</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
							temporibus perferendis mollitia id eum, hic magni facere
							necessitatibus obcaecati atque veritatis velit dignissimos dolorum
							rerum maiores explicabo deleniti et? Ullam eius porro excepturi
							quod odio. Quos vel cupiditate facilis sit atque minima
							consequuntur, eius, architecto illum commodi maiores. Modi,
							necessitatibus!
						</p>
					</div>
					<div className="containerContactBox">
						<div className="contact">
							<div className="iconContact">
								<FaMapMarkedAlt className="icons" />
							</div>
							<div className="textInfoContact">
								<span>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Modi, aperiam!
								</span>
							</div>
						</div>
						<div className="contact">
							<div className="iconContact">
								<FaPhoneAlt className="icons" />
							</div>
							<div className="textInfoContact">
								<span>+34 (408) 102-1436</span>
							</div>
						</div>
					</div>
				</div>
				<div className="form">
					<form onSubmit={preventForm}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="put your name"
						/>
						{/* ----------------------------------- */}
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="name"
							id="name"
							placeholder="enter your email address"
						/>
						{/* ----------------------------------- */}
						<label id="messageLabel" htmlFor="mensage">
							Message
						</label>
						<textarea
							name="mensage"
							id="mensage"
							cols="30"
							rows="10"
							placeholder="write your message"
						></textarea>
						<input type="submit" value="send message" />
					</form>
				</div>
			</ContainerGrid>
			<span className="derechos">© All Rights Reserved / SuperationBn</span>
		</FooterSection>
	);
};

export default Footer;
