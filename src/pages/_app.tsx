import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { store } from '../app/store';
import 'swiper/css';
import '../styles/globals.css';
import '../styles/react-calendar.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Head>
					<title>Jazzmin</title>
					<link rel='icon' href='/favicon.ico' sizes='any' />

					<meta name='title' content='Jazzmin' />
					<meta
						name='description'
						content='Jazzmin é um colectivo musical que se dedica sobretudo à exploração da música tradicional açoriana, fundindo-a com as sonoridades jazzísticas dos mais emblemático standards do cancioneiro americano e com popular a música francesa. O grupo nasceu na ilha do Pico e é constituído por seis músicos que nela nasceram ou residem.'
					/>

					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://www.jazzmin.pt' />
					<meta property='og:title' content='Jazzmin' />
					<meta
						property='og:description'
						content='Jazzmin é um colectivo musical que se dedica sobretudo à exploração da música tradicional açoriana, fundindo-a com as sonoridades jazzísticas dos mais emblemático standards do cancioneiro americano e com popular a música francesa. O grupo nasceu na ilha do Pico e é constituído por seis músicos que nela nasceram ou residem.'
					/>
					<meta property='og:image' content='/images/MetaTags.png' />

					<meta
						property='twitter:card'
						content='summary_large_image'
					/>
					<meta
						property='twitter:url'
						content='https://www.jazzmin.pt'
					/>
					<meta property='twitter:title' content='Jazzmin' />
					<meta
						property='twitter:description'
						content='Jazzmin é um colectivo musical que se dedica sobretudo à exploração da música tradicional açoriana, fundindo-a com as sonoridades jazzísticas dos mais emblemático standards do cancioneiro americano e com popular a música francesa. O grupo nasceu na ilha do Pico e é constituído por seis músicos que nela nasceram ou residem.'
					/>
					<meta
						property='twitter:image'
						content='/images/MetaTags.png'
					/>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
