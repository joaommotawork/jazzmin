import React from 'react';

type Props = {};

function Concertos({}: Props) {
	return (
		<div
			id='concertos'
			className='flex flex-col items-center justify-center gap-3 p-5 lg:p-20 lg:mx-52'>
			<h1 className='text-3xl font-medium underline uppercase lg:text-5xl underline-offset-8 decoration-orange-500 lg:pb-5'>
				Concertos
			</h1>
			<p className='relative font-semibold uppercase'>
				Concerto Auditório Madalena - RTP Açores
			</p>
			<div className='relative overflow-hidden px-10 w-full pt-[56.25%]'>
				<iframe
					title='Concerto Auditório Madalena - RTP Açores'
					src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frtpacores%2Fvideos%2F440895398115153%2F&show_text=false&width=560&t=0'
					className='absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden border-0'
					allowFullScreen
					allow='clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
			</div>
		</div>
	);
}

export default Concertos;
