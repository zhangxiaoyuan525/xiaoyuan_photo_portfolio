import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: any;
}

export default {
	title: 'Xiaoyuan Photo Portfolio',
	favicon: 'favicon.ico',
	owner: 'Xiaoyuan Zhang',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/zhangxiaoyuan525/xiaoyuan_photo_portfolio',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: '',
			icon: Instagram,
		} as SocialLink,
	],
};
