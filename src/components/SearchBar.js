import React from 'react';
import '../App.css';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchPhrase: this.props.searchPhrase };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    // getting search phrase from input
    var inputVal = document.getElementById("searchInput").value;
    this.setState({searchPhrase: inputVal}); // change to make App.js set state
    alert("You are submitting " + inputVal); // test

    // passing search phrase to search results
  }
  // myChangeHandler = (event) => {
  //   this.setState({username: event.target.value});
  // }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h3>Hello {this.state.searchPhrase}</h3>
      <div class="section-container search-bar">
        <div class="bubble-container">
            <input id='searchInput' type='text' placeholder="Search..."/>
        </div>
      </div>
      </form>
    );
  }
}
