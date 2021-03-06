import Link from 'next/link';

export default function LogoCloud() {
  return (
    <div className='bg-[#231f20] max-w-full'>
      <div className='bg-[#d31e28] max-w-7xl mx-auto rounded-lg'>
        <div className='bg-grunge-overlay bg-cover bg-no-repeat bg-fixed'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <div className='flow-root'>
              <div className='flex flex-wrap justify-around'>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <a
                    href='https://www.menedscentralcoast.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-16 md:h-20 lg:h-24'
                      src='/SVG/me-n-eds-crafthouse.svg'
                      alt="Me and Ed's"
                    />
                  </a>
                </div>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <Link href='/'>
                    <a>
                      <img
                        className='h-16 md:h-20 lg:h-24'
                        src='/Images/blast&brew-2022.jpg'
                        alt='Blast and Brew'
                      />
                    </a>
                  </Link>
                </div>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <a
                    href='https://www.blast825brewery.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-16 md:h-20 lg:h-24'
                      src='/SVG/blast-825-black-bg.svg'
                      alt='Blast 825 Brewery'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden border-t-2 border-[#231f20] sm:px-6 lg:px-8'>
              <Link href='/'>
                <a>
                  <img
                    src='/SVG/ccrg-outlined.svg'
                    alt='CCRG'
                    className='h-20 md:h-24 lg:h-28 w-auto mx-auto'
                  />
                </a>
              </Link>
              <p className='pt-8 text-center text-base text-zinc-200'>
                &copy; 2021 Central Coast Restaurant Group | All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
