import React from 'react';

const AnimeList = ({anime}) => {

    return (
        
        anime && <ul className = "movie-list">
            {
                anime && anime.map((item)=>(
                    <li key = {item.id} className = "card">
                         <img src={item.attributes.posterImage.small} />
                         <div className='movie-info-block'>
                            <div className='movie-title'><b>{item.attributes.titles.en_jp}</b></div>
                            <div className='movie-info'>
                                <div className='movie-release'><i>Release Date:</i> {item.attributes.startDate}</div>
                                <div className='movie-eposides'><i>Episodes:</i> {item.attributes.episodeCount}</div>
                            </div>
                         </div>
                    </li>
                ))
            }
           
        </ul>
    );
}

export default AnimeList;


// 