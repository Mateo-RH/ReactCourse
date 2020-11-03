import React from 'react';
import classes from './Person.css';

const person = (props) => {
  console.log('[Person.js] rendering...');
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
