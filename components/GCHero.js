export default function GCHero() {
  return (
    <div className='bg-[#231f20] pb-4'>
      <div className='relative max-w-7xl mx-auto'>
        <div className='h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <img
            className='w-full h-full object-cover'
            src='/Images/ccrg-gc.jpg'
            alt='CCRG Gift Card Promo'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 2xl:p-36'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold uppercase tracking-wider text-[#d31e28]'>
              Universal gift cards
            </h2>
            <p className='pt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Life&apos;s too short, share the blast!
            </p>
            <p className='mt-3 mb-14 text-lg text-white'>
              Now offering universal gift cards for our various locations and
              concepts. Come on in and ask about our offers in store!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
