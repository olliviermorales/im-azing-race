import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='flex flex-between items-center justify-between w-full py-2 md:py-4 px-4 md:px-24 bg-primary-green fixed z-50 top-0 shadow-2xl'>
      <Link href='/' passHref className='flex gap-2 items-center'>
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
          <p className='hidden lg:block lg:text-sm xl:text-base 2xl:text-lg text-white drop-shadow-2xl'>
            Veterans Memorial Medical Center
          </p>
          <p className='hidden lg:block lg:text-sm xl:text-base 2xl:text-lg text-white drop-shadow-2xl'>
            Department of Internal Medicine
          </p>
        </div>
      </Link>
      {/* "Meet The Teams" link for all devices */}
      <Link
        href='/thank-you#teams'
        passHref
        className='text-white px-4 py-2 hover:bg-white hover:text-primary-green transition-colors duration-300 uppercase'
      >
        Meet The Teams
      </Link>
    </nav>
  );
};

export default Nav;
