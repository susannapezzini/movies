import React, { useState } from 'react';
import '../styles/MovieItem.scss';


const MovieItem = ({ id, imageUrl, year, title, type, classNames }) => {
  const poster = {
    backgroundImage: `url(${imageUrl})`
  }
  const [isShown, setIsShown] = useState(false);
  return (
      <div className="card" style={poster} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      {isShown && (
        <div className="card__shadow">
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