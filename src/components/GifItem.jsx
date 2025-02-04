import React from "react";
import PropTypes from 'prop-types';


const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// Agregamos PropTypes para validar que los props que llegan al componente son correctos
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
