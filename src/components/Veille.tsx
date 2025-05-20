import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
	Cpu,
	Zap,
	Brain,
	Link2,
	TrendingUp,
	BookOpen,
	ExternalLink,
	Table2,
	CheckCircle2,
	XCircle,
	Gamepad2,
} from "lucide-react";

const Veille: React.FC = () => {
	useEffect(() => {
		console.log("Composant Veille monté");
	}, []);

	console.log("Rendu du composant Veille");
	return (
		<section id="veille" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8">
					<div className="flex items-center justify-center mb-8">
						<Gamepad2 size={32} className="text-blue-600 mr-3" />
						<h2 className="text-3xl font-bold text-gray-900">
							Veille Technologique
						</h2>
					</div>
					<h3 className="text-2xl font-bold text-center mb-8 text-blue-600">
						Cartes Graphiques & Intelligence Artificielle (2023–2025)
					</h3>

					{/* Introduction */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white border border-gray-200 rounded-lg p-8 mb-12 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex items-center mb-4">
							<Cpu size={28} className="mr-3 text-blue-600" />
							<h4 className="text-xl font-semibold text-gradient">
								Introduction : Pourquoi parler de cartes graphiques ?
							</h4>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Les <strong>cartes graphiques (GPU)</strong>, initialement conçues
							pour le rendu graphique, sont devenues essentielles dans le
							domaine de l'<strong>intelligence artificielle (IA)</strong> en
							raison de leur capacité à effectuer des calculs massivement
							parallèles. Entre 2023 et 2025, les GPU ont connu des avancées
							significatives, renforçant leur rôle dans l'entraînement et
							l'inférence des modèles d'IA.
						</p>
					</motion.div>

					{/* Évolutions majeures */}
					<div className="grid md:grid-cols-3 gap-8 mb-12">
						{[
							{
								year: "2023",
								title: "L'ère du GPU pour l'IA grand public",
								icon: <TrendingUp className="text-blue-600" size={24} />,
								content: [
									"NVIDIA H100 Tensor Core GPU : Présenté comme le GPU le plus puissant pour l'IA, il offre des performances exceptionnelles pour l'entraînement des modèles de deep learning",
									"Explosion de l'IA générative : La demande en GPU a fortement augmenté avec la popularité de modèles comme ChatGPT, nécessitant des infrastructures de calcul intensif",
								],
								link: "https://www.nvidia.com/en-us/data-center/h100/",
							},
							{
								year: "2024",
								title: "Course à la puissance et à l'efficacité",
								icon: <Zap className="text-purple-600" size={24} />,
								content: [
									"NVIDIA GTC 2024 : Annonce de nouvelles technologies et collaborations pour renforcer l'écosystème IA, notamment dans les domaines de l'automobile et de la santé",
									"AMD ROCm : AMD continue de développer sa plateforme open-source ROCm pour concurrencer CUDA de NVIDIA dans le domaine de l'IA",
								],
								link: "https://nvidianews.nvidia.com/online-press-kit/gtc-2024-news",
							},
							{
								year: "2025",
								title: "IA embarquée et GPU intégrés",
								icon: <Brain className="text-blue-600" size={24} />,
								content: [
									"Edge AI : Les solutions d'IA embarquées gagnent en popularité, nécessitant des GPU plus compacts et efficaces pour des applications en temps réel",
									"NVIDIA Digits : Introduction d'un 'superordinateur personnel' pour l'IA, permettant aux chercheurs et développeurs de travailler localement sur des modèles complexes",
								],
								link: "https://www.wired.com/story/nvidia-personal-supercomputer-ces",
							},
						].map((item, index) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
								<div className="flex items-center mb-4">
									{item.icon}
									<h4 className="text-xl font-semibold text-blue-600 ml-3">
										{item.year}
									</h4>
								</div>
								<h5 className="font-semibold mb-3 text-gray-800">
									{item.title}
								</h5>
								<ul className="space-y-2 mb-4">
									{item.content.map((point, i) => (
										<li key={i} className="flex items-start text-gray-600">
											<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
											<span>{point}</span>
										</li>
									))}
								</ul>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
									<ExternalLink size={16} className="mr-2" />
									En savoir plus
								</a>
							</motion.div>
						))}
					</div>

					{/* Tableau des domaines */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex items-center mb-4">
							<Table2 size={24} className="mr-3 text-blue-600" />
							<h4 className="text-xl font-semibold text-gradient">
								Liens concrets avec l'IA
							</h4>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200">
										<th className="py-3 px-4 text-left text-gray-800">
											Domaine
										</th>
										<th className="py-3 px-4 text-left text-gray-800">
											Rôle du GPU
										</th>
									</tr>
								</thead>
								<tbody>
									{[
										{
											domaine: "Entraînement de modèles IA",
											role: "Traitement massif de données pour l'apprentissage profond",
										},
										{
											domaine: "Inférence IA (temps réel)",
											role: "Réponse rapide pour les applications en temps réel",
										},
										{
											domaine: "IA générative (images, sons, textes)",
											role: "Création de contenus via des modèles complexes",
										},
										{
											domaine: "IA embarquée (Edge AI)",
											role: "Exécution locale de modèles sur des dispositifs compacts",
										},
									].map((row, index) => (
										<tr key={index} className="border-b border-gray-100">
											<td className="py-3 px-4 text-gray-600">{row.domaine}</td>
											<td className="py-3 px-4 text-gray-600">{row.role}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>

					{/* Focus sur l'importance des GPU */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex items-center mb-4">
							<Brain size={24} className="mr-3 text-blue-600" />
							<h4 className="text-xl font-semibold text-gradient">
								Pourquoi le GPU est essentiel en IA ?
							</h4>
						</div>
						<ul className="space-y-3">
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Cœurs massivement parallèles</strong> : Les GPU
									peuvent traiter des milliers d'opérations simultanément, idéal
									pour les calculs matriciels des réseaux neuronaux
								</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Frameworks optimisés</strong> : Des bibliothèques
									comme TensorFlow et PyTorch sont conçues pour exploiter
									pleinement la puissance des GPU
								</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Tensor Cores</strong> : Présents dans les GPU NVIDIA,
									ils accélèrent les opérations spécifiques aux modèles d'IA
								</span>
							</li>
						</ul>
						<a
							href="https://forums.developer.nvidia.com/t/understanding-of-tensor-core-cuda-core-and-other-cores-in-ampere-architecture/235900"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors">
							<ExternalLink size={16} className="mr-2" />
							Comprendre les Tensor Cores
						</a>
					</motion.div>

					{/* Enjeux et limites */}
					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center mb-4">
								<CheckCircle2 size={24} className="mr-3 text-green-600" />
								<h4 className="text-xl font-semibold text-gradient">
									Avantages
								</h4>
							</div>
							<ul className="space-y-3">
								<li className="flex items-start">
									<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
									<span className="text-gray-600">
										Performances accrues : Réduction significative des temps
										d'entraînement et d'inférence
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
									<span className="text-gray-600">
										Flexibilité : Adaptés à une variété d'applications, du cloud
										à l'embarqué
									</span>
								</li>
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
							<div className="flex items-center mb-4">
								<XCircle size={24} className="mr-3 text-red-600" />
								<h4 className="text-xl font-semibold text-gradient">Limites</h4>
							</div>
							<ul className="space-y-3">
								<li className="flex items-start">
									<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0" />
									<span className="text-gray-600">
										Coût élevé : Les GPU haut de gamme représentent un
										investissement conséquent
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0" />
									<span className="text-gray-600">
										Consommation énergétique : Les centres de données équipés de
										GPU consomment beaucoup d'énergie
									</span>
								</li>
							</ul>
							<a
								href="https://www.wired.com/story/fast-forward-chatgpt-hunger-energy-gpu-revolution/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors">
								<ExternalLink size={16} className="mr-2" />
								En savoir plus sur la consommation énergétique
							</a>
						</motion.div>
					</div>

					{/* Impact pour le BTS SIO SLAM */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white border border-gray-200 rounded-lg p-6 mb-12 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex items-center mb-4">
							<BookOpen size={24} className="mr-3 text-purple-600" />
							<h4 className="text-xl font-semibold text-gradient">
								Impact pour le BTS SIO SLAM
							</h4>
						</div>
						<ul className="space-y-3">
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Compréhension de l'infrastructure IA</strong> : Savoir
									comment les GPU influencent les performances des applications
									d'IA
								</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Développement d'applications IA</strong> : Intégration
									de modèles d'IA dans des applications web ou mobiles, en
									tenant compte des contraintes matérielles
								</span>
							</li>
							<li className="flex items-start">
								<span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
								<span className="text-gray-600">
									<strong>Veille technologique</strong> : Se tenir informé des
									évolutions matérielles pour anticiper les besoins en
									développement et déploiement
								</span>
							</li>
						</ul>
					</motion.div>

					{/* Sources */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex items-center mb-4">
							<Link2 size={24} className="mr-3 text-blue-600" />
							<h4 className="text-xl font-semibold text-gradient">Sources</h4>
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							{[
								{
									title: "NVIDIA H100 Tensor Core GPU",
									url: "https://www.nvidia.com/en-us/data-center/h100/",
								},
								{
									title: "NVIDIA GTC 2024 Newsroom",
									url: "https://nvidianews.nvidia.com/online-press-kit/gtc-2024-news",
								},
								{
									title: "The CUDA Killer - Analytics India Magazine",
									url: "https://analyticsindiamag.com/global-tech/the-cuda-killer/",
								},
								{
									title: "Edge AI platforms beat GPU/CPU",
									url: "https://www.embedded.com/edge-ai-platforms-beat-gpu-cpu-on-performance-and-efficiency/",
								},
								{
									title: "Nvidia's Personal AI Supercomputer",
									url: "https://www.wired.com/story/nvidia-personal-supercomputer-ces",
								},
								{
									title: "Understanding of Tensor Core",
									url: "https://forums.developer.nvidia.com/t/understanding-of-tensor-core-cuda-core-and-other-cores-in-ampere-architecture/235900",
								},
								{
									title: "ChatGPT's Hunger for Energy",
									url: "https://www.wired.com/story/fast-forward-chatgpt-hunger-energy-gpu-revolution/",
								},
							].map((source, index) => (
								<a
									key={index}
									href={source.url}
									className="flex items-center text-gray-600 hover:text-gradient transition-colors"
									target="_blank"
									rel="noopener noreferrer">
									<ExternalLink size={16} className="mr-2" />
									{source.title}
								</a>
							))}
						</div>
					</motion.div>

					{/* Conclusion */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="mt-12 text-center">
						<p className="text-gray-600 leading-relaxed">
							Entre 2023 et 2025, les cartes graphiques ont consolidé leur
							position en tant que{" "}
							<strong>composants clés de l'intelligence artificielle</strong>,
							tant pour l'entraînement que pour l'inférence des modèles. Pour un
							développeur en BTS SIO SLAM, comprendre l'évolution des GPU et
							leur impact sur les applications d'IA est essentiel pour concevoir
							des solutions performantes et adaptées aux besoins actuels du
							marché.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Veille;
