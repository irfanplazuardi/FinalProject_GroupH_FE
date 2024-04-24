import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "./login";

describe("Login Component", () => {
  test("renders login form correctly", async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Assert presence of email and password fields
    expect(getByLabelText("Username/Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();

    // Fill in the form
    fireEvent.change(getByLabelText("Username/Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.submit(getByText("Login"));

    // Wait for asynchronous validation to complete
    await waitFor(() => {
      // Assert that the error message is not present
      expect(queryByText("Username or email doesn't exist.")).toBeNull();
      expect(queryByText("Incorrect password.")).toBeNull();
    });
  });
});
