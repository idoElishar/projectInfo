import { render, screen } from "@testing-library/react";
import Statistic from "./Graph";
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;

describe("Statistic Component", () => {
  test("renders the title text", () => {
    render(<Statistic />);
    const titleElement = screen.getByText(/Distribution of student grades/i);
    expect(titleElement).toBeInTheDocument();
  });
});
