import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Question() {
  return (
    <div className="ui container">
      <h1 className="ui center aligned container">Question</h1>
      <p className="ui center aligned container">Are you 18 years or older?</p>
      <div className="ui center aligned container">
      <Button class="ui huge button">No, I'm under 18 </Button>
      <Link to="/share"><Button class="ui huge button">Yes, I'm older than 18 </Button></Link>
      </div>
    </div>
  );
}

export default Question;
