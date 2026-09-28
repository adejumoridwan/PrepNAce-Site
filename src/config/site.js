const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://prepnace.com';
const products = [
	{
		name: 'PrepNAce Mobile App',
		slug: 'mobile-app',
		description: 'Practice JAMB, WAEC and NECO past questions and track your performance.',
		url: '/products/mobile-app/',
		status: 'available',
	},
	{
		name: 'PrepNAce POST-UTME',
		slug: 'post-utme',
		description: 'Prepare specifically for university POST-UTME examinations.',
		url: '',
		status: 'coming-soon',
	},
	{
		name: 'CountDown',
		slug: 'countdown',
		description: 'A simple timed quiz and assessment solution.',
		url: '',
		status: 'coming-soon',
	},
	{
		name: 'PrepNAce Store',
		slug: 'store',
		description: 'Educational materials and products from PrepNAce.',
		url: '',
		status: 'coming-soon',
	},
	{
		name: 'PrepNAce Skills',
		slug: 'skills',
		description: 'Practical digital, technical and professional skills for students and learners.',
		url: '',
		status: 'coming-soon',
	},
	{
		name: 'PrepNAce Opportunity',
		slug: 'opportunity',
		description: 'Discover useful opportunities, programs and resources for students and young people.',
		url: '',
		status: 'coming-soon',
	},
];

export const siteConfig = {
	title: 'PrepNAce',
	name: 'PrepNAce',
	author: 'PrepNAce',
	url: SITE_URL,
	tagline: 'Academic Excellence & Success',
	description: 'PrepNAce helps students learn, prepare for examinations, develop useful skills and achieve their academic goals.',
	mail: 'adejumo999@gmail.com',
	contact: {
		email: 'adejumo999@gmail.com',
		whatsapp: '',
		phone: '',
	},
	meta: {
		title: 'PrepNAce | Academic Excellence & Success',
		description: 'PrepNAce helps students learn, prepare for examinations, develop useful skills and achieve their academic goals.',
		keywords: 'PrepNAce, academic coaching, exam preparation, JAMB, WAEC, NECO, learning resources',
		image: '',
		twitterHandle: '',
	},
	social: {
		tiktok: '',
		youtube: '',
		facebook: '',
		instagram: '',
	},
	products,
	navigation: [
		{ name: 'Home', url: '/' },
		{ name: 'Teaching & Coaching', url: '/teaching-coaching/' },
		{ name: 'Exam Prep', url: '/exam-prep/' },
		{
			name: 'Products',
			children: products.map(({ name, slug, url, status }) => ({ name, url: status === 'available' ? url : `/products/${slug}/` })),
		},
		{ name: 'Resources', url: '/resources/' },
		{ name: 'Blog', url: '/blog/' },
		{ name: 'Contact', url: '/contact/' },
	],
	utm: { source: SITE_URL, medium: 'referral', campaign: 'navigation' },
};

export const socialLinks = Object.entries(siteConfig.social)
	.filter(([, url]) => Boolean(url))
	.map(([name, url]) => ({ name, url }));