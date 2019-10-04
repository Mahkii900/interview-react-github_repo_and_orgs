import React, {Component} from 'react';
import './App.css';
import User from './components/User/User'
import Repos from './components/Repos/Repos'
import Orgs from './components/Orgs/Orgs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='display-box'>
          <User/>
        </div>
        <div className='display-box'>
          <Repos/>
        </div>
        <div className='display-box'>
          <Orgs/>
        </div>
      </div>
    );
  }
}

export default App;
