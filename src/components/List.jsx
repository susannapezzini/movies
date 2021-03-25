import React from 'react';
import '../styles/List.scss';
import MovieItem from './MovieItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const MOVIES_URL = 'http://www.omdbapi.com/?s=2021&apikey=d885f351';
const API = 'd885f351';


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
    // const classNames = selected ? 'card__shadow' : 'hidden'
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
      movieList = movies.map(movie => {
        return (
          <MovieItem
          key={movie.id}
          id={movie.id}
          imageUrl={movie.Poster}
          year={movie.Year}
          title={movie.Title}
          type={movie.Type}
          />
        )
      });  
    }
    return (
    <div className="container">
      <input className="search" onChange={this.handleFilter} onKeyDown={this.handleSearch} placeholder="Search Movies..."/>
      <div className="movies">
        {movieList}
      </div>
    </div>
    
    );
  }
}

export default List;

// let flatList = filteredFlats.map(flat => {
//   return (
//     <Flat
//       onSelect={this.selectFlat}
//       selected={selected === flat.id}
//       key={flat.id}
//       id={flat.id}
//       imageUrl={flat.image_url}
//       name={flat.name}
//       price={flat.price} />
//   )
// });