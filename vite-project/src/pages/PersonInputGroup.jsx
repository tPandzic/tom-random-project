const PersonInputGroup = ({ person, setPerson }) => {
  return (
    <>
      <input
        type='text'
        placeholder='First Name'
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Last Name'
        value={person.lastName}
        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='date'
        placeholder='Date of Birth'
        value={person.dateOfBirth}
        onChange={(e) => setPerson({ ...person, dateOfBirth: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Occupation'
        value={person.occupation}
        onChange={(e) => setPerson({ ...person, occupation: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Status'
        value={person.status}
        onChange={(e) => setPerson({ ...person, status: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Place of Birth'
        value={person.placeOfBirth}
        onChange={(e) => setPerson({ ...person, placeOfBirth: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='number'
        placeholder='Height'
        value={person.height}
        onChange={(e) => setPerson({ ...person, height: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='number'
        placeholder='Weight'
        value={person.weight}
        onChange={(e) => setPerson({ ...person, weight: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Mother'
        value={person.mother}
        onChange={(e) => setPerson({ ...person, mother: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
      <input
        type='text'
        placeholder='Father'
        value={person.father}
        onChange={(e) => setPerson({ ...person, father: e.target.value })}
        className='p-2 border-2 rounded-md border-gray-400'
      />
    </>
  );
};

export default PersonInputGroup;
