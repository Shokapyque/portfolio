import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Epreuves from "./components/Epreuves";
import Formation from "./components/Formation";
import Veille from "./components/Veille";
import Contact from "./components/Contact";
import TableauSynthese from "./components/TableauSynthese";

const App: React.FC = () => {
	console.log("Rendu du composant App");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<AnimatePresence>
				<main>
					<Hero />
					<About />
					<Skills />
					<Experiences />
					<Projects />
					<Epreuves />
					<Formation />
					<Veille />
					<TableauSynthese />
					<Contact />
				</main>
			</AnimatePresence>
		</div>
	);
};

export default App;
