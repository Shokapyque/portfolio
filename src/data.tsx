import React from "react";

// Composant IconSvg réutilisable
const IconSvg: React.FC<{ path: string; viewBox: string }> = ({
	path,
	viewBox,
}) => (
	<svg
		className="w-6 h-6 text-primary-600"
		fill="none"
		viewBox={viewBox}
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d={path}
		/>
	</svg>
);

// Types pour les données du portfolio
export interface Skill {
	name: string;
	description: string;
	icon: React.ReactNode;
	level?: string;
	percentage?: number;
}

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	github?: string;
	demo?: string;
	features?: string[];
}

export interface Experience {
	position: string;
	company: string;
	period: string;
	description: string;
	technologies: string[];
	location?: string;
	type?: string;
	tasks?: string[];
}

// Données des compétences
export const skills: Skill[] = [
	{
		name: "Frontend",
		description:
			"Développement d'interfaces utilisateur modernes avec React, Vue.js et Angular",
		level: "Avancé",
		percentage: 85,
		icon: (
			<IconSvg
				path="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				viewBox="0 0 24 24"
			/>
		),
	},
	{
		name: "Backend",
		description: "Création d'APIs RESTful avec Node.js, Python et Java",
		level: "Intermédiaire",
		percentage: 70,
		icon: (
			<IconSvg
				path="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
				viewBox="0 0 24 24"
			/>
		),
	},
	{
		name: "Base de données",
		description: "Conception et optimisation de bases de données SQL et NoSQL",
		level: "Intermédiaire",
		percentage: 60,
		icon: (
			<IconSvg
				path="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
				viewBox="0 0 24 24"
			/>
		),
	},
];

// Données des projets
export const projects: Project[] = [
	{
		title: "Application de Location de Voitures",
		description:
			"Application web complète de location de voitures développée dans le cadre du BTS SIO SLAM, avec une architecture client-serveur moderne",
		image: "/images/projects/car-rental.jpg",
		technologies: [
			"TypeScript",
			"React",
			"PostgreSQL",
			"Tailwind CSS",
			"Node.js",
			"Express",
			"Prisma ORM",
		],
		features: [
			"Interface utilisateur moderne et responsive",
			"Système d'authentification sécurisé",
			"Gestion des réservations en temps réel",
			"Filtres de recherche avancés",
			"Tableau de bord administrateur",
			"Gestion des véhicules et des clients",
		],
		github: "https://github.com/username/car-rental",
		demo: "https://car-rental-demo.com",
	},
	{
		title: "Site web du Garage BERDA",
		description:
			"Développement d'un site web pour améliorer la visibilité du garage automobile",
		image: "/images/projects/garage-berda.jpg",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"Interface moderne et responsive",
			"Système de prise de rendez-vous en ligne",
			"Présentation des services",
		],
		github: "https://github.com/username/garage-berda",
		demo: "https://garage-berda.com",
	},
	{
		title: "Application Météo",
		description:
			"Application météo avec interface inspirée de l'application iPhone",
		image: "/images/projects/weather-app.jpg",
		technologies: ["Next.js", "OpenWeather API", "Tailwind CSS"],
		features: [
			"Prévisions météorologiques en temps réel",
			"Affichage des prévisions horaires",
			"Animations dynamiques selon la météo",
		],
		github: "https://github.com/username/weather-app",
		demo: "https://weather-app-demo.com",
	},
	{
		title: "Gestion d'Inventaire",
		description:
			"Application de gestion de stocks avec interface en temps réel",
		image: "/images/projects/inventory.jpg",
		technologies: ["PHP", "MySQL", "Bootstrap"],
		features: [
			"CRUD complet pour la gestion des stocks",
			"Filtres dynamiques de recherche",
			"Interface responsive et moderne",
		],
		github: "https://github.com/username/inventory",
		demo: "https://inventory-demo.com",
	},
];

// Données des expériences
export const experiences: Experience[] = [
	{
		position: "Technicien Informatique",
		company: "LDLC",
		location: "Claye-Souilly",
		period: "11/2023 - Actuel",
		type: "Alternance",
		description:
			"Conseil et vente de produits informatiques adaptés aux besoins des clients",
		technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		tasks: [
			"Conseil et vente de produits informatiques adaptés aux besoins des clients",
			"Assemblage et maintenance d'ordinateurs sur mesure",
			"Diagnostic et réparation d'ordinateurs",
			"Aménagement des espaces de vente",
			"Mise à jour et maintenance du site web du magasin",
		],
	},
	{
		position: "Développeur Web & Maintenance Informatique",
		company: "Garage BERDA",
		location: "Boissy-Saint-Léger",
		period: "12/2022 - 01/2023",
		type: "Stage de 8 semaines",
		description: "Diagnostic d'un manque de visibilité de l'entreprise",
		technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		tasks: [
			"Diagnostic d'un manque de visibilité de l'entreprise",
			"Création et maintenance d'un site web",
			"Diagnostic du réseau informatique",
			"Apport de solutions matérielles et logicielles",
		],
	},
	{
		position: "Technicien en Reprographie",
		company: "RATP",
		location: "Neuilly-Plaisance",
		period: "04/2021 - 05/2021",
		type: "Stage de 6 semaines",
		description: "Diagnostic des équipements de reprographie",
		technologies: ["Maintenance", "Diagnostic", "Réparation"],
		tasks: [
			"Diagnostic des équipements de reprographie",
			"Réalisation et suivi d'une commande client",
		],
	},
];
