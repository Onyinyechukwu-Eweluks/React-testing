import { fireEvent, render, screen } from "@testing-library/react";
import AddNewPost from "./AddNewPost";

describe("AddNewPost button", () => {
  test("onclick function is called", () => {
    const onclickBtn = jest.fn();
    render(<AddNewPost onclick={onclickBtn} />);
    const addButtonEl = screen.getByText("Add New Post");
    fireEvent.click(addButtonEl);

    expect(onclickBtn).toHaveBeenCalled();
  });
});
