import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test("header renders with correct text", () => {
  const headerEl = getByTestId("header");

  expect(headerEl).toHaveTextContent("My Counter");
});

test("add button renders the correct text", () => {
  const addEl = getByTestId("add-btn");

  expect(addEl).toHaveTextContent("+");
});

test("input element has a value", () => {
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("changing the input value works", () => {
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, { target: { value: 5 } });
  expect(inputEl.value).toBe("5");
});

test("adding to the count", () => {
  const btnEl = getByTestId("add-btn");
  const countEl = getByTestId("count");

  fireEvent.click(btnEl);
  expect(countEl).toHaveTextContent("1");
});

test("changing the count by adding the input value", () => {
  const countEl = getByTestId("count");
  const inputEl = getByTestId("input");
  const addEl = getByTestId("add-btn");

  fireEvent.change(inputEl, {
    target: { value: 5 },
  });
  fireEvent.click(addEl);

  expect(countEl).toHaveTextContent("5");
});
