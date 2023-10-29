import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='flex flex-wrap items-center justify-between w-full py-2 md:py-4 px-4 md:px-24 bg-primary-green fixed z-50 top-0 shadow-2xl '>
      <Link href='/' className='flex gap-2 flex-center items-center'>
        <Image
          src={'/assets/images/vmmc logo 1.png'}
          alt='Logo 1'
          width={40}
          height={40}
          className='object-contain mx-2 md:mx-5'
        />
        <Image
          src={'/assets/images/vmmcim logo 1.png'}
          alt='Logo 2'
          width={40}
          height={40}
          className='object-contain mx-2 md:mx-5'
        />
        <Image
          src={'/assets/images/image 3.png'}
          alt='Logo 3'
          width={40}
          height={40}
          className='object-contain mx-2 md:mx-5'
        />
        <div className='flex flex-col ml-2'>
          <p className='hidden md:block text-white drop-shadow-2xl'>
            Veterans Memorial Medical Center
          </p>
          <p className='hidden md:block text-white drop-shadow-2xl'>
            Department of Internal Medicine
          </p>
          <p className='text-xl md:hidden text-white font-bold uppercase'>
            THE IM-AZING RACE
          </p>
        </div>
      </Link>
      <div className='hidden md:block w-full mt-2 md:mt-0 md:w-auto'>
        <p className='lg:text-7xl md:text-5xl text-white font-black uppercase'>
          THE IM-AZING RACE
        </p>
      </div>
    </nav>
  );
};

export default Nav;
