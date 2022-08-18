import styled, { createGlobalStyle } from "styled-components";
import imgBg from "./img/astractSection3.png";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
		font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;

		@media (max-width: 768px) {
			font-size: 55%;
		}

		@media (max-width: 687px) {
			font-size: 53%;
		}
  }

  body {
    width: 100%;
    background-color: #00202e;
  }

  img {
    max-width: 100%;
  }

  button {
    border-radius: 50px;
    /* border: 1px solid transparent; */
    padding: 0.7em 1.9em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }

	main {
		background: url(${imgBg});
		background-position: left;
		background-size: contain;
		background-repeat: space;

		@media (max-width: 1200px) {
			background: none;
		}
	}


	#root {
		width: 100%;
	}

	.App {
		width: 100%;
	}

  /* button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  } */
`;

export const Button = styled.button`
	width: 200px;
	text-align: center;
	padding: 1rem 3rem;
	background: red;
	color: white;
`;

export const ArticleGrid = styled.article`
	max-width: 1200px;
	margin: 0 auto;

	display: grid;
`;

export const ArticleFlex = styled.article`
	max-width: 1200px;
	margin: 0 auto;

	display: flex;
`;

export const DivSubtitle = styled.div`
	width: 100%;
	padding: 1rem;
	text-align: center;
	margin-bottom: 4rem;

	h2 {
		text-transform: capitalize;
		font-size: 6rem;
		font-weight: 500;
		margin-bottom: 2rem;
		color: #f0f8ffe4;

		@media (max-width: 364px) {
			font-size: 4rem;
		}
	}

	p {
		margin-inline: auto;
		max-width: 700px;
		width: 98%;
		font-size: 1.4rem;
		font-weight: 700;
		letter-spacing: 1.5px;
		color: #ffffff84;
	}
`;
