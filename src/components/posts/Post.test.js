import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Post from "./Post";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom/extend-expect";

const mockPostData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

const mockNewPostData = {
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
};

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPostData));
  }),

  rest.post("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    const post = {
      title: req.body.title,
      body: req.body.body,
    };

    return res(ctx.status(200), ctx.json(post));
  }),
];

describe("Post component", () => {
  const server = setupServer(...handlers);

  //telling the server to start listening
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  test("the data fetched is rendered", async () => {
    render(<Post />);
    await waitFor(() =>
      expect(screen.getByText("qui est esse")).toBeInTheDocument()
    );
  });
});
// describe("Posts", () => {
//   //mock the api data
//   beforeEach(() => {
//     global.fetch = jest.fn((url, options) => {
//       if (options?.method === "POST") {
//         return Promise.resolve({
//           json: () => Promise.resolve(mockNewPostData),
//         });
//       } else {
//         return Promise.resolve({
//           json: () => Promise.resolve(mockPostData),
//         });
//       }
//     });
//   });

//   test("fetch and renders post data", async () => {
//     render(<Post />);
//     expect(window.fetch).toHaveBeenCalledWith(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     await waitFor(() =>
//       expect(screen.getByText("qui est esse")).toBeInTheDocument()
//     );
//   });

//   test("if each post title is rendered", async () => {
//     //dynamic testing
//     render(<Post />);
//     await waitFor(() =>
//       mockPostData.forEach((post) =>
//         expect(screen.getByText(post.title)).toBeInTheDocument()
//       )
//     );
//   });

//   test("Add New Post button to display the form", async () => {
//     render(<Post />);
//     await waitFor(() => fireEvent.click(screen.getByText("Add New Post")));
//     expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
//   });

//   test("Close button removes the form", async () => {
//     render(<Post />);
//     await waitFor(() => fireEvent.click(screen.getByText("Add New Post")));
//     fireEvent.click(screen.getByText("Close"));
//     expect(screen.queryByPlaceholderText("Title")).not.toBeInTheDocument();
//   });

//   test("submit button posts the form value", async () => {
//     render(<Post />);
//     //open the form
//     await waitFor(() => fireEvent.click(screen.getByText(/add new post/i)));
//     const titleEl = screen.getByPlaceholderText(/title/i);
//     const bodyEl = screen.getByPlaceholderText(/body/i);
//     const submitButton = screen.getByText(/submit/i);

//     //fill in the form
//     fireEvent.change(titleEl, { target: { value: mockNewPostData.title } });
//     fireEvent.change(bodyEl, { target: { value: mockNewPostData.body } });

//     //submit
//     await waitFor(() => fireEvent.click(submitButton));

//     expect(screen.getByText(mockNewPostData.title)).toBeInTheDocument();
//     expect(screen.getByText(/et iusto sed quo iure/)).toBeInTheDocument();
//   });
// });
