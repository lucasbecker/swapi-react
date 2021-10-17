import React, { useState, useEffect } from 'react';

import Loading from '../Loading';

import { getReleaseYear } from '../../utils';

export default function Card({peopleDetail: people, filmList: films}){

  const [infos, setInfos] = useState(false);

  useEffect(() => {
    if(people !== undefined){
      if(films.length === people.films.length) {
        setInfos(true);
      }
    }
  }, [people,films]);
    
  return (
    <div className="content">

      {!infos && (<Loading />)}

      {infos && (
        <div className="people">

          <div className="info">
            <span>Nome</span>
            <h1>{people.name}</h1>
          </div>

          <div className="info">
            <span>Ano de Aniversário</span>
            <p>{people.birth_year}</p>
          </div>

          <div className="info">
            <span>Gênero</span> 
            <p>{people.gender}</p>
          </div>

          <div className="info">
            <span>Cor dos Olhos</span> 
            <p>{people.eye_color}</p>
          </div>
          
          <div className="info films">
            <span>Filmes</span>
          
            <ul>
              {films.map((film, index) => {
                const releaseYear = getReleaseYear(film.release_date);
                return (
                  <li key={index}>{film.title} ({releaseYear})</li>
                )
              })}
            </ul>
          </div>
          
        </div>
      )}

    </div>
  );
}