'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Salamat = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='px-16 pt-16 w-full'>
        <div className='bg-primary-blue flex flex-col space-y-6 px-12 py-12'>
          <p className='text-white text-6xl text-center font-bold w-full'>
            Thank you for registering
          </p>
          <p className='text-white text-6xl text-center font-bold w-full'>
            for the IM-AZING RACE interhospital activity!
          </p>
        </div>
      </div>
      <div>
        <div className='flex mt-16'>
          <div className='w-1/2 flex flex-col'>
            <div className='px-12 py-4 space-y-3'>
              <div className='flex justify-start'>
                <Image
                  src={'/assets/images/calendar.svg'}
                  alt='Promptopia Logo'
                  width={25}
                  height={25}
                  className='object-contain mx-5'
                />
                <p className='text-center text-2xl font-bold  text-primary-blue'>
                  November 11, 2023 at 8:30 AM
                </p>
              </div>
              <div className='flex'>
                <Image
                  src={'/assets/images/location.svg'}
                  alt='Promptopia Logo'
                  width={25}
                  height={25}
                  className='object-contain mx-5'
                />
                <p className='text-center text-2xl font-bold  text-primary-blue'>
                  Veterans Memorial Medical Center
                </p>
              </div>
              <div className='flex justify-center mt-3'>
                <Image
                  src={'/assets/images/vmmc-icon-dark.svg'}
                  alt='Promptopia Logo'
                  className='object-cover'
                  width='400'
                  height='400'
                  quality='100'
                />
              </div>
              <div className='flex flex-col justify-center text-center mt-16'>
                <button
                  onClick={() => router.push('/')}
                  className='text-4xl font-bold text-white text-center px-6 bg-primary-blue p-3 rounded-full hover:bg-blue-500 mt-6'
                >
                  Return to homepage
                </button>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <Image
              src={'/assets/images/vmmc-svg.svg'}
              alt='Promptopia Logo'
              width={2000}
              height={2000}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salamat;
