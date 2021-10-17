import React, { useState, useEffect } from 'react';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import List from '../../components/List';

import api from '../../api';

function Home(){
  const [name , setName] = useState('');
  const [gender, setGender] = useState('all');
  const [data, setData] = useState();

  async function getData(name) {
    await api.get('people/?search=' + name).then(response => {
      setData(response.data)
    });      
  }  

  useEffect( () => {
    getData(name);     
  }, [name])
  

  function handleOnChangeName(event) {
    setName(event.target.value)
  }

  function handleOnChangeGender(event) {
    setGender(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    getData(name);
  }


  return (  
    <Container id="home">

      <Sidebar>
        <form 
          onSubmit={handleSubmit} 
          className="create-orphanage-form"
        >
          
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input 
              id="name" 
              name="name"
              value={name} 
              onChange={handleOnChangeName}
            />
          </div>

          <div className="input-block">
            <label htmlFor="gender">Gênero</label>
            <select 
              name="gender" 
              id="gender" 
              value={gender} 
              onChange={handleOnChangeGender}
            >
              <option value="all">Todos</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>

        </form>

        <p className="instruction">Encontre os personagens da franquia Star Wars pelo nome e/ou gênero utilizando as opções acima. E clique no nome do pensonagem para ver mais detalhes.</p>
      </Sidebar>

      <List data={data} genderFilter={gender} />

    </Container>
  );
}

export default Home;