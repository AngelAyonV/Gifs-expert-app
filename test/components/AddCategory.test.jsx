import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe("pruenas en AddCategory", () => {
  test("debe de camabiar el valor de la caja de texto ", () => {
    // Este test simula el evento de input y verifica que el valor cambia en el input
    render(<AddCategory onNewCategory={() => {}} />);
    //guardamos el input en la variable
    const input = screen.getByRole("textbox");
    //hacemos el evento onchange de la funcion para cambiar el value
    fireEvent.input(input, { target: { value: "Saitama" } });
    //pruebas
    expect(input.value).toBe("Saitama");
    screen.debug();
  });
});
