import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import logo from '../../../../public/images/LogoBlack.png';
import { openSideMenu } from '../../../features/sideMenu-slice';

export interface IMenuItem {
	title: string;
	path: string;
}

export interface IHeaderProps {
	menuItems?: IMenuItem[];
}

export default function Header({ menuItems }: IHeaderProps) {
	const dispatch = useDispatch();

	return (
		<div className='fixed z-10 w-full'>
			<div className='w-full px-10 navbar bg-base-100'>
				<div className='navbar-start'>
					<span className='flex text-xl normal-case'>
						<Link href='/'>
							<Image
								src={logo}
								alt='Jazzmin Logo'
								height={40}
								width={120}
								loading={'eager'}
								priority
							/>
						</Link>
					</span>
				</div>
				<div className='flex navbar-center'>
					<ul className='hidden gap-10 lg:flex'>
						{menuItems?.map(({ title, path }) => (
							<li
								className='relative font-semibold uppercase group'
								key={path}>
								<Link href={path}>{title}</Link>
								<span className='absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all'></span>
								<span className='absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all'></span>
							</li>
						))}
					</ul>
				</div>
				<div className='navbar-end'>
					<CgMenuRight
						className='flex-none mr-3 text-3xl cursor-pointer lg:hidden'
						onClick={() => dispatch(openSideMenu())}
					/>
				</div>
			</div>
		</div>
	);
}
