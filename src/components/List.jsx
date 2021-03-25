import React from 'react';
import '../styles/List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const MOVIES_URL = 'http://www.omdbapi.com/?s=2021&apikey=d885f351'
const API = 'd885f351'


class List extends React.Component {
  state = {
    movies: [],
    filterText: '', 
    error: ''
  }

  handleFilter = (event) => {
    const text = event.target.value;
    this.setState({ filterText: text });
  }

  handleSearch = (event) => {
    const { filterText, movies} = this.state;
    if (event.key === 'Enter') {
      // console.log(filterText);
      const url = `http://www.omdbapi.com/?s=${this.state.filterText}&apikey=${API}`;
      // console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data', data.Search );
        if (data.Search) {
          this.setState({movies: data.Search});
        } else {
          this.setState({movies: -1 });
          this.setState({error: 'Sorry we could not find what you were looking for, try again!'});
        }
      });
       
    }
  }

  render() {
    const { movies, filterText, error } = this.state;
    console.log(movies, movies.length);
    let movieList = '';  
    if (movies.length === 0) {
      movieList = 
      <div className="empty">
        <FontAwesomeIcon icon={faLightbulb} />
        <p className="empty__claim">Don't know what to search?</p>
        <p>Here's an offer you can't refuse</p>
      </div>; 
    } else if (movies === -1) {
      movieList = 
      <p className="error">{error}</p>
    } else {
      movieList = 
        <div className="movies">
            <h1>Here is your search</h1>
        </div>;
    }
    return (
    <div className="container">
      <input className="search" onChange={this.handleFilter} onKeyDown={this.handleSearch} placeholder="Search Movies..."/>
      {movieList}
    </div>
    
    );
  }
}

export default List;