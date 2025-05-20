import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import cvFile from "../doc/alexandre_leitao_cv.pdf";
import profileImage from "../doc/image.jpg";

const Hero: React.FC = () => {
	return (
		<section
			id="accueil"
			className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
			<div className="container mx-auto px-4 py-16 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto">
					<div className="mb-8">
						<motion.img
							src={profileImage}
							alt="Alexandre Leitao"
							className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						/>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Alexandre Leitao
						</h1>
						<h2 className="text-xl md:text-2xl text-gray-600 mb-6">
							Étudiant en BTS SIO SLAM
						</h2>
					</div>

					<div className="mb-8 h-12">
						<TypeAnimation
							sequence={[
								"Développement Web",
								1500,
								"MySQL",
								1500,
								"Relation Client",
								1500,
								"Next.js",
								1500,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="text-xl md:text-2xl text-gray-800"
						/>
					</div>

					<motion.a
						href={cvFile}
						download="alexandre_leitao_cv.pdf"
						className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<Download className="mr-2" size={20} />
						Télécharger mon CV
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
