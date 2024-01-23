import React from "react";
import { render, screen } from "@testing-library/react";
import Paper from "./Paper";

describe("Paper Component", () => {
  it("renders with the provided course info", () => {
    const courseInfo = "This is the course information.";
    render(<Paper courseInfo={courseInfo} />);

    // Ensure that the course info is displayed in the component
    const courseInfoElement = screen.getByText(courseInfo);
    expect(courseInfoElement).toBeInTheDocument();

    // Ensure that the textarea is read-only
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toHaveAttribute("readonly");
  });

  it("renders with a border around the textarea", () => {
    const courseInfo = "This is the course information.";
    render(<Paper courseInfo={courseInfo} />);

    // Ensure that the textarea has a pink border
    const textareaElement = screen.getByRole("textbox");
    expect(textareaElement).toHaveStyle("border: 1px solid");
  });

  it("renders with a border around the content", () => {
    const courseInfo = "This is the course information.";
    render(<Paper courseInfo={courseInfo} />);

    const contentDiv = screen.getByTestId("content-div");
    expect(contentDiv).toHaveStyle("border: 2px solid pink");
  });
});
