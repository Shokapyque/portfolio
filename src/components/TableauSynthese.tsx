import React from "react";
import { motion } from "framer-motion";
import tableauSynthese from "../doc/tableau de synthese.pdf";

const TableauSynthese: React.FC = () => {
	return (
		<section id="tableau-synthese" className="min-h-screen bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Tableau de Synthèse
					</h2>

					<div className="bg-white rounded-xl shadow-lg p-6">
						<iframe
							src={tableauSynthese}
							className="w-full h-[calc(165vh)] rounded-lg"
							title="Tableau de Synthèse"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TableauSynthese;
