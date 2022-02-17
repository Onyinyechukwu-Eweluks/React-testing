import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "./SignUpForm";

beforeEach(() => {
  render(<SignUpForm />);
});
afterEach(() => {
  cleanup();
});

test("input should be initially empty", () => {
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText("password");
  const confirmPasswordInputEl =
    screen.getByPlaceholderText("confirm-password");

  expect(emailInputEl.value).toBe("");
  expect(passwordInputEl.value).toBe("");
  expect(confirmPasswordInputEl.value).toBe("");
});

test("able to fill in the form", () => {
  //render(<SignUpForm />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  userEvent.type(emailInputEl, "test@gmail.com");
  expect(emailInputEl.value).toBe("test@gmail.com");
});

test("email error message shows appropriately", () => {
  //render(<SignUpForm />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);

  const buttonEl = screen.getByRole("button");
  userEvent.type(emailInputEl, "testgmailcom");
  //userEvent.click(buttonEl);
  fireEvent.submit(buttonEl);
  const errorEl = screen.queryByText("invalid email");

  expect(errorEl).toBeInTheDocument();
});

test("password error message shows appropriately", () => {
  //render(<SignUpForm />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  const passwordInputEl = screen.getByPlaceholderText("password");

  const buttonEl = screen.getByRole("button");
  userEvent.type(emailInputEl, "test@gmail.com");
  userEvent.type(passwordInputEl, "1234");
  //userEvent.click(buttonEl);
  fireEvent.submit(buttonEl);
  const errorEl = screen.queryByText("password must not be less than 8");

  expect(errorEl).toBeInTheDocument();
});
