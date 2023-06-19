import React from 'react'

type Props = {}

function Repertorio({}: Props) {
  return (
		<div
			id='repertorio'
			className='flex flex-col items-center justify-center gap-3 p-5 lg:p-20'>
			<h1 className='text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500 lg:pb-5'>
				Repertório
			</h1>
			<div className='flex flex-col w-full gap-5 md:flex-row md:w-3/4'>
				<div className='flex-1'>
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
						Les Leuilles Mortes:{' '}
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
						As Minhas Penas - (Tradicional Açoriano) - [Tributo a
						Humberto Pinheiro]:{' '}
						<span className='font-bold'>
							Arranjo de André Neves
						</span>
					</p>
					<p className='px-4 py-3'>
						Moon River:{' '}
						<span className='font-bold'>Henry Mancini</span>
					</p>
					<p className='px-4 py-3'>
						Milord: <span className='font-bold'>Edith Piaf</span>
					</p>
				</div>
				<div className='flex-1'>
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
						<span className='font-bold'>
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
						I’ve Got Rhythm:{' '}
						<span className='font-bold'>George & Ira Gershwin</span>
					</p>
				</div>
			</div>
		</div>
  );
}

export default Repertorio
