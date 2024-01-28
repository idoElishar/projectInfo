import { render, screen } from "@testing-library/react";
import StudentsTable from "./Table";

describe("StudentsTable Component", () => {
    test("renders the table", () => {
      render(<StudentsTable />);
      const tableElement = screen.getByRole("table");
      expect(tableElement).toBeInTheDocument();
    });
  
    test("renders the table header 'Students in course'", () => {
      render(<StudentsTable />);
      const headerElement = screen.getByText("Students in course");
      expect(headerElement).toBeInTheDocument();
    });
  
    // test("renders at least one student name in the table", () => {
    //   render(<StudentsTable />);
    //   const studentName = screen.getByText("Bibi David", { exact: false }); // שימוש ב `{ exact: false }` כדי לא לדרוש התאמה מדויקת
    //   expect(studentName).toBeInTheDocument();
    // });

});
