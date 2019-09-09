import React, {Component} from 'react';
import Person from "./Person/Person"
import logo from './logo.svg';
import './App.css';
class  App extends Component {
  //render
  //only required method in react, can returns a no of things, react will call this method to
  //render some html codes, every react component must render some code to the webpage
  render(){
    return (
    <div className="App">
      <h1>This is react app</h1>
      <Person name  = "Mike" age = "25"/>
      <Person name = "Maria" age = "24"/>
      <Person name = "John" age = "26"/>
    </div>
    
  );
  }
}

export default App;
