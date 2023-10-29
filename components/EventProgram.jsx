const EventProgram = ({ time, programme, speakers }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-b border-primary-yellow py-3 sm:py-5 text-white w-full'>
      <div className='px-2 py-1'>{time}</div>
      <div className='px-2 py-1'>{programme}</div>
      <div className='px-2 py-1'>{speakers}</div>
    </div>
  );
};

export default EventProgram;
