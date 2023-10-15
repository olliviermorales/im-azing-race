import React from 'react';
import Salamat from '@/components/Salamat';
import Teams from '@/components/Teams';

const ThankYou = () => {
  return (
    <section className='font-inter bg-gradient-to-b from-yellow-500 to-white   w-full max-w-full flex min-h-screen flex-col mt-16'>
      <Salamat />
      <Teams />
    </section>
  );
};

export default ThankYou;
