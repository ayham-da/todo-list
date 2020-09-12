import React from 'react';
import LisetAdd from './ListeAdd'


function Liste({sayApp}){



  return (
        <div>
            <ul>
            {sayApp.map((val,num) =>
            <LisetAdd key={num} val={val}
            />)
                }
            </ul>


        </div>
  );
}

export default Liste;
