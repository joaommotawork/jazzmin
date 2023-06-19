import Image from 'next/image';
import logo from '../../../public/images/LogoWhite.png';
import { CgMouse } from 'react-icons/cg';
import banner3 from '../../../public/images/Banner3.jpeg';

type Props = {}

function Inicio({}: Props) {
  return (
		<div id='inicio' className='relative w-full h-full'>
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
  );
}

export default Inicio
