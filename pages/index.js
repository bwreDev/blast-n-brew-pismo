import Hero from '../components/Hero';
import Head from 'next/head';
import SubHero from '../components/SubHero';

export default function Home() {
	return (
		<>
			<Head>
				<title>Blast & Brew | Pismo</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='author' content='Colton Bonner' />
				<meta
					name='description'
					content="Located within walking distance of the pier, our Pismo Blast & Brew is a great place to enjoy a tasty meal and cold brew with a fantastic view of the beach. We're open for lunch and dinner and can't wait to serve you."
				/>
				<meta property='og:title' content='Blast & Brew | Pismo' />
				<meta
					property='og:description'
					content="Located within walking distance of the pier, our Pismo Blast & Brew is a great place to enjoy a tasty meal and cold brew with a fantastic view of the beach. We're open for lunch and dinner and can't wait to serve you."
				/>
				<meta
					property='og:image'
					content='/Images/pismo-blast-brew.jpg'
				/>
				<meta property='og:url' content='' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/Images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/Images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/Images/favicon-16x16.png'
				/>
				<link rel='manifest' href='/Images/site.webmanifest' />
			</Head>
			<Hero />
			<SubHero />
		</>
	);
}
