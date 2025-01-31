import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {/* hacemos desesctructuracion de images jalando solo el id y el title */}
        {images.map((image) => (
          // title={image.title} url={image.url} ES LO MISMO QUE == {...image}
          // se le llama esparcir todas las propiedades que tiene image para que
          // se envien como props
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
