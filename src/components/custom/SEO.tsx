import type { ISEOProps } from '@/interface/interface'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO: React.FC<ISEOProps> = ({
	title,
	description,
	keywords = [
		"Barthez Kenwou",
		"Projet-1",
		"Financial Dashboard",
		"React Financial Analysis",
		"Financial Data Visualization",
		"Recharts Integration",
		"Chart.js Graphs",
		"Tailwind CSS Dashboard",
		"Shadcn Components",
		"Budget Management",
		"Expense Tracker",
		"Revenue Analytics",
		"Profit and Loss Analysis",
		"Financial KPIs",
		"Real-Time Data",
		"Interactive Charts",
		"Financial Reports",
		"Income and Expense Graphs",
		"Modern UI Dashboard",
		"React Tailwind Dashboard",
		"Data-Driven Decisions",
		"Financial Insights"
	],
	image = '',
	url = window.location.href,
	type = 'website',
}) => {
	return (
		<Helmet>
			<title>{title}</title>

			<meta name='description' content={description} />
			<meta name='keywords' content={keywords.join(', ')} />

			<meta property='og:site_name' content='React-Projet-Starter' />

			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:type' content={type} />
			<meta property='og:url' content={url} />
			{image && <meta property='og:image' content={image} />}

			<meta name='twitter:card' content='summary_large_image' />
			{image && <meta name='twitter:image' content={image} />}
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />

			<link rel='canonical' href={url} />
		</Helmet>
	)
}

export default SEO
