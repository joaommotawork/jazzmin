import React from 'react'

type Props = {}

function Contactos({}: Props) {
  return (
		<div id='contactos' className='relative w-full h-full p-5 lg:p-20'>
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
  );
}

export default Contactos
