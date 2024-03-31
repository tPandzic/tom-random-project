const PersonEditInputGroup = ({
  person,
  setPerson,
  editMode,
  updateExistingPerson,
  editedPerson,
  setEditedPerson,
}) => {
  return (
    <div className='flex flex-col gap-4 px-6 py-4'>
      <h2 className='font-bold text-2xl'>Edit Person</h2>

      <hr />
      <div className='flex items-center justify-between'>
        {' '}
        <label htmlFor='firstName'>First Name: </label>
        <input
          id='firstName'
          type='text'
          placeholder='First Name'
          value={editMode ? editedPerson.firstName : person.firstName}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, firstName: e.target.value })
              : setPerson({ ...person, firstName: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          id='lastName'
          type='text'
          placeholder='Last Name'
          value={editMode ? editedPerson.lastName : person.lastName}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, lastName: e.target.value })
              : setPerson({ ...person, lastName: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='dateOfBirth'>Date of Birth:</label>
        <input
          id='dateOfBirth'
          type='date'
          placeholder='Date of Birth'
          value={editMode ? editedPerson.dateOfBirth : person.dateOfBirth}
          onChange={(e) =>
            editMode
              ? setEditedPerson({
                  ...editedPerson,
                  dateOfBirth: e.target.value,
                })
              : setPerson({ ...person, dateOfBirth: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='occupation'>Occupation:</label>
        <input
          id='occupation'
          type='text'
          placeholder='Occupation'
          value={editMode ? editedPerson.occupation : person.occupation}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, occupation: e.target.value })
              : setPerson({ ...person, occupation: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='status'>Status:</label>
        <input
          id='status'
          type='text'
          placeholder='Status'
          value={editMode ? editedPerson.status : person.status}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, status: e.target.value })
              : setPerson({ ...person, status: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='placeOfBirth'>Place of Birth:</label>
        <input
          id='placeOfBirth'
          type='text'
          placeholder='Place of Birth'
          value={editMode ? editedPerson.placeOfBirth : person.placeOfBirth}
          onChange={(e) =>
            editMode
              ? setEditedPerson({
                  ...editedPerson,
                  placeOfBirth: e.target.value,
                })
              : setPerson({ ...person, placeOfBirth: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='height'>Height:</label>
        <input
          type='number'
          placeholder='Height'
          value={editMode ? editedPerson.height : person.height}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, height: e.target.value })
              : setPerson({ ...person, height: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='weight'>Weight:</label>
        <input
          id='weight'
          type='number'
          placeholder='Weight'
          value={editMode ? editedPerson.weight : person.weight}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, weight: e.target.value })
              : setPerson({ ...person, weight: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='mother'>Mother:</label>
        <input
          id='mother'
          type='text'
          placeholder='Mother'
          value={editMode ? editedPerson.mother : person.mother}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, mother: e.target.value })
              : setPerson({ ...person, mother: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label htmlFor='father'>Father:</label>
        <input
          id='father'
          type='text'
          placeholder='Father'
          value={editMode ? editedPerson.father : person.father}
          onChange={(e) =>
            editMode
              ? setEditedPerson({ ...editedPerson, father: e.target.value })
              : setPerson({ ...person, father: e.target.value })
          }
          className='p-2 border-2 rounded-md border-gray-400'
        />
      </div>

      <button
        onClick={() => {
          updateExistingPerson(editedPerson.index);
        }}
        className='bg-blue-500 text-white p-2 rounded-md'
      >
        Update
      </button>
    </div>
  );
};

export default PersonEditInputGroup;
