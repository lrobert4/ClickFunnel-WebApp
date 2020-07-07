import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Mask from './images/coppermask.jpg'


function App() {
  return (
      
      <div className="ui container">
        <h1 className="ui center aligned container">Welcome!!</h1>
        <div className="ui center aligned container">
          <img className="mask-img" src={Mask} alt="Anti-Bacterial Covid-19 Mask"></img>
        </div>
        <p className="ui center aligned container">Purpose: Explain what user gets out of completing questionnaire.</p>
        <div className="ui center aligned container">
        <Link to="/questions"><Button class="ui huge button">Continue</Button></Link>
        </div>
      </div>
      
      
    
  );
}

export default App;
