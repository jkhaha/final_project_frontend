import React, { Component } from 'react';
import NavBar from './NavBar'

class Explanation extends Component {
  render(){
    return(
      <div>
      <NavBar/>
        <div id="explanation">
          <p><b>What is The Compound Effect?</b></p>
          <p><b>What is the purpose of The Compound Effect?</b></p>
          <p><b>How to use The Compound Effect:</b></p>
          <p><b>What are cues, routines, and rewards?</b></p>
        </div>
      </div>
    )
  }
}


export default Explanation
