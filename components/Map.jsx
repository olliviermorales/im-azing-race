import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Map = () => {
  return (
    <section className='py-6 md:py-10 lg:py-16 bg-gradient-to-b from-primary-yellow to-white min-h-screen w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0'>
      {/* Image Column */}
      <div className='mx-auto w-full md:w-1/2 flex justify-center items-center'>
        <Image
          src={'/assets/images/map.png'}
          alt='Map Image'
          width={750}
          height={750}
          quality={100}
        />
      </div>

      {/* Text Content Column */}
      <div className='mt-8 md:mt-0 mx-auto px-4 md:px-6 lg:px-24 w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6'>
        {/* <p className='uppercase md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-4xl tracking-widest font-black text-primary-yellow text-center bg-primary-green'>
          THE
        </p>

        <div className='flex justify-center items-center space-x-2'>
          <p className='uppercase md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-green to-black'>
            IM
          </p>
          <p className='uppercase md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-4xl font-black text-primary-green'>
            -AZING
          </p>
        </div>

        <p className='uppercase md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-4xl text-center font-black text-primary-green'>
          RACE
        </p> */}
        <Image
          src={'/assets/images/green-race.svg'}
          alt='Map Image'
          width={2500}
          height={2500}
          quality={100}
        />

        {/* <p className='md:text-2xl lg:text-2xl xl:text-3xl  text-xl font-bold text-primary-yellow text-center bg-primary-green p-3'>
          Philippine College of Physicians <br /> Quezon City Chapter
        </p>

        <p className='md:text-2xl lg:text-3xl text-xl font-bold text-center text-primary-green'>
          An Interhospital Activity
        </p> */}

        <div className='border border-primary-green px-4 md:px-8 lg:px-12 py-2 lg:py-4 space-y-2'>
          <div className='flex items-center space-x-2'>
            <Image
              src={'/assets/images/calendar.svg'}
              alt='Calendar Icon'
              width={25}
              height={25}
            />
            <p className='text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-primary-green'>
              November 25, 2023 at 7:30 AM
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src={'/assets/images/location.svg'}
              alt='Location Icon'
              width={25}
              height={25}
            />
            <p className='text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-primary-green'>
              Veterans Memorial Medical Center
            </p>
          </div>
        </div>
        <div>
          <p className='text-primary-green'>
            *Deadline of Registration is on November 8, 2023.
          </p>
        </div>

        <div className='flex justify-center mt-4'>
          <Link
            href='#form'
            className='text-xl md:text-xl lg:text-xl xl:text-4xl 2xl:text-4xl font-bold text-primary-yellow px-4 bg-primary-green py-3 rounded-full hover:bg-green-500'
          >
            Register Here!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Map;
