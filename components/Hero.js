export default function Hero() {
	return (
		<div className='relative bg-[#231f20] overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				<div className='relative z-10 pb-8 bg-[#231f20] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
					<svg
						className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#d31e28] transform translate-x-1/2'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>
					<div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
						<img
							src='/Images/blast-brew-stacked-white.png'
							alt='Blast & Brew'
						/>
					</div>
					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<div className='sm:text-center lg:text-left'>
							<h1 className='sr-only'>Blast & Brew | Pismo</h1>
							<p className='mt-3 pr-4 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Located within walking distance of the pier, our Pismo
								Blast & Brew is a great place to enjoy a tasty meal
								and cold brew with a fantastic view of the beach.
								We&apos;re open for lunch and dinner, and can&apos;t
								wait to serve you.
							</p>
						</div>
					</main>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<img
					className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
					src='/Images/pismo-blast-brew.jpg'
					alt='Blast & Brew | Pismo'
				/>
			</div>
		</div>
	);
}
