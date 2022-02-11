import { RandomFc, filterByTerm } from "./RandomFc";

test("function works", () => {
  const func = RandomFc(2);
  expect(func).toBe(5);
});

describe("Filter function", () => {
  test("Function should filter by searchTerm (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm("link", input)).toEqual(output);
    expect(filterByTerm("LINK", input)).toEqual(output);
  });
});
