import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="text-center md:text-left">
						<h3 className="text-xl font-bold mb-4">Alexandre Leitao</h3>
						<p className="text-gray-400">
							Étudiant en BTS SIO SLAM
							<br />
							Développeur Web Full Stack
						</p>
					</div>

					<div className="text-center md:text-right">
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<div className="flex justify-center md:justify-end space-x-4">
							<motion.a
								href="https://github.com/Shokapyque"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								title="GitHub">
								<Github size={24} />
							</motion.a>
							<motion.a
								href="https://www.linkedin.com/in/a-leitao/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								title="LinkedIn">
								<Linkedin size={24} />
							</motion.a>
							<motion.a
								href="mailto:alexandre.leitao94350@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								title="Email">
								<Mail size={24} />
							</motion.a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center">
					<p className="text-gray-400">
						© {new Date().getFullYear()} Alexandre Leitao. Tous droits réservés.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
