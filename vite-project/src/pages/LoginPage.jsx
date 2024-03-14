import { useState } from 'react';
import toast from 'react-hot-toast';

const LoginPage = ({ setIsLoggedIn, setIsLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const REAL_PASSWORD = '123456';
  const REAL_EMAIL = 'email@gmail.com';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === REAL_EMAIL && password === REAL_PASSWORD) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsLoggedIn(true);
      }, 3000);
    } else {
      toast.error('Wrong username or password, try again!');
    }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-300'>
      <div className='flex justify-center items-center p-8 h-3/4 w-1/3 bg-red-200'>
        <div className='flex flex-col items-center justify-center bg-lime-400 w-full h-full p-4'>
          <h1 className='text-4xl font-bold text-center uppercase mb-4'>
            Login
          </h1>
          <form className='flex flex-col w-full gap-4 mt-4'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
              className='p-2 border-2 border-gray-400'
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className='p-2 border-2 border-gray-400'
            />
            <button
              onClick={(e) => handleFormSubmit(e)}
              className='bg-blue-500 text-white p-2 rounded-md'
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
