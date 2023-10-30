import EventSchedule from '@/components/EventSchedule';
import Form from '@/components/Form';
import Map from '@/components/Map';

const Home = () => {
  return (
    <section className='font-inter w-full flex-center flex-col mt-16'>
      <Map />
      <Form />
      <EventSchedule />
    </section>
  );
};

export default Home;
