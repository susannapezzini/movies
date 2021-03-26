import React, { useState } from 'react';
import '../styles/MovieItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';


const MovieItem = ({ id, imageUrl, year, title, type }) => {
  const poster = {
    backgroundImage: `url(${imageUrl})`
  }
  const [isShown, setIsShown] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const classNames = isLiked ? 'right liked' : 'right'; 
  return (
      <div className="card" style={poster} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      {isShown && (
        <div className="card__shadow">
        <FontAwesomeIcon icon={faHeart} className={classNames} onClick={() => setIsLiked(!isLiked)}/>
          <div className="card__content">
            <p className="card__detail card__detail-title">{title}</p>
            <p className="card__detail card__detail-year">{year}</p>
          </div>
        </div>
      )}
      </div>
  );
}

export default MovieItem;