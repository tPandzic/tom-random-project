import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Topnav = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className='flex items-center justify-between bg-[#222] w-full p-4'>
      <nav>
        <ul className='flex gap-4'>
          <li
            onClick={() => navigate('/table')}
            className={`${location.pathname === '/table' ? 'bg-blue-400 text-white' : 'bg-white'} py-2 px-4 cursor-pointer rounded-md`}
          >
            Table
          </li>
          <li
            onClick={() => navigate('/people')}
            className={`${location.pathname === '/people' ? 'bg-blue-400 text-white' : 'bg-white'} py-2 px-4 cursor-pointer rounded-md`}
          >
            People
          </li>
          <li
            onClick={() => navigate('/settings')}
            className={`${location.pathname === '/settings' ? 'bg-blue-400 text-white' : 'bg-white'} py-2 px-4 cursor-pointer rounded-md`}
          >
            Settings
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-4'>
        {' '}
        <span className='text-white font-bold text-2xl'>{time}</span>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    </header>
  );
};

export default Topnav;
