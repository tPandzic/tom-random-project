import { useState } from 'react';
import toast from 'react-hot-toast';
import CardPage from './CardPage';
import PersonInputGroup from './PersonInputGroup';
import PersonButtonGroup from './PersonButtonGroup';

const CardsPage = ({ people, setPeople }) => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    occupation: '',
    placeOfBirth: '',
    status: '',
    height: undefined,
    weight: undefined,
    mother: '',
    father: '',
  });

  const [editedPerson, setEditedPerson] = useState({});

  const createNewPerson = () => {
    if (
      person.firstName === '' ||
      person.lastName === '' ||
      person.dateOfBirth === ''
    )
      return toast.error(
        'Make sure that first name, last name and date of birth are filled in!'
      );
    const newPerson = {
      index: people.length + 1,
      createdAt: new Date().toUTCString(),
      ...person,
    };
    setPeople([...people, newPerson]);
    setSelectedPersonIndex(null);
    toast.success(`${person.firstName} ${person.lastName} has been created!`);
  };

  const updateExistingPerson = (index) => {
    for (let i = 0; i < people.length; i++) {
      if (people[i].index === index) {
        if (editMode) {
          people[i] = editedPerson;
        } else {
          people[i] = person;
        }

        setPeople([...people]);
        toast.success(
          `${editedPerson?.firstName} ${editedPerson?.lastName} has been updated!`
        );
      }
    }
    setSelectedPersonIndex(null);
  };

  const removeExistingPerson = (index) => {
    const newPeople = people.filter((person) => person.index !== index);
    setPeople(newPeople);
  };

  const handleStoringToLocalStorage = () => {
    localStorage.setItem('people', JSON.stringify(people));
  };

  return (
    <div>
      <div className='flex flex-col mb-4'>
        <h1>Create a New Person</h1>
        <div className='grid grid-cols-6 gap-3 mt-3'>
          <PersonInputGroup person={person} setPerson={setPerson} />

          <PersonButtonGroup
            person={person}
            selectedPersonIndex={selectedPersonIndex}
            updateExistingPerson={updateExistingPerson}
            createNewPerson={createNewPerson}
            handleStoringToLocalStorage={handleStoringToLocalStorage}
          />
        </div>
      </div>

      <div>
        <h1>Existing People</h1>

        <div className='grid grid-cols-6 gap-4 mt-3'>
          {people.map((person) => {
            return (
              <CardPage
                key={person.index}
                person={person}
                selectedPersonIndex={selectedPersonIndex}
                setSelectedPersonIndex={setSelectedPersonIndex}
                setPerson={setPerson}
                removeExistingPerson={removeExistingPerson}
                updateExistingPerson={updateExistingPerson}
                editedPerson={editedPerson}
                setEditedPerson={setEditedPerson}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
