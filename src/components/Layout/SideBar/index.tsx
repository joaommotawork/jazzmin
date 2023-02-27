import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { closeSideMenu } from '../../../features/sideMenu-slice';
import { IMenuItem } from '../Header';

export interface ISideBarProps {
	menuItems?: IMenuItem[];
}

export default function SideBar({ menuItems }: ISideBarProps) {
	const dispatch = useDispatch();

	return (
		<div className='drawer-side'>
			<div className='drawer-overlay'></div>
			<ul className='p-4 flex flex-col gap-10 w-80 bg-base-100 h-full justify-center items-center'>
				<CgClose
					className='text-3xl cursor-pointer'
					onClick={() => dispatch(closeSideMenu())}
				/>
				{menuItems?.map(({ title, path }) => (
					<li
						className='relative group flex justify-center uppercase font-semibold'
						key={path}
						onClick={() => dispatch(closeSideMenu())}>
						<Link href={path}>{title}</Link>
						<span className='absolute -bottom-1 left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all'></span>
						<span className='absolute -bottom-1 right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all'></span>
					</li>
				))}
			</ul>
		</div>
	);
}
