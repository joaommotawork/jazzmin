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
		<div className='w-full h-full overflow-scroll lg:snap-mandatory lg:snap-y scroll-smooth'>
			<div
				id='inicio'
				className='relative w-full h-full lg:snap-start lg:snap-always'>
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
				className='flex flex-col items-center justify-center gap-3 p-5 lg:w-full lg:h-full lg:p-20 lg:snap-start lg:snap-always'>
				<h1 className='mb-3 text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500'>
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
				className='w-full h-full p-5 lg:p-20 lg:snap-start lg:snap-always'></div> */}
			<div
				id='repertorio'
				className='flex flex-col items-center justify-center gap-3 p-5 lg:w-full lg:h-full lg:p-20 lg:snap-start lg:snap-always'>
				<h1 className='mb-3 text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500'>
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
					<div>
						<p className='px-4 py-3'>
							Summertime:{' '}
							<span className='font-bold'>George Gershwin</span>
						</p>
						<p className='px-4 py-3'>
							Os Bravos - (Tradicional Açoriano):{' '}
							<span className='font-bold'>
								Arranjo de Nelson Ribeiro
							</span>
						</p>
						<p className='px-4 py-3'>
							Sweet and Low-Down:{' '}
							<span className='font-bold'>George Gershwin</span>
						</p>
						<p className='px-4 py-3'>
							Les Feuilles Mort:{' '}
							<span className='font-bold'>Joseph Kosma</span>
						</p>
						<p className='px-4 py-3'>
							Chamarrita Coxa - (Tradicional Açoriano):{' '}
							<span className='font-bold'>
								Composição de Nuno Mendes
							</span>
						</p>
						<p className='px-4 py-3'>
							Barquinha Feiticeira - (Tradicional Açoriano):{' '}
							<span className='font-bold'>
								Arranjo de Nuno Mendes
							</span>
						</p>
						<p className='px-4 py-3'>
							Strike up the Band:{' '}
							<span className='font-bold'>George Gershwin</span>
						</p>
						<p className='px-4 py-3'>
							As Minhas Penas - (Tradicional Açoriano) - [Tributo
							a Humberto Pinheiro]:{' '}
							<span className='font-bold'>
								Arranjo de André Neves
							</span>
						</p>
						<p className='px-4 py-3'>
							Moon River:{' '}
							<span className='font-bold'>Henry Mancini</span>
						</p>
						<p className='px-4 py-3'>
							Milord:{' '}
							<span className='font-bold'>Edith Piaf</span>
						</p>
						<p className='px-4 py-3'>
							Chamateia - (Tradicional Açoriano):{' '}
							<span className='font-bold'>
								Arranjo de Nelson Ribeiro
							</span>
						</p>
						<p className='px-4 py-3'>
							Saudade - (Tradicional Açoriano):{' '}
							<span className='font-bold'>
								Arranjo de Nuno Mendes
							</span>
						</p>
					</div>
					<div>
						<p className='px-4 py-3'>
							La Vie En Rose:{' '}
							<span className='font-bold'>Edith Piaf</span>
						</p>
						<p className='px-4 py-3'>
							What a Wonderful World:{' '}
							<span className='font-bold'>
								George Wiess/Bob Thiele
							</span>
						</p>
						<p className='px-4 py-3'>
							My Baby Just Cares For Me:{' '}
							<span className='font-bold'>Walter Donaldson</span>
						</p>
						<p className='px-4 py-3'>
							Fly Me To The Moon:{' '}
							<span className='font-bold'>Bart Howard</span>
						</p>
						<p className='px-4 py-3'>
							New York, New York…:{' '}
							<span className='font-bold'>John Kander</span>
						</p>
						<p className='px-4 py-3'>
							Hymne à l’amour:{' '}
							<span className='px-4 py-3'>
								Edith Piaf & Marguertie Monnot
							</span>
						</p>
						<p className='px-4 py-3'>
							My Funny Valentine:{' '}
							<span className='font-bold'>
								Richard Rodgers & Lorenz Hart
							</span>
						</p>
						<p className='px-4 py-3'>
							Night and Day:{' '}
							<span className='font-bold'>Cole Porter</span>
						</p>
						<p className='px-4 py-3'>
							Night and Day:{' '}
							<span className='font-bold'>Cole Porter</span>
						</p>
						<p className='px-4 py-3'>
							I’ve Got Rhythm:{' '}
							<span className='font-bold'>
								George & Ira Gershwin
							</span>
						</p>
					</div>
				</div>
			</div>
			{/* <div
				id='agenda'
				className='flex p-5 lg:w-full lg:h-full lg:p-20 lg:snap-start lg:snap-always'>
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
				className='w-full h-full p-5 lg:p-20 lg:snap-start lg:snap-always'>
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
				className='relative p-5 lg:w-full lg:h-full lg:p-20 lg:snap-start lg:snap-always'>
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
						<h1 className='mb-3 text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500'>
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
