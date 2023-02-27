import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import Header, { IMenuItem } from '../Header';
import SideBar from '../SideBar';

interface ILayoutProps {
	children?: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
	const sideMenuIsOpen = useSelector(
		(state: RootState) => state.sideMenu.isOpen,
	);

	const menuItems: IMenuItem[] = [
		{ title: 'Ínicio', path: '#inicio' },
		{ title: 'A Banda', path: '#banda' },
		{ title: 'Elementos', path: '#elementos' },
		{ title: 'Agenda', path: '#agenda' },
		{ title: 'Galeria', path: '#galeria' },
		{ title: 'Contactos', path: '#contactos' },
	];

	return (
		<div className='drawer drawer-end'>
			<input
				id='side-menu'
				type='checkbox'
				checked={sideMenuIsOpen}
				className='drawer-toggle'
				readOnly
			/>
			<div className='drawer-content flex flex-col'>
				<Header menuItems={menuItems} />
				<div className='h-full w-full mt-16'>{children}</div>
			</div>
			<SideBar menuItems={menuItems} />
		</div>
	);
}
