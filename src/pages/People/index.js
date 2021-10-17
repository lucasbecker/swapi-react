import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

import api from '../../api';
import { getIdFromUrl } from '../../utils';


function People(){
  const { id } = useParams();

  const [people, setPeople] = useState();
  const [films, setFilms] = useState([]);
  
  async function getPeope(id) {
    await api
      .get(`people/${id}`)
      .then( response => (setPeople(response.data)));
  }

  useEffect( () => {
    getPeope(id);
  }, [id]);


  async function getFilm(id) {
    await api
      .get(`films/${id}`)
      .then(response => setFilms(films => [...films, response.data]));
  }

  useEffect( () => {
    if(people) {
      const peopleFilms = people.films;

      peopleFilms.forEach( film => {
        const filmId = getIdFromUrl(film);
        getFilm(filmId);
      });
    
    }
  }, [people]);
  
  return (  
    <Container>

      <Sidebar>
        <Link
          className="button" 
          to='/' 
        >
          Voltar
        </Link>
      </Sidebar>
    
      <Card 
        peopleDetail={people} 
        filmList={films} 
      />
    </Container>  
  );
}

export default People;