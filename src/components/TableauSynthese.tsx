import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import tableauSynthese from "../doc/tableau de synthese.pdf";

const TableauSynthese: React.FC = () => {
	return (
		<section id="tableau-synthese" className="min-h-screen bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						Tableau de Synthèse
					</h2>

					<div className="bg-white rounded-xl shadow-lg p-6 mb-8">
						<iframe
							src={tableauSynthese}
							className="w-full h-[800px] rounded-lg"
							title="Tableau de Synthèse"
						/>
					</div>

					<div className="text-center">
						<motion.a
							href={tableauSynthese}
							download="tableau_de_synthese.pdf"
							className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Download className="mr-2" size={20} />
							Télécharger le Tableau de Synthèse
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TableauSynthese;
