import React from 'react';
import App from './App';

const Ninjas = ({ninjas}) => {
          
    // const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>name : {ninja.name}</div>
    //                 <div>Age : {ninja.age}</div>
    //                 <div>Belt : {ninja.belt}</div>
    //                 <hr />
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
       
    // })
  
    return (
        <div className="ninja-list">
            { 
                
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                             <div>name : {ninja.name}</div>
                             <div>Age : {ninja.age}</div>
                             <div>Belt : {ninja.belt}</div>
                             <hr />
                         </div>
                    ) : null
                })
            }
        </div>
    )
  
}

export default Ninjas;