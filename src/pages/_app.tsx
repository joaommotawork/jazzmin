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
					<title>JazzMin</title>
					<link rel='icon' href='/favicon.ico' sizes='any' />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
