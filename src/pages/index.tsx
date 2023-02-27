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
				className='w-full h-full p-20 snap-start snap-always'></div>
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
					onSwiper={(swiper) => console.log(swiper)}>
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
						src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
						style={{
							filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
						}}
					/>
				</div>
				<div className='container flex px-5 py-24 mx-auto'>
					<div className='relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0'>
						<span className='text-3xl'>Contactos</span>
					</div>
				</div>
			</div>
		</div>
	);
}
