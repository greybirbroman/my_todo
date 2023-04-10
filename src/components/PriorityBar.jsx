
const PriorityBar = ({ priority, setPriority }) => {
  const handleChangeSelect = (e) => {
    setPriority(e.target.value);
  };

  function getTaskColorByPriority(priority) {
    if (priority === 'medium') return 'bg-yellow-200';
    if (priority === 'low') return 'bg-green-200';
    return 'bg-red-200';
  }

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-sm font-bold'>Priority:</span>
      <select
        style={{
          width: 'fit-content',
          height: '2.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          outline: 'none',
        }}
        className={`${getTaskColorByPriority(
          priority
        )} rounded-xl px-2 border border-gray-600 cursor-pointer`}
        value={priority}
        onChange={handleChangeSelect}
      >
        <option value='high'>High</option>
        <option value='medium'>Medium</option>
        <option value='low'>Low</option>
      </select>
    </div>
  );
};

export default PriorityBar;
