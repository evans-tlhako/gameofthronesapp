import { render, screen } from "@testing-library/react";
import HouseDetails  from "./HouseDetails";

test('renders the landing page', () => {
    render(<HouseDetails />);
    expect(screen.getByRole("heading")).toHaveTextContent(/House Details/);
  });
