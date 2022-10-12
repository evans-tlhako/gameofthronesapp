import { render, screen } from "@testing-library/react";
import Home  from "./Home";

test('renders the landing page', () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent(/House/);
  });

