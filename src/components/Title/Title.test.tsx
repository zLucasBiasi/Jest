import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "./Title";

describe("title module", () => {
  it("should render title in html", () => {
    const { getByRole } = render(<Title>Hello World</Title>);
    const titleText = getByRole("heading", { name: /Hello World/ });
    expect(titleText).toBeInTheDocument();
  });
});
