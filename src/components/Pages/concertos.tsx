import React from 'react'

type Props = {}

function Concertos({}: Props) {
  return (
		<div
			id='concertos'
			className='flex flex-col items-center justify-center gap-3 p-5 lg:p-20'>
			<h1 className='text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500 lg:pb-5'>
				Concertos
			</h1>
			<p>
				<a
					href='https://www.rtp.pt/play/palco/p8802/e650265/regresso-ao-palco'
					className='relative font-semibold uppercase'
					target='_blank'>
					<span>Concerto Auditório Madalena - RTP Açores</span>
				</a>
			</p>
		</div>
  );
}

export default Concertos
