import { useEffect } from 'react';
import { useState } from 'react';

const UserSettings = () => {
  const [userDetails, setUserDetails] = useState({});

  const handleUserDetailsChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLocalStorageSubmit = () => {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  };

  useEffect(() => {
    const userDetailsFromLocalStorage = JSON.parse(
      localStorage.getItem('userDetails')
    );

    if (userDetailsFromLocalStorage === null) {
      setUserDetails({
        firstName: 'Tomislav',
        lastName: 'Pandžić',
        email: 'email@gmail.com',
        dob: '1991-01-13',
      });
    } else {
      setUserDetails(userDetailsFromLocalStorage);
    }
  }, []);

  return (
    <div className='p-2 w-full h-full bg-white'>
      <div className='flex gap-4 flex-col'>
        <h1 className='text-2xl font-bold uppercase'>User Settings</h1>

        <div className='flex items-center gap-4'>
          {' '}
          <label className='w-[100px] text-[#BDBDBD]' htmlFor='firstName'>
            {' '}
            First Name:
          </label>
          <input
            type='text'
            id='firstName'
            placeholder='Your name...'
            value={userDetails.firstName}
            onChange={handleUserDetailsChange}
            className='p-1 border-2 rounded-md border-gray-400 w-fit'
          />
        </div>

        <div className='flex items-center gap-4'>
          {' '}
          <label className='w-[100px] text-[#BDBDBD]' htmlFor='lastName'>
            {' '}
            Last Name:
          </label>
          <input
            type='text'
            id='lastName'
            value={userDetails.lastName}
            onChange={handleUserDetailsChange}
            placeholder='Your last name...'
            className='p-1 border-2 rounded-md border-gray-400 w-fit'
          />
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-[100px] text-[#BDBDBD]' htmlFor='email'>
            {' '}
            Email:
          </label>

          <input
            type='email'
            id='email'
            value={userDetails.email}
            onChange={handleUserDetailsChange}
            placeholder='Your email...'
            className='p-1 border-2 rounded-md border-gray-400 w-fit'
          />
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-[100px] text-[#BDBDBD]' htmlFor='dob'>
            {' '}
            Date of Birth:
          </label>

          <input
            type='date'
            id='dob'
            value={userDetails.dob}
            onChange={handleUserDetailsChange}
            placeholder='Your date of birth...'
            className='p-1 border-2 rounded-md border-gray-400 w-fit'
          />
        </div>

        <button
          className='w-fit bg-blue-500 text-white p-2 rounded-md'
          onClick={() => {
            handleLocalStorageSubmit();
          }}
        >
          Submit Changes
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
