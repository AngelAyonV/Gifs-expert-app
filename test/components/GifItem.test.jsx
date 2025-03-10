import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("pruebas en GifItem.jsx", () => {
  const title = "Saitama";
  const url = "https://github.com/";
  test("Debe de hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    const p = screen.getByText(title);
    expect(p).toBeTruthy();
  });
});
