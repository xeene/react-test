import React from 'react';

const MoviesCard = ({movie}) => {
    return (
        movie && <div>
            <h3>{movie.title}</h3>
            <img src={movie.banner} alt=""/>
            <p>{movie.desc}</p>
        </div>
    );
};

export default MoviesCard;