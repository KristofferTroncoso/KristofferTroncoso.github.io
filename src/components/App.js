import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import ProjectsList from './ProjectsList';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTag: '',
      filteredLength: '',
      projects: []
    };
  }

  componentDidMount() {
    fetch('./projects.json')
    .then(res => res.json())
    .then(data => {
      this.setState({projects: data.projects})
    })
    .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ filterTag: e.target.value }, () => console.log(this.state.filterTag));
  }

  changeFilterTag = tagToFilter => {
    this.setState({ filterTag: tagToFilter });
  }

  clearFilterTag = e => {
    this.setState({ filterTag: ''});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <h2 className="wrapper">Projects:</h2>
        <SearchForm handleChange={this.handleChange} projects={this.state.projects} filterTag={this.state.filterTag} clearFilterTag={this.clearFilterTag} />
        <ProjectsList projects={this.state.projects} filterTag={this.state.filterTag} changeFilterTag={this.changeFilterTag} />
      </div>
    );
  }
}

export default App;