const PersonButtonGroup = ({
  person,
  selectedPersonIndex,
  updateExistingPerson,
  createNewPerson,
  handleStoringToLocalStorage,
}) => {
  return (
    <>
      {person.index === selectedPersonIndex && (
        <button
          onClick={() => updateExistingPerson(person.index)}
          className='bg-blue-500 text-white p-2 rounded-md'
        >
          Update
        </button>
      )}

      <button
        onClick={() => createNewPerson()}
        className='bg-blue-500 text-white p-2 rounded-md'
      >
        Create
      </button>

      <button
        onClick={() => handleStoringToLocalStorage()}
        className='bg-blue-500 text-white p-2 rounded-md'
      >
        Save
      </button>
    </>
  );
};

export default PersonButtonGroup;
