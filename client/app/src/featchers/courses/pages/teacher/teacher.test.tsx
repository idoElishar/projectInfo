import { render, screen } from "@testing-library/react";

import Teacher from "./teacher";

const mockData = {
    Course: {
      lecturer: "Israel Israeli"
    }
  };

describe("Teacher component tests", () => {
    test("should display the lecturer's name", () => {
      render(<Teacher data={mockData} />);
      const lecturerElement = screen.getByText(/Israel Israeli/i);
      expect(lecturerElement).toBeInTheDocument();
    });
  });
  test("should display additional details", () => {
    render(<Teacher data={mockData} />);
    expect(screen.getByText(/Ph.D. in Computer Science/i)).toBeInTheDocument();
    expect(screen.getByText(/10 years teaching experience/i)).toBeInTheDocument();
  });

  test("should display the teacher's image", () => {
    render(<Teacher data={mockData} />);
    const image = screen.getByAltText("Teacher's Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://oklahoma-council.transforms.svdcdn.com/production/assets/img/Teacher-in-front-of-chalkboard.jpeg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.3059&fp-y=0.2246&dm=1644340079&s=3020830ce187ed5578c03928dde0156b");
  });
