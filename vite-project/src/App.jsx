import { useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
import LoginPage from './pages/LoginPage';
import Pages from './pages/Pages';
import Topnav from './pages/Topnav';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('people'));
    if (items) {
      setPeople(items);
    }
  }, []);

  console.log(people);

  return (
    <>
      {!isLoggedIn && (
        <LoginPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {isLoading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded-md'>
            <SpinnerCircular size={72} />
          </div>
        </div>
      )}

      {isLoggedIn && (
        <div className='bg-gray-300 flex flex-col h-screen w-screen'>
          <Topnav setIsLoggedIn={setIsLoggedIn} />

          <main className='w-full flex-1 p-4'>
            <Pages people={people} setPeople={setPeople} />
          </main>
        </div>
      )}
      <Toaster />
    </>
  );
}

export default App;
