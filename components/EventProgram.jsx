const EventProgram = ({
  time,
  programme,
  programme2,
  programme3,
  speakers,
}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-b border-primary-yellow py-3 sm:py-5 text-white w-full'>
      <div className='px-2 py-1'>{time}</div>
      <div className='px-2 py-1 uppercase font-semibold '>
        {programme}
        {programme2 && <div>{programme2}</div>}{' '}
        {programme3 && <div>{programme3}</div>}{' '}
      </div>
      <div className='px-2 py-1 italic'>
        {speakers.map((speaker, idx) => (
          <div key={idx}>{speaker}</div>
        ))}
      </div>
    </div>
  );
};

export default EventProgram;
