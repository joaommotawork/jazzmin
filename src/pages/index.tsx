import Banda from '@/components/Pages/banda';
import Concertos from '@/components/Pages/concertos';
import Contactos from '@/components/Pages/contactos';
import Galeria from '@/components/Pages/galeria';
import Inicio from '@/components/Pages/inicio';
import Repertorio from '@/components/Pages/repertorio';

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
