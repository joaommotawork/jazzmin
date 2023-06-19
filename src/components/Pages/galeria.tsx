import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../public/images/Banner1.jpeg';
import banner2 from '../../../public/images/Banner2.jpeg';
import banner3 from '../../../public/images/Banner3.jpeg';
import banner4 from '../../../public/images/Banner4.jpeg';
import { Navigation } from 'swiper';
import { useState } from 'react';

type Props = {};

function Galeria({}: Props) {
	const elementos = [banner1, banner2, banner3, banner4]

	const [slides, setSlides] = useState(elementos)

	return (
		<div id='galeria' className='w-full h-full p-5 lg:p-20'>
			<button
				className='px-4 py-2 font-bold text-white underline bg-blue-500 rounded hover:bg-blue-700'
				onClick={() => setSlides(elementos)}>
				Elementos
			</button>
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
				{slides.map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<Image
								src={slide}
								alt='Elementos Jazzmin'
								layout='fill'
								objectFit='cover'
								loading={'eager'}
								priority
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Galeria;
