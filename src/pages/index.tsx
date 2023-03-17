import { CgMouse } from 'react-icons/cg';
import Calendar from 'react-calendar';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../public/images/Banner1.jpeg';
import banner2 from '../../public/images/Banner2.jpeg';
import banner3 from '../../public/images/Banner3.jpeg';
import banner4 from '../../public/images/Banner4.jpeg';
import logo from '../../public/images/LogoWhite.png';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Index() {
	const calendarDates = [
		new Date(),
		/* new Date(2020, 9, 3),
		new Date(2020, 9, 10),
		new Date(2021, 12, 30),
		new Date(2022, 7, 24),
		new Date(2022, 8, 24),
		new Date(2022, 8, 31), */
	];
	const [dates, setDates] = useState(calendarDates);

	return (
		<div className='w-full h-full overflow-scroll snap-mandatory snap-y scroll-smooth'>
			<div
				id='inicio'
				className='relative w-full h-full snap-start snap-always'>
				<Image
					src={banner3}
					alt='Elementos Jazzmin'
					layout='fill'
					objectFit='cover'
					loading={'eager'}
					priority
				/>
				<span className='absolute w-full h-full bg-black opacity-50' />
				<span className='absolute flex items-center justify-center w-full h-full text-white text-8xl'>
					<Image
						src={logo}
						alt='Jazzmin Logo'
						height={400}
						loading={'eager'}
						priority
					/>
				</span>
				<CgMouse className='absolute text-3xl text-white animate-pulse bottom-5 left-1/2' />
			</div>
			<div
				id='banda'
				className='flex flex-col items-center justify-center w-full h-full gap-3 p-20 snap-start snap-always'>
				<h1 className='mb-3 text-5xl font-medium underline uppercase md:w-2/3 underline-offset-8 decoration-orange-500'>
					A Banda
				</h1>
				<p className='text-justify md:w-2/3 indent-3'>
					Jazzmin é um colectivo musical que se dedica sobretudo à
					exploração da música tradicional açoriana, fundindo-a com as
					sonoridades jazzísticas dos mais emblemático standards do
					cancioneiro americano e com popular a música francesa. O
					grupo nasceu na ilha do Pico e é constituído por seis
					músicos que nela nasceram ou residem:
					<ol className='mt-3'>
						<li>- Jean Daniel Senesi na Voz</li>
						<li>- Nelson Ribeiro no Clarinete</li>
						<li>- José Sousa no Trompete</li>
						<li>- André Neves na Guitarra</li>
						<li>- Nuno Mendes no Contrabaixo</li>
						<li>- Duarte Dutra na Bateria</li>
					</ol>
				</p>
				<p className='text-justify md:w-2/3 indent-3'>
					Estes músicos provêm de origens musicais distintas que vão
					da música clássica ao Jazz. Trabalhando a partir da Ilha do
					Pico, Jazzmin resulta da experiência musical que cada um dos
					seus elementos provém, e o resultado é uma simbiose de
					música tradicional com bastante improvisação, embebida nos
					exóticos sons da música francesa, açoriana e americana. Com
					uma sonoridade única através destas junções sonoras, o
					ouvinte é levado numa viagem sonora que cruza oceanos e
					continentes, desde a fervorosa dança ritmada, às melodia
					mais nostálgicas que todos reconhecem, misturando-as com a
					poética música francesa.
				</p>
				<p className='text-justify md:w-2/3 indent-3'>
					Guiados pelo timbre dos 5 instrumentos distintos e a voz
					única de Jean Daniel, compartilhamos sensações sonoras
					únicas, uma viagem a diversas emoções e êxtases, apenas
					possíveis com a essência dos Jazzmin.
				</p>
			</div>
			{/* <div
				id='elementos'
				className='w-full h-full p-20 snap-start snap-always'></div> */}
			<div
				id='repertorio'
				className='flex flex-col items-center justify-center w-full h-full gap-3 p-20 snap-start snap-always'>
				<h1 className='mb-3 text-5xl font-medium underline uppercase md:w-2/3 underline-offset-8 decoration-orange-500'>
					Repertório
				</h1>
				<p>
					<a
						href='https://www.rtp.pt/play/palco/p8802/e650265/regresso-ao-palco'
						className='relative font-semibold uppercase group'
						target='_blank'>
						<span>Concerto Auditório Madalena - RTP Açores</span>
						<span className='absolute -bottom-1 left-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
						<span className='absolute -bottom-1 right-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
					</a>
				</p>
				<div className='flex flex-col w-full gap-3 md:flex-row md:w-2/3'>
					<table className='w-full text-left whitespace-no-wrap table-auto'>
						<thead>
							<tr>
								<th className='px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 rounded-tl rounded-bl title-font'>
									Música
								</th>
								<th className='px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 title-font'>
									Artista
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-4 py-3'>Summertime</td>
								<td className='px-4 py-3'>George Gershwin</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-gray-200'>
									Os Bravos - (Tradicional Açoriano)
								</td>
								<td className='px-4 py-3 border-t-2 border-gray-200'>
									Arranjo de Nelson RIbeiro
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-gray-200'>
									Sweet and Low-Down
								</td>
								<td className='px-4 py-3 border-t-2 border-gray-200'>
									George Gershwin
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Les Feuilles Mort
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Joseph Kosma
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Chamarrita Coxa - (Tradicional Açoriano)
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Composição de Nuno Mendes
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Barquinha Feiticeira - (Tradicional
									Açoriano)
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Arranjo de Nuno Mendes
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Strike up the Band
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									George Gershwin
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									As Minhas Penas - (Tradicional Açoriano) -
									[Tributo a Humberto Pinheiro]
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Arranjo de André Neves
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Moon River
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Henry Mancini
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Milord
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Edith Piaf
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Chamateia - (Tradicional Açoriano)
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Arranjo de Nelson Ribeiro
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Saudade - (Tradicional Açoriano)
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Arranjo de Nuno Mendes
								</td>
							</tr>
						</tbody>
					</table>
					<table className='w-full text-left whitespace-no-wrap table-auto'>
						<thead>
							<tr>
								<th className='px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 rounded-tl rounded-bl title-font'>
									Música
								</th>
								<th className='px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 title-font'>
									Artista
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-4 py-3'>La Vie En Rose</td>
								<td className='px-4 py-3'>Edith Piaf</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									What a Wonderful World
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									George Wiess/Bob Thiele
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									My Baby Just Cares For Me
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Walter Donaldson
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Fly Me To The Moon
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Bart Howard
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									New York, New York…
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									John Kander
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Hymne à l’amour
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Edith Piaf & Marguertie Monnot
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Moon River
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Henry Mancini
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									My Funny Valentine
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Richard Rodgers & Lorenz Hart
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Night and Day
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Cole Porter
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									I’ve Got Rhythm
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									George & Ira Gershwin
								</td>
							</tr>
							<tr>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									Slap That Bass
								</td>
								<td className='px-4 py-3 border-t-2 border-b-2 border-gray-200'>
									George & Ira Gershwin
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <div
				id='agenda'
				className='flex w-full h-full p-20 snap-start snap-always'>
				<div className='flex items-center justify-center w-full h-full'>
					<Calendar
						locale='pt-PT'
						calendarType='US'
						onChange={setDates}
						value={dates}
					/>
				</div>
				<div className='w-full h-full'></div>
			</div> */}
			<div
				id='galeria'
				className='w-full h-full p-20 snap-start snap-always'>
				<Swiper
					className='w-full h-full'
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					navigation={true}
					modules={[Navigation]}
					autoplay
					loop>
					<SwiperSlide>
						<Image
							src={banner1}
							alt='Elementos Jazzmin'
							layout='fill'
							objectFit='cover'
							loading={'eager'}
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={banner2}
							alt='Elementos Jazzmin'
							layout='fill'
							objectFit='cover'
							loading={'eager'}
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={banner3}
							alt='Elementos Jazzmin'
							layout='fill'
							objectFit='cover'
							loading={'eager'}
							priority
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src={banner4}
							alt='Elementos Jazzmin'
							layout='fill'
							objectFit='cover'
							loading={'eager'}
							priority
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div
				id='contactos'
				className='relative w-full h-full p-20 snap-start snap-always'>
				<div className='absolute inset-0 m-20'>
					<iframe
						width='100%'
						height='100%'
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
						title='map'
						scrolling='no'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399833.9851492734!2d-28.565267651725748!3d38.47141726606384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb479783a8654f99%3A0x31f1a83e6b060c46!2sPico%20Island!5e0!3m2!1sen!2spt!4v1678966313288!5m2!1sen!2spt'
						style={{
							filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
						}}
					/>
				</div>
				<div className='container flex px-5 py-24 mx-auto'>
					<div className='relative z-10 flex flex-col w-full gap-4 p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0'>
						<h1 className='mb-3 text-5xl font-medium underline uppercase md:w-2/3 underline-offset-8 decoration-orange-500'>
							Contactos
						</h1>
						<p>
							<p className='text-2xl'>Produção</p>
							<span>
								<p>Jean Daniel Senesi</p>
								<a
									href='https://wa.me/351912099862'
									className='relative font-semibold uppercase group'
									target='_blank'>
									+351 912 099 862
									<span className='absolute -bottom-1 left-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
									<span className='absolute -bottom-1 right-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
								</a>
							</span>
						</p>
						<p>
							<p className='text-2xl'>Comunicação</p>
							<span>
								<p>Nelson Ribeiro</p>
								<a
									href='https://wa.me/351968988625'
									className='relative font-semibold uppercase group'
									target='_blank'>
									+351 968 988 625
									<span className='absolute -bottom-1 left-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
									<span className='absolute -bottom-1 right-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 group-hover:transition-all'></span>
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
