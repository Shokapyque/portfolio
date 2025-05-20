import { Experience, Project, Skill } from "./types";

export const technicalSkills: Skill[] = [
	{ name: "HTML/CSS", level: "Avancé", percentage: 85 },
	{ name: "JavaScript", level: "Notions", percentage: 40 },
	{ name: "Next.js", level: "Notions", percentage: 35 },
	{ name: "C", level: "Notions", percentage: 30 },
	{ name: "MySQL", level: "Intermédiaire", percentage: 60 },
];

export const softSkills: Skill[] = [
	{ name: "Relation client", level: "Expert", percentage: 90 },
];

export const languages: Skill[] = [
	{ name: "Français", level: "Langue maternelle", percentage: 100 },
	{ name: "Portugais", level: "Langue maternelle", percentage: 100 },
	{ name: "Anglais", level: "Opérationnel", percentage: 70 },
];

export const experiences: Experience[] = [
	{
		title: "Technicien Informatique",
		company: "LDLC",
		location: "Claye-Souilly",
		period: "11/2023 - Actuel",
		type: "Alternance",
		tasks: [
			"Conseil et vente de produits informatiques adaptés aux besoins des clients",
			"Assemblage et maintenance d'ordinateurs sur mesure",
			"Diagnostic et réparation d'ordinateurs",
			"Aménagement des espaces de vente",
			"Mise à jour et maintenance du site web du magasin",
		],
	},
	{
		title: "Développeur Web & Maintenance Informatique",
		company: "Garage BERDA",
		location: "Boissy-Saint-Léger",
		period: "12/2022 - 01/2023",
		type: "Stage de 8 semaines",
		tasks: [
			"Diagnostic d'un manque de visibilité de l'entreprise",
			"Création et maintenance d'un site web",
			"Diagnostic du réseau informatique",
			"Apport de solutions matérielles et logicielles",
		],
	},
	{
		title: "Développeur Web & Maintenance Informatique",
		company: "Garage BERDA",
		location: "Boissy-Saint-Léger",
		period: "04/2022 - 06/2022",
		type: "Stage de 8 semaines",
		tasks: [
			"Entretien du site internet",
			"Mise en place d'une nouvelle organisation de l'atelier",
			"Amélioration des processus internes",
		],
	},
	{
		title: "Technicien en Reprographie",
		company: "RATP",
		location: "Neuilly-Plaisance",
		period: "04/2021 - 05/2021",
		type: "Stage de 6 semaines",
		tasks: [
			"Diagnostic des équipements de reprographie",
			"Réalisation et suivi d'une commande client",
		],
	},
];

export const projects: Project[] = [
	{
		title: "Application de Location de Voitures",
		description:
			"Site web de location de voitures développé dans le cadre du BTS SIO, permettant aux utilisateurs de louer des véhicules en ligne",
		technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
		features: [
			"Système d'authentification complet",
			"Catalogue de véhicules avec filtres",
			"Système de réservation en ligne",
			"Gestion des paiements",
			"Interface administrateur pour la gestion des véhicules",
		],
		github: "https://github.com/votre-username/location-voitures",
		demo: "https://demo-location-voitures.com",
	},
	{
		title: "Site web du Garage BERDA",
		description:
			"Développement d'un site web pour améliorer la visibilité du garage automobile",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"Interface moderne et responsive",
			"Système de prise de rendez-vous en ligne",
			"Présentation des services",
		],
	},
	{
		title: "Application Météo",
		description:
			"Application météo avec interface inspirée de l'application iPhone",
		technologies: ["Next.js", "OpenWeather API", "Tailwind CSS"],
		features: [
			"Prévisions météorologiques en temps réel",
			"Affichage des prévisions horaires",
			"Animations dynamiques selon la météo",
		],
	},
	{
		title: "Gestion d'Inventaire",
		description:
			"Application de gestion de stocks avec interface en temps réel",
		technologies: ["PHP", "MySQL", "Bootstrap"],
		features: [
			"CRUD complet pour la gestion des stocks",
			"Filtres dynamiques de recherche",
			"Interface responsive et moderne",
		],
	},
];
