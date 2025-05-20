import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Accueil", href: "#accueil" },
		{ name: "À propos", href: "#à-propos" },
		{ name: "Compétences", href: "#compétences" },
		{ name: "Expériences", href: "#expériences" },
		{ name: "Projets", href: "#projets" },
		{ name: "Épreuves", href: "#epreuves" },
		{ name: "Formation", href: "#formation" },
		{ name: "Veille", href: "#veille" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
			}`}>
			<nav className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-xl font-bold text-gradient">
						Alexandre Leitao
					</motion.h1>

					<div className="hidden md:flex space-x-6">
						{navItems.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-gray-600 hover:text-gradient transition-colors relative group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								{item.name}
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
							</motion.a>
						))}
					</div>

					<button
						className="md:hidden text-gray-600 hover:text-gradient transition-colors"
						onClick={toggleMenu}
						aria-label="Toggle menu">
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden bg-white border-t">
					<div className="container mx-auto px-4 py-4">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-600 hover:text-gradient transition-colors py-2"
									onClick={toggleMenu}>
									{item.name}
								</a>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</header>
	);
};

export default Header;
