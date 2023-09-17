import React from 'react'

const Teams = ({teams = []}) => {
  return (
    <div className="row">
        {teams.map((item, index) => (
          <div key={index} className="col mb-5">
               <div className="card" style={{minWidth: "200px"}}>
                 <img src={item.image} alt="" />   
                 <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <hr />
                    <p>Localidad: {item.location}</p>
                    <p>Titulos: {item.titles}</p>
                 </div>
            </div>            
        </div>              
        ))}
    </div>
  );
};

export default Teams