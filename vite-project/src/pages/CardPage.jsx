import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import PersonEditInputGroup from './PersonEditInputGroup';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  /*   width: 400, */
  bgcolor: 'background.paper',
  border: '2px solid blue',
  boxShadow: 24,
  p: 3,
  borderRadius: '10px',
};

const CardPage = ({
  person,
  setPerson,
  setSelectedPersonIndex,
  selectedPersonIndex,
  removeExistingPerson,
  updateExistingPerson,
  editedPerson,
  setEditedPerson,
  editMode,
  setEditMode,
}) => {
  const [openEditSidebar, setOpenEditSidebar] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpenDeleteModal(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpenDeleteModal(false);
  };

  const createdAt = new Date(person.createdAt).toDateString();

  return (
    <div
      onClick={() => {
        setSelectedPersonIndex(person.index);
        setOpenEditSidebar(true);
        setEditMode(true);
        setEditedPerson({
          ...person,
        });
      }}
      key={person.index}
      className={`bg-white flex flex-col p-2 
     rounded-md border-4 
      hover:border-blue-500 ${
        person.index === selectedPersonIndex
          ? 'border-blue-500'
          : 'border-gray-400'
      } `}
    >
      {/* Header */}
      <div className='flex items-center gap-3'>
        <span className='w-fit bg-blue-500 rounded-3xl p-2 text-white'>
          {`${person.firstName.charAt(0)}.${person.lastName.charAt(0)}.`}
        </span>

        <div>
          <div className='text-lg font-bold'>
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

      <hr className='my-2' />

      {/* BODY */}
      <div className='flex flex-col'>
        {' '}
        <span>Occupation: {person.occupation}</span>
        <span>Height: {person.height} cm</span>
        <span>Weight: {person.weight} kg</span>
        <span>Mother: {person.mother}</span>
        <span>Father: {person.father}</span>
        <span>Status: {person.status}</span>
        <span>Created At: {createdAt}</span>
        <span>Index: {person.index}</span>
      </div>

      <hr className='mt-auto' />

      {/* FOOTER */}
      <div className='flex w-full items-center gap-3 mt-auto'>
        <button
          className='bg-blue-500 text-white p-2 rounded-md w-1/2'
          onClick={handleOpen}
        >
          Remove
        </button>
        <button
          className='border-blue-500 p-2 rounded-md text-blue-500 w-1/2'
          onClick={() => setOpenEditSidebar(true)}
        >
          Edit
        </button>
      </div>

      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box onClick={(e) => e.stopPropagation()} sx={style}>
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-2xl'>Confirm delete</h2>

            <p>
              Are you sure you want to delete this person? This action is
              irreversible.
            </p>

            <hr />
            <div className='flex justify-between w-full gap-3'>
              <button
                onClick={handleClose}
                className='bg-blue-500 text-white p-2 rounded-md w-1/4'
              >
                No
              </button>{' '}
              <button
                onClick={() => {
                  removeExistingPerson(person.index);
                  setOpenDeleteModal(false);
                }}
                className='bg-red-500 text-white p-2 rounded-md w-1/4'
              >
                Yes
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Drawer
        open={openEditSidebar}
        anchor='right'
        onClose={() => {
          console.log('Drawer closed');
          setOpenEditSidebar(false);
          setEditMode(false);
        }}
      >
        <PersonEditInputGroup
          editMode={editMode}
          person={person}
          setPerson={setPerson}
          setOpenEditSidebar={setOpenEditSidebar}
          updateExistingPerson={updateExistingPerson}
          editedPerson={editedPerson}
          setEditedPerson={setEditedPerson}
        />
      </Drawer>
    </div>
  );
};

export default CardPage;
