import React from 'react';
import '../styles/List.scss';

const MOVIES_URL = 'http://www.omdbapi.com/?s=titanic&apikey=d885f351'

class List extends React.Component {
  state = {
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      fetch(MOVIES_URL)
        .then(response => response.json())
        .then(data => this.setState({ movies: data }));
    }, 1000);
  }
  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
    <div className="container">
    <input className="search" onChange={this.handleFilter} placeholder="Search Movies..."/>
     <h1>{movies[0]}</h1>
    </div>
    );
  }
}

export default List;