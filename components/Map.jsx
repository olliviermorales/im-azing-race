import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Map = () => {
  return (
    <section className='py-12 lg:py-16 bg-gradient-to-b from-primary-yellow to-white min-h-screen w-full flex flex-col lg:flex-row items-center'>
      {/* Image Column */}
      <div className='mx-auto w-full lg:w-1/2'>
        <Image
          src={'/assets/images/map.png'}
          alt='Map Image'
          layout='responsive'
          width={500}
          height={500}
          quality={100}
        />
      </div>

      {/* Text Content Column */}
      <div className='mt-8 lg:mt-0 mx-auto px-8 lg:px-32 w-full lg:w-1/2 flex flex-col space-y-6'>
        <p className='uppercase lg:text-9xl text-4xl tracking-widest font-black text-primary-yellow text-center bg-primary-green'>
          THE
        </p>
        <div className='flex justify-center items-center space-x-2'>
          <p className='uppercase lg:text-9xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-green to-black'>
            IM
          </p>
          <p className='uppercase lg:text-9xl text-4xl font-black text-primary-green'>
            -AZING
          </p>
        </div>
        <p className='uppercase lg:tracking-[110px] lg:text-9xl text-4xl text-center font-black text-primary-green'>
          RACE
        </p>
        <p className='lg:text-3xl text-xl font-bold text-yellow-200 text-center bg-primary-green p-3'>
          Philippine College of Physicians <br /> Quezon City Chapter
        </p>
        <p className='lg:text-3xl text-xl font-bold text-center text-primary-green'>
          An Interhospital Activity
        </p>
        <div className='border border-primary-green px-4 lg:px-12 py-2 lg:py-4 space-y-2'>
          <div className='flex items-center space-x-2'>
            <Image
              src={'/assets/images/calendar.svg'}
              alt='Calendar Icon'
              width={25}
              height={25}
            />
            <p className='text-xl lg:text-2xl font-bold text-primary-green'>
              November 11, 2023 at 8:30 AM
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src={'/assets/images/location.svg'}
              alt='Location Icon'
              width={25}
              height={25}
            />
            <p className='text-xl lg:text-2xl font-bold text-primary-green'>
              Veterans Memorial Medical Center
            </p>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <Link
            href='#form'
            className='text-2xl lg:text-4xl font-bold text-white px-4 bg-primary-green py-3 rounded-full hover:bg-blue-500'
          >
            Register Here!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Map;
