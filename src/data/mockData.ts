export type Coordinates = {
	lat: number;
	lng: number;
};

export type OpeningHours = {
	weekdays: string;
	weekends: string;
};

export type Brand = {
	name: string;
	slogan: string;
	logo: string;
	description: string;
	founded: string;
};

export type Contact = {
	phone: string;
	email: string;
	whatsapp: string;
};

export type SocialMedia = {
	facebook: string;
	instagram: string;
	youtube: string;
	linkedin: string;
};

export type Feature = {
	id: number;
	title: string;
	description: string;
	icon: string;
};

export type Stat = {
	value: string;
	label: string;
};

export type Modality = {
	id: number;
	name: string;
	description: string;
	image: string;
	benefits: string[];
	categories: string[];
	intensity: string;
};

export type Instructor = {
	id: number;
	name: string;
	image: string;
	specialties: string[];
	experience: string;
	certification: string;
	description: string;
	schedule: {
		[key: string]: string[];
	};
};

export type Gym = {
	id: number;
	name: string;
	address: string;
	coordinates: Coordinates;
	phone: string;
	features: string[];
	openingHours: OpeningHours;
	images: string[];
};

export type ScheduleItem = {
	time: string;
	classes: string[];
};

export type Location = {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
};

export type Data = {
	general: {
		brand: Brand;
		contact: Contact;
		socialMedia: SocialMedia;
	};
	pages: {
		home: {
			hero: {
				title: string;
				subtitle: string;
				cta: string;
				backgroundImage: string;
			};
			features: Feature[];
			stats: Stat[];
		};
		modalities: Modality[];
		instructors: Instructor[];
		gyms: Gym[];
		schedule: {
			weekdays: ScheduleItem[];
			weekends: ScheduleItem[];
		};
		contact: {
			locations: Location[];
			form: {
				subjects: string[];
			};
		};
	};
};

export const mockData = {
	general: {
		brand: {
			name: "Mr. Muscle",
			slogan: "Transforme sua força interior em resultados visíveis",
			logo: "/images/logo.svg",
			description: "Rede premium de academias focada em resultados e bem-estar",
			founded: "2010",
		},
		contact: {
			phone: "+351 123 456 789",
			email: "info@mrmuscle.pt",
			whatsapp: "+351 987 654 321",
		},
		socialMedia: {
			facebook: "facebook.com/mrmuscle",
			instagram: "instagram.com/mrmuscle",
			youtube: "youtube.com/mrmuscle",
			linkedin: "linkedin.com/company/mrmuscle",
		},
	},
	pages: {
		home: {
			hero: {
				title: "Sua jornada para uma vida mais forte começa aqui",
				subtitle: "Junte-se a mais de 10.000 membros transformando suas vidas",
				cta: "Comece Agora",
				backgroundImage: "/images/hero-bg.jpg",
			},
			features: [
				{
					id: 1,
					title: "Equipamentos Premium",
					description: "Tecnologia de ponta para seu treino",
					icon: "dumbbell",
				},
				{
					id: 2,
					title: "Instrutores Especialistas",
					description: "Time certificado e experiente",
					icon: "users",
				},
				{
					id: 3,
					title: "Horários Flexíveis",
					description: "Aberto todos os dias, 24h por dia",
					icon: "clock",
				},
			],
			stats: [
				{
					value: "15+",
					label: "Anos de Experiência",
				},
				{
					value: "10k+",
					label: "Membros Ativos",
				},
				{
					value: "50+",
					label: "Instrutores",
				},
			],
		},
		modalities: [
			{
				id: 1,
				name: "Musculação",
				description:
					"Treinamento personalizado para ganho de massa muscular e força",
				image: "/images/weightlifting.jpg",
				benefits: [
					"Aumento de força",
					"Ganho de massa muscular",
					"Melhoria da postura",
					"Prevenção de lesões",
				],
				categories: ["Força", "Hipertrofia"],
				intensity: "Moderada a Alta",
			},
			{
				id: 2,
				name: "CrossFit",
				description:
					"Treinos funcionais de alta intensidade para melhorar condicionamento geral",
				image: "/images/crossfit.jpg",
				benefits: [
					"Resistência cardiovascular",
					"Agilidade",
					"Força explosiva",
					"Perda de gordura",
				],
				categories: ["Funcional", "Cardio"],
				intensity: "Alta",
			},
			{
				id: 3,
				name: "Spinning",
				description: "Aulas de ciclismo indoor com música motivacional",
				image: "/images/spinning.jpg",
				benefits: [
					"Queima calórica",
					"Resistência aeróbica",
					"Fortalecimento das pernas",
					"Baixo impacto",
				],
				categories: ["Cardio"],
				intensity: "Moderada a Alta",
			},
		],
		instructors: [
			{
				id: 1,
				name: "João Silva",
				image: "/images/instructor-1.jpg",
				specialties: ["Musculação", "Personal Trainer"],
				experience: "10 anos",
				certification: "CREF, NASM-CPT",
				description: "Especialista em hipertrofia e reabilitação",
				schedule: {
					monday: ["08:00", "10:00", "14:00", "16:00"],
					wednesday: ["08:00", "10:00", "14:00", "16:00"],
					friday: ["08:00", "10:00", "14:00", "16:00"],
				},
			},
			{
				id: 2,
				name: "Maria Santos",
				image: "/images/instructor-2.jpg",
				specialties: ["CrossFit", "Funcional"],
				experience: "8 anos",
				certification: "CrossFit L3, NASM-CPT",
				description: "Especialista em treinos de alta intensidade",
				schedule: {
					tuesday: ["09:00", "11:00", "15:00", "17:00"],
					thursday: ["09:00", "11:00", "15:00", "17:00"],
					saturday: ["09:00", "11:00"],
				},
			},
			{
				id: 3,
				name: "Carlos Oliveira",
				image: "/images/instructor-3.jpg",
				specialties: ["Pilates", "Yoga"],
				experience: "12 anos",
				certification: "CREF, PMA-CPT",
				description: "Especialista em bem-estar e alinhamento postural",
				schedule: {
					monday: ["07:00", "09:00", "13:00", "15:00"],
					wednesday: ["07:00", "09:00", "13:00", "15:00"],
					friday: ["07:00", "09:00", "13:00", "15:00"],
				},
			},
			{
				id: 4,
				name: "Ana Rodrigues",
				image: "/images/instructor-4.jpg",
				specialties: ["Zumba", "Dança"],
				experience: "7 anos",
				certification: "CREF, ZIN",
				description: "Especialista em aulas de dança e fitness",
				schedule: {
					tuesday: ["10:00", "12:00", "16:00", "18:00"],
					thursday: ["10:00", "12:00", "16:00", "18:00"],
					saturday: ["10:00", "12:00"],
				},
			},
			{
				id: 5,
				name: "Pedro Ferreira",
				image: "/images/instructor-5.jpg",
				specialties: ["Natação", "Hidroginástica"],
				experience: "15 anos",
				certification: "CREF, CBDA",
				description: "Especialista em atividades aquáticas",
				schedule: {
					monday: ["06:00", "08:00", "14:00", "16:00"],
					wednesday: ["06:00", "08:00", "14:00", "16:00"],
					friday: ["06:00", "08:00", "14:00", "16:00"],
				},
			},
			{
				id: 6,
				name: "Luísa Mendes",
				image: "/images/instructor-6.jpg",
				specialties: ["Spinning", "Ciclismo Indoor"],
				experience: "9 anos",
				certification: "CREF, Spinning Instructor",
				description: "Especialista em aulas de ciclismo indoor",
				schedule: {
					tuesday: ["07:00", "09:00", "17:00", "19:00"],
					thursday: ["07:00", "09:00", "17:00", "19:00"],
					saturday: ["08:00", "10:00"],
				},
			},
			{
				id: 7,
				name: "Ricardo Almeida",
				image: "/images/instructor-7.jpg",
				specialties: ["Boxe", "Artes Marciais"],
				experience: "11 anos",
				certification: "CREF, CBBOXE",
				description: "Especialista em treinamento de combate",
				schedule: {
					monday: ["09:00", "11:00", "15:00", "17:00"],
					wednesday: ["09:00", "11:00", "15:00", "17:00"],
					friday: ["09:00", "11:00", "15:00", "17:00"],
				},
			},
			{
				id: 8,
				name: "Camila Costa",
				image: "/images/instructor-8.jpg",
				specialties: ["Nutrição Esportiva", "Emagrecimento"],
				experience: "6 anos",
				certification: "CRN, Pós em Nutrição Esportiva",
				description: "Especialista em nutrição para atletas e perda de peso",
				schedule: {
					tuesday: ["08:00", "10:00", "14:00", "16:00"],
					thursday: ["08:00", "10:00", "14:00", "16:00"],
					saturday: ["09:00", "11:00"],
				},
			},
		],
		gyms: [
			{
				id: 1,
				name: "Mr. Muscle - Lisboa Centro",
				address: "Av. da Liberdade, 120, Lisboa",
				coordinates: {
					lat: 38.7223,
					lng: -9.1393,
				},
				phone: "+351 123 456 789",
				features: [
					"Estacionamento gratuito",
					"Vestiários com armários",
					"Área de treino 1000m²",
					"Sauna",
				],
				openingHours: {
					weekdays: "06:00 - 23:00",
					weekends: "08:00 - 20:00",
				},
				images: [
					"/images/gym-1-1.jpg",
					"/images/gym-1-2.jpg",
					"/images/gym-1-3.jpg",
				],
			},
			{
				id: 2,
				name: "Mr. Muscle - Porto",
				address: "Rua Santa Catarina, 453, Porto",
				coordinates: {
					lat: 41.1579,
					lng: -8.6291,
				},
				phone: "+351 987 654 321",
				features: [
					"Estacionamento gratuito",
					"Vestiários com armários",
					"Área de treino 800m²",
					"Piscina",
				],
				openingHours: {
					weekdays: "06:00 - 23:00",
					weekends: "08:00 - 20:00",
				},
				images: [
					"/images/gym-2-1.jpg",
					"/images/gym-2-2.jpg",
					"/images/gym-2-3.jpg",
				],
			},
		],
		schedule: {
			weekdays: [
				{
					time: "07:00",
					classes: ["Musculação", "CrossFit"],
				},
				{
					time: "09:00",
					classes: ["Spinning", "Musculação"],
				},
				{
					time: "12:00",
					classes: ["CrossFit", "Musculação"],
				},
				{
					time: "16:00",
					classes: ["Spinning", "CrossFit"],
				},
				{
					time: "18:00",
					classes: ["Musculação", "CrossFit"],
				},
			],
			weekends: [
				{
					time: "09:00",
					classes: ["CrossFit"],
				},
				{
					time: "11:00",
					classes: ["Spinning"],
				},
				{
					time: "16:00",
					classes: ["Musculação"],
				},
			],
		},
		contact: {
			locations: [
				{
					id: 1,
					name: "Lisboa Centro",
					address: "Av. da Liberdade, 120, Lisboa",
					phone: "+351 123 456 789",
					email: "lisboa@mrmuscle.pt",
				},
				{
					id: 2,
					name: "Porto",
					address: "Rua Santa Catarina, 453, Porto",
					phone: "+351 987 654 321",
					email: "porto@mrmuscle.pt",
				},
			],
			form: {
				subjects: [
					"Informações Gerais",
					"Planos e Preços",
					"Agendamento de Aula Experimental",
					"Trabalhe Conosco",
					"Outros Assuntos",
				],
			},
		},
	},
} as const;
