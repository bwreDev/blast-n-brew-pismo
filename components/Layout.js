import LogoCloud from './LogoCloud';
import GCHero from './GCHero';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className='bg-[#231f20]'>
      <div className='bg-grunge-overlay bg-cover bg-fixed'>
        <div className='h-full max-w-7xl mx-auto'>
          <Nav />
          <main>{children}</main>
          <GCHero />
          <LogoCloud />
        </div>
      </div>
    </div>
  );
}
