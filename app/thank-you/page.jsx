import React from 'react';
import Salamat from '@/components/Salamat';
import Teams from '@/components/Teams';
import EventSchedule from '@/components/EventSchedule';

const ThankYou = () => {
  return (
    <section className='font-inter bg-gradient-to-b from-primary-yellow to-white   w-full max-w-full flex min-h-screen flex-col mt-16'>
      <Salamat />
      <Teams />
      <EventSchedule />
    </section>
  );
};

export default ThankYou;
