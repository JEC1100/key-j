import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="songname">Song name</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          id="songname"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Searchbar;
