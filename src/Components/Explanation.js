import React, { Component } from 'react';
import NavBar from './NavBar'

class Explanation extends Component {
  render(){
    return(
      <div>
      <NavBar/>
        <div id="explanation">
          <p id="explanation_tag"><b>What is the purpose of The Compound Effect?</b></p>
          <p>The Compound Effect is a habit tracker that helps you set habits, track how well you are doing with the habit,
          and adjust habits as necessary.</p>
          <p id="explanation_tag"><b>How to use The Compound Effect:</b></p>
          <p>Click on "Create A Habit" and the go to your Dashboard to see your habit! (tracking functionality will be in the next version)</p>
          <p id="explanation_tag"><b>What are cues, routines, and rewards?</b></p>
          <p>A <i>cue</i> is a trigger that tells your brain which habit or behavior to do next.</p>
          <p>The <i>routine</i> is the habit you want to start, such as working out, or journalling every day.</p>
          <p>The <i>reward</i> is what helps your brain determine whether this particular habit is worth remebering next time.</p>
          <p>These three components make up the habit loop. You might find that your reward is not strong enough, or that your cue did not trigger the habit routine you wanted. Once you determine what three components help your habit stick,
          developing the habit will become easier!</p>
        </div>
      </div>
    )
  }
}


export default Explanation
