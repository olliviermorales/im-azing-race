import Image from 'next/image';
import EventProgram from './EventProgram';

const scheduleItems = [
  {
    time: '7:30 AM - 8:00 AM',
    programme: 'Registration',
    speakers: [],
  },
  {
    time: '8:00 AM - 8:15 AM',
    programme: 'Invocation and anthem',
    speakers: [],
  },
  {
    time: '8:15 AM - 8:30 AM',
    programme: 'Opening Remarks',
    speakers: ['Eloisa S. De Guia, MD, FPCP'],
  },
  {
    time: '8:30 AM - 9:30 AM',
    programme: 'Introduction of speaker',
    programme2:
      'GREEN EVENT 2023: S.W.E.E.P. (Sustainable Work towards Equitable Environment Protection)',
    speakers: [
      'Host',
      `Paula Teresa F. Sta. Maria, MD, FPCP
      (Chair, Committee on Climate Change, Environment and Health)`,
      `Jonathan Moses C. Jadloc, MD, FPCP
(Committee on Climate Change, Environment and Health)`,
    ],
  },
  {
    time: '9:30 AM - 10:00 AM',
    programme: 'Reading of Mechanics',
    programme2: 'Introduction of Teams',
    programme3: 'Oath of sportsmanship',
    speakers: [
      'Lance F. Alabarca, MD',
      'Host',
      'Karina F. Mabanag, MD',
      'Rafael Roi B. Rosales, MD',
    ],
  },
  {
    time: '10:00 AM - 12:00 PM',
    programme: 'IM-AZING RACE PROPER',
    speakers: [],
  },
  {
    time: '12:00 PM - onwards',
    programme: 'Awarding of Winners',
    programme2: 'Closing Remarks',
    speakers: ['Awards Committee', 'Robert A. Barja, MD, FPCP'],
  },
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
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 border-t-4 border-t-white font-semibold py-5 border-b-4 border-b-white text-white'>
          <div className='px-2 text-lg font-bold'>TIME</div>
          <div className='px-2 text-lg font-bold'>PROGRAMME</div>
          <div className='px-2 text-lg font-bold'>SPEAKERS</div>
        </div>
        {scheduleItems.map((item, index) => (
          <EventProgram
            key={index}
            time={item.time}
            programme={item.programme}
            programme2={item.programme2}
            programme3={item.programme3}
            speakers={item.speakers}
          />
        ))}
      </div>
      <div>
        <p className='text-primary-yellow text-2xl font-black tracking-wide'>
          RESTORING HEALTH,
        </p>
        <p className='text-primary-yellow text-2xl font-black tracking-wide'>
          RESTORING EARTH
        </p>
      </div>
    </section>
  );
};

export default EventSchedule;
