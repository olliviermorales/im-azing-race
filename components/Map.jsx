import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDown } from 'react-icons/bs';

const Map = () => {
  return (
    <section className='bg-gradient-to-b from-yellow-500 to-yellow-100 min-h-screen w-full flex flex-col lg:flex-row'>
      {/* Image Column */}
      <div className='mx-auto w-full xl:w-1/2'>
        <Image
          src={'/assets/images/Asset 3.svg'}
          alt='Promptopia Logo'
          width={500}
          height={500}
          className='object-cover w-full h-full'
          quality={100}
        />
      </div>

      {/* Text Content Column */}
      <div className='mt-8 xl:mt-16 mx-auto px-8 xl:px-32 w-full xl:w-1/2 flex flex-col space-y-3'>
        <p className='uppercase xl:text-9xl text-4xl tracking-widest font-black text-yellow-500 text-center bg-primary-blue'>
          THE
        </p>
        <div className='flex justify-center'>
          <p className='uppercase xl:text-9xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-blue to-black'>
            IM
          </p>
          <p className='uppercase xl:text-9xl text-4xl font-black text-primary-blue'>
            -AZING
          </p>
        </div>
        <p className='uppercase xl:tracking-[110px] xl:text-9xl text-4xl text-center font-black text-primary-blue'>
          RACE
        </p>
        <p className='xl:text-3xl text-xl font-bold text-yellow-200 text-center bg-primary-blue p-3'>
          Philippine College of Physicians <br /> Quezon City Chapter
        </p>
        <p className='xl:text-3xl text-xl font-bold text-center text-primary-blue'>
          An Interhospital Activity
        </p>
        <div className='border border-primary-blue xl:px-12 px-4 xl:py-4 py-2 space-y-2'>
          <div className='flex justify-start'>
            <Image
              src={'/assets/images/calendar.svg'}
              alt='Promptopia Logo'
              width={25}
              height={25}
              className='object-contain mx-2 xl:mx-5'
            />
            <p className='text-center xl:text-2xl text-xl font-bold text-primary-blue'>
              November 11, 2023 at 8:30 AM
            </p>
          </div>
          <div className='flex'>
            <Image
              src={'/assets/images/location.svg'}
              alt='Promptopia Logo'
              width={25}
              height={25}
              className='object-contain mx-2 xl:mx-5'
            />
            <p className='text-center xl:text-2xl text-xl font-bold text-primary-blue'>
              Veterans Memorial Medical Center
            </p>
          </div>
        </div>
        <div className='flex justify-center text-center'>
          <Link
            href='#form'
            className='lg:text-4xl text-2xl font-bold text-white text-center px-4 bg-primary-blue p-3 rounded-full hover:bg-blue-500'
          >
            Register Below!
          </Link>
        </div>
        <div className='flex justify-center'>
          <p className='text-6xl text-center mt-3'>
            <BsArrowDown className='text-primary-blue animate-bounce' />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
