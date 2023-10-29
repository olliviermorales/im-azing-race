'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Salamat = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col mx-auto max-w-screen'>
      <div className='px-4 sm:px-8 lg:px-16 pt-8 lg:pt-16 w-full'>
        <div className='bg-primary-green flex flex-col space-y-4 sm:space-y-6 px-4 sm:px-8 lg:px-12 py-8 lg:py-12'>
          <p className='text-4xl sm:text-5xl lg:text-6xl text-center font-bold w-full text-primary-yellow'>
            Thank you for registering
          </p>
          <p className='text-4xl sm:text-5xl lg:text-6xl text-center font-bold w-full text-primary-yellow'>
            for the IM-AZING RACE interhospital activity!
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row mt-8 lg:mt-16'>
        <div className='px-4 sm:px-8 lg:px-12 py-4 w-full lg:w-1/2 space-y-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/images/calendar.svg'}
              alt='Calendar Icon'
              width={25}
              height={25}
            />
            <p className='text-xl sm:text-2xl font-bold text-primary-green'>
              November 11, 2023 at 8:30 AM
            </p>
          </div>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/images/location.svg'}
              alt='Location Icon'
              width={25}
              height={25}
            />
            <p className='text-xl sm:text-2xl font-bold text-primary-green'>
              Veterans Memorial Medical Center
            </p>
          </div>
          <div className='flex justify-center mt-3'>
            <Image
              src={'/assets/images/race-green.png'}
              alt='Race Logo'
              width='400'
              height='400'
              quality='100'
            />
          </div>
          <div className='flex flex-col justify-center text-center mt-8 lg:mt-16'>
            <button
              onClick={() => router.push('/')}
              className='text-2xl lg:text-4xl font-bold text-white text-center px-6 bg-primary-green p-3 rounded-full hover:bg-blue-500 mt-6'
            >
              Return to homepage
            </button>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 w-full lg:w-1/2'>
          <Image
            src={'/assets/images/vmmc-svg.svg'}
            alt='VMMC Image'
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Salamat;
