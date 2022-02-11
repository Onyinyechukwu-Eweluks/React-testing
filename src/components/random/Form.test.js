import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form component", () => {
  test("it renders the form", () => {
    render(<Form />);
  });

  test("if a value can be inputed", () => {
    //arrange
    const { getByTestId } = render(<Form />);
    const nameInput = getByTestId("name");
    const emailInput = getByTestId("email");
    //act
    fireEvent.change(nameInput, { target: { value: "Mary" } });
    fireEvent.change(emailInput, { target: { value: "John" } });
    //assert
    expect(nameInput.value).toBe("Mary");
    expect(emailInput.value).toBe("John");
  });

  test("button text change on click", () => {
    const { getByTestId } = render(<Form />);
    const btn = getByTestId("btn");
    fireEvent.click(btn);

    expect(btn.textContent).toBe("Submitting");
  });
});
