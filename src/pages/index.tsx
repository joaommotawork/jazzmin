import 'swiper/css';
import 'swiper/css/navigation';
import Inicio from '@/components/Pages/inicio';
import Banda from '@/components/Pages/banda';
import Repertorio from '@/components/Pages/repertorio';
import Galeria from '@/components/Pages/galeria';
import Contactos from '@/components/Pages/contactos';
import Concertos from '@/components/Pages/concertos';

export default function Index() {
	return (
		<>
			<Inicio />
			<Banda />
			<Repertorio />
			<Concertos />
			<Galeria />
			<Contactos />
		</>
	);
}
