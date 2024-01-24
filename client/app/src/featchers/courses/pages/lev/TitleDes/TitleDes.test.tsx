import { render, screen } from "@testing-library/react";
import TitleDes from "./TitleDes";

const mockData = {
  Course: {
    courseName: "Example",
    description: "This is an example course description.",
    lecturer: "John Doe",
  },
};

const mockStars = [<div key="star1">Star 1</div>, <div key="star2">Star 2</div>];



  test("renders the course description", () => {
    render(<TitleDes data={mockData} stars={mockStars} />);
    const descriptionElement = screen.getByText("This is an example course description.");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the lecturer's name", () => {
    render(<TitleDes data={mockData} stars={mockStars} />);
    const lecturerElement = screen.getByText("Example Course");
    expect(lecturerElement).toBeInTheDocument();
  });

  test("renders the stars", () => {
    render(<TitleDes data={mockData} stars={mockStars} />);
    const star1Element = screen.getByText("Star 1");
    const star2Element = screen.getByText("Star 2");
    expect(star1Element).toBeInTheDocument();
    expect(star2Element).toBeInTheDocument();
  });
