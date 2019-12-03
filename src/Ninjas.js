import React from 'react';
import App from './App';

const Ninjas = ({ninjas}) => {
          
    // const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>name : {ninja.name}</div>
                <div>Age : {ninja.age}</div>
                <div>Belt : {ninja.belt}</div>
                <hr />
            </div>
            
        )
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
  
}

export default Ninjas;