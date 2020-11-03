import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 20 },
      { id: 'qwe', name: 'Manu', age: 21 },
      { id: 'zxc', name: 'Alex', age: 22 },
    ],
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMout');
  }

  togglePersonsHanlder = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  render() {
    console.log('[App.js] render');
    let persons = this.state.showPersons ? (
      <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        change={this.changeNameHandler}
      />
    ) : null;

    return (
      // React.createElement('div',{ className: 'App' },React.createElement('h1', null, "Hi, I'm a React App") )
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHanlder}
        />
        {persons}
      </div>
    );
  }
}

export default App;

// Updating state inmutably
// Use key for indexing lists
// Render conditioal content troguht variables
// css modules -> separate css from js but allows you to scope styles
