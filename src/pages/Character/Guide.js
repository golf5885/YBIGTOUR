import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Guide.css';

function Guide({ name, style, img_url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Map page with the selected character
    navigate(`/Map/${name}`);
  };

  return (
    <div className="one_guide" onClick={handleClick}>
      <img src={img_url} alt={name} />
      <p className='guide_name'>{name}</p>
      <p>{style}</p>
    </div>
  );
}

export default Guide;
