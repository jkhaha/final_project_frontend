<form className="ui form" onSubmit = {this.handleSubmit} >
  <h1>HabitForm</h1>
  <div className="required field">
    <label>Habit Description</label>
    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="ex. workout for 30 minutes a day"/>
  </div>
  <div className="required field">
  <label>Habit Frequency</label>
    <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange} placeholder="ex. every 3 days"/>
  </div>

  <div className=" field">
  <label>Start Date</label>
    <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="MM/DD/YYYY"/>
  </div>

  <div className=" field">
  <label>Cue</label>
    <input type="text" name="cue" value={this.state.cue} onChange={this.handleChange} placeholder="ex. wake up and go to the gym"/>
  </div>
  <div className=" field">
  <label>Routine</label>
    <input type="text" name="routine" value={this.state.routine} onChange={this.handleChange} placeholder="ex. workout for 30 minutes"/>
  </div>
  <div className=" field">
  <label>Reward</label>
    <input type="text" name="reward" value={this.state.reward} onChange={this.handleChange} placeholder="ex. smoothie post workout!"/>
  </div>
  <button className="ui button" type="Submit">Edit This Habit</button>
</form>
