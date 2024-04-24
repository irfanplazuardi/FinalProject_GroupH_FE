import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CreateAccount from "./create_account";

// Mock functions to simulate API calls
jest.mock("./create_account", () => ({
  checkUsernameExists: jest.fn(),
  checkEmailExists: jest.fn(),
}));

describe("CreateAccount", () => {
  it("submits the form with valid data", async () => {
    // Arrange
    const { getByLabelText, getByText } = render(<CreateAccount />);
    const usernameInput = getByLabelText("Username");
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("Create Account");

    // Act
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.submit(submitButton);

    // Assert
    await waitFor(() => {
      expect(checkUsernameExists).toHaveBeenCalledWith("testuser");
      expect(checkEmailExists).toHaveBeenCalledWith("test@example.com");
      // Add more assertions as needed for successful form submission
    });
  });

  // Add more test cases for edge cases and error handling if needed
});
