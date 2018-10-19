import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
        {id:'baba', name: 'Max', age: 28},
        {id:'adad', name: 'Manu', age: 29},
        {id:'adsf', name: 'F', age: 26}
    ]
  }

  deletePersonHandler = (personIndex) => {
      // create a copy of your array
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) => {
      // execute for every person in the persons array
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
          persons:persons
      });
  }

  togglePersonsHandler = () => {
    // this keyword always refer to the class
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
              <Persons persons={this.state.persons}
                       clicked={this.deletePersonHandler}
                       changed={this.nameChangedHandler} />
      );
    }

    return (
          <div className={classes.App}>
              <Cockpit showPersons={this.state.showPersons}
                       persons={this.state.persons}
                       clicked={this.togglePersonsHandler}/>
              {persons}
          </div>
    );
  }
}

export default App;
