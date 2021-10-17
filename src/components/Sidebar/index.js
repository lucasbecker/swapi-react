import React from 'react';

const logo = 'https://pipedream.com/s.v0/app_mE7hlb/logo/orig';

export default function Sidebar({children}){
    
  return (
    <div className="sidebar">
      <header>
        
        <img 
          src={ logo } 
          className="sw-logo" 
          alt="Star Wars" 
        />
        
        { children }
      
      </header>
    </div>
  );
}