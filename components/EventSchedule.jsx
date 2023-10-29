import Image from 'next/image';
import EventProgram from './EventProgram';

const scheduleItems = [
  {
    time: '7:30 AM - 8:00 AM',
    programme: 'Opening Ceremony',
    speakers: 'John Doe',
  },
  {
    time: '8:00 AM - 8:15 AM',
    programme: 'Keynote Speech',
    speakers: 'Jane Smith',
  },
  {
    time: '8:15 AM - 8:30 AM',
    programme: 'Keynote Speech',
    speakers: 'Jane Smith',
  },
  {
    time: '8:30 AM - 9:30 AM',
    programme: 'Keynote Speech',
    speakers: 'Jane Smith',
  },
  {
    time: '9:30 AM - 10:00 AM',
    programme: 'Keynote Speech',
    speakers: 'Jane Smith',
  },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
  { time: '11:00 AM', programme: 'Keynote Speech', speakers: 'Jane Smith' },
];

const EventSchedule = () => {
  return (
    <section className='py-4 sm:py-8 lg:py-16 bg-primary-green min-h-screen w-full flex flex-col items-center space-y-4 sm:space-y-6'>
      <div className='flex flex-col space-y-4'>
        <Image
          src={'/assets/images/race-white.png'}
          alt='Map Image'
          layout='responsive'
          width={25}
          height={25}
          quality={100}
        />
      </div>
      <div className='text-center bg-primary-yellow text-primary-green text-xl sm:text-2xl lg:text-5xl font-black px-2 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8'>
        FOR A GREENER PLACE
      </div>
      <div>
        <p className='text-center text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest'>
          feat. Doctors of the Earth
        </p>
      </div>
      <div className='px-2 sm:px-8 lg:px-12 w-full mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 border-t-4 border-t-white font-semibold py-5 border-b-4 border-b-primary-yellow text-white'>
          <div className='px-2'>TIME</div>
          <div className='px-2'>PROGRAMME</div>
          <div className='px-2'>SPEAKERS</div>
        </div>
        {scheduleItems.map((item, index) => (
          <EventProgram
            key={index}
            time={item.time}
            programme={item.programme}
            speakers={item.speakers}
          />
        ))}
      </div>
    </section>
  );
};

export default EventSchedule;
