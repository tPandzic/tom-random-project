import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TablePage from './TablePage';
import UserSettings from './UserSettings';
import CardsPage from './CardsPage';

const Pages = ({ people, setPeople }) => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/table' element={<TablePage people={people} />} />
        <Route
          path='/people'
          element={<CardsPage people={people} setPeople={setPeople} />}
        />
        <Route path='/settings' element={<UserSettings />} />
      </Routes>
    </React.Fragment>
  );
};

export default Pages;
