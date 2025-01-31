import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    // setimages([getGifs(category)]);
    // getGifs(category);
    getImages();
  }, []);

  return {
    //tambien podria dejar simplemente ** images ** ya que si la variable es el mismo
    //nombre no necesito indicarle de nuevo, solo lo dejo asi
    images: images,
    //isLoading:isLoading  ==  isLoading ........ es lo mismo
    isLoading,
  };
};

export default useFetchGifs;
