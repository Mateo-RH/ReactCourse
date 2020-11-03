import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, i) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.click(i)}
        change={(event) => props.change(event, person.id)}
      />
    );
  });
};

export default persons;
