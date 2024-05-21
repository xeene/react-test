import React from 'react';

const AnimeList = ({anime}) => {

    return (
        
        anime && <ul>
            {
                anime && anime.map((item)=>(
                    <li key = {item.id}>{item.attributes.titles.en}</li>
                ))
            }
           
        </ul>
    );
}

export default AnimeList;