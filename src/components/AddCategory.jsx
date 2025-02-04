import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
    console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 4) {
      return alert("La categoría debe tener al menos 5 caracteres");
    }
    console.log(inputValue);
    //llama a la funcion setcategories para actualizar el array y volverlo a renderizar
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue(" ");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
