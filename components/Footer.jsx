import Image from 'next/image';

function Footer() {
  return (
    <footer className='bg-primary-yellow p-4 md:p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full'>
      <div className='flex space-x-2 md:space-x-4'>
        <div className='w-8 md:w-12 h-8 md:h-12 relative'>
          <Image
            src={'/assets/images/vmmc logo 1.png'}
            width={50}
            height={50}
            className='object-contain'
            alt='Logo 1'
          />
        </div>
        <div className='w-8 md:w-12 h-8 md:h-12 relative'>
          <Image
            src={'/assets/images/vmmcim logo 1.png'}
            width={50}
            height={50}
            className='object-contain'
            alt='Logo 2'
          />
        </div>
        <div className='w-8 md:w-12 h-8 md:h-12 relative'>
          <Image
            src={'/assets/images/image 3.png'}
            width={50}
            height={50}
            className='object-contain'
            alt='Logo 3'
          />
        </div>
      </div>
      <div className='text-center md:text-left'>
        <h1 className='font-semibold text-sm md:text-lg'>
          Veterans Memorial Medical Center
        </h1>
        <p className='text-xs md:text-sm'>Department of Internal Medicine</p>
        <p className='text-xxs md:text-xs'>
          Copyright © 2023. All rights reserved.
        </p>
      </div>
      <div className='text-right'>
        <p className='text-xs md:text-sm'>North Avenue,</p>
        <p className='text-xs md:text-sm'>Diliman, Quezon City,</p>
        <p className='text-xs md:text-sm'>1110, Philippines</p>
      </div>
    </footer>
  );
}

export default Footer;
