const CardPage = ({
  person,
  setPerson,
  setSelectedPersonIndex,
  selectedPersonIndex,
  removeExistingPerson,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedPersonIndex(person.index);
        setPerson({
          ...person,
        });
      }}
      key={person.index}
      className={`bg-white flex flex-col p-2 
     rounded-md border-4 border-gray-400
      hover:border-blue-500 ${
        person.index === selectedPersonIndex && 'border-blue-500'
      }`}
    >
      <div className='flex items-center gap-3'>
        <span className='w-fit bg-blue-500 rounded-3xl p-2 text-white'>
          {`${person.firstName.charAt(0)}.${person.lastName.charAt(0)}.`}
        </span>

        <div>
          <div className='text-lg font-bold '>
            {' '}
            <span>{person.firstName} </span>
            <span>{person.lastName}</span>
          </div>

          <div className='text-sm'>
            <span>{person.dateOfBirth}, </span>
            <span>{person.placeOfBirth}</span>
          </div>
        </div>
      </div>
      <span>Occupation: {person.occupation}</span>
      <span>Height: {person.height}</span>
      <span>Weight: {person.weight}</span>
      <span>Mother: {person.mother}</span>
      <span>Father: {person.father}</span>
      <span>Status: {person.status}</span>
      <span>Created At: {person.createdAt}</span>
      <span>Index: {person.index}</span>
      <button
        className='bg-blue-500 text-white p-2 rounded-md'
        onClick={() => removeExistingPerson(person.index)}
      >
        Remove
      </button>
    </div>
  );
};

export default CardPage;
