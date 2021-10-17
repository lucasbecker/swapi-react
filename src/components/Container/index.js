import React from 'react';

export default function Container({ id, children }){
    
    return (
        <div className="app">
            <div className="container" id={id}>
                { children }
            </div>
        </div>
    );
}