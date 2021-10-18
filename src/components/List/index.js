import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';
import NotFound from '../NotFound';

import {getIdFromUrl} from '../../utils';

export default function List({data, genderFilter: gender}){
  const [list, setList] = useState([]);

  useEffect(  () => {
    if(data !== undefined) {
      data.count > 0 
        ? setList(data.results)
        : setList([]);
    } 
  }, [data]);
    
  return (
    <div className="content">
      <ul className="list">
        
        {(list.length === 0 && data === undefined) && (<Loading />)}

        {(data !== undefined && data.count === 0 ) && (<NotFound />)}

        {list.map((item, index) => {
          const itemId = getIdFromUrl(item.url);

          if(gender !== 'all' && gender === item.gender) {
            return (
              <li key={index} >
                <Link to={`/people/${itemId}`}>
                  {item.name}
                </Link>
              </li>
            )
          } else if(gender === 'all') {
            return (
              <li key={index} > 
                <Link to={`/people/${itemId}`}>
                  {item.name}
                </Link>
              </li>
            )
          } else {
            return false;
          }
          
        })}
        
      </ul>
    </div>
  );
}