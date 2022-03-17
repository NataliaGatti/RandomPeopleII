import React from 'react';

const Card = ({persona}) => {
  return (
    <div className="card">
      <div className="picture-card">
        <img src={persona.picture.large} alt="photo" />
      </div>
      <div className='info-card'>
        <h2>{persona.name.first} {persona.name.last}</h2>
        <p>Vive en {persona.location.city}, {persona.location.state}, en el país de {persona.location.coutry} y tiene {persona.dob.age} años. Su teléfono es {persona.phone} y su correo es {persona.email} </p>
      </div>
    </div>
  );
}

export default Card;