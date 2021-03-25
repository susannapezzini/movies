import React from 'react';
import '../styles/List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const MOVIES_URL = 'http://www.omdbapi.com/?s=2021&apikey=d885f351'

class List extends React.Component {
  state = {
    movies: [],
    filterText: ''
  }
  componentDidMount() {
    setTimeout(() => {
      fetch(MOVIES_URL)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}));
    }, 1000);
  }

  handleFilter = (event) => {
    const text = event.target.value;
    this.setState({ filterText: text });
    console.log(this.state.filterText);
  }

  render() {
    const { movies, filterText } = this.state;
    let movieList = '';
    if (filterText === '') {
      movieList = 
      <div className="empty">
        {/* <i class="fas fa-lightbulb"></i> */}
        <FontAwesomeIcon icon={faLightbulb} />
        {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
        <p className="empty__claim">Don't know what to search?</p>
        <p>Here's an offer you can't refuse</p>
      </div>
    } else {
      movieList = <div>{filterText}</div>
    }
    return (
    <div className="container">
      <input className="search" onChange={this.handleFilter} placeholder="Search Movies..."/>
      
        {movieList}
  
    </div>
    
    );
  }
}

export default List;