import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = props.showPersons ? classes.Red : '';
  const styles = [];
  if (props.persons.length <= 2) styles.push(classes.red);
  if (props.persons.length <= 1) styles.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={styles.join(' ')}>This is really working.</p>
      <button className={btnClass} onClick={props.click}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
