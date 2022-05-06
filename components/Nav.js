import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='max-w-7xl mx-auto p-4'>
      <ul className='flex flex-wrap justify-center'>
        <li className='mr-4'>
          <Link href='/'>
            <a className='text-white font-bold hover:text-[#d31e28]'>Home</a>
          </Link>
        </li>
        <li className='mr-4'>
          <Link href='/pool-menu'>
            <a className='text-white font-bold hover:text-[#d31e28]'>
              Pool Menu
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
