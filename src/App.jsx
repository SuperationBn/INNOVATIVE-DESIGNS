import React from "react";
import Footer from "./components/Footer";
// import "./App.css";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Propuestas from "./components/Propuestas";
import Services from "./components/Services";
import Spamear from "./components/Spamear";
import TopDisenadore from "./components/TopDisenadore";
import { GlobalStyle } from "./StyleGlobal";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<header>
					<Hero />
				</header>
				<main>
					<InfoSection />
					<Services />
					<Propuestas />
					<TopDisenadore />
					<Spamear />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
