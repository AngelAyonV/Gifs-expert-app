import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (newCategory) => {
    const categoryLower = newCategory.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios

    // Verificar si ya existe (comparando en minúsculas)
    if (categories.some((category) => category.toLowerCase() === categoryLower))
      return alert("Categoria duplicada");

    setCategories([newCategory, ...categories]); // Agregar si no existe
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      <h2>Primera app</h2>
      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* listado de gif */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/* gif item */}
    </>
  );
};

export default GifExpertApp;
