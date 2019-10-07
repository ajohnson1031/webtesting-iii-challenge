import React from "react";
import Display from "../display/Display";
import { render } from "@testing-library/react";

describe("Gate initial state.", () => {
  it("defaults to unlocked and open", () => {
    const { getByText, queryByText } = render(<Display />);

    expect(queryByText(/Unlocked/i)).toBeTruthy();
    expect(queryByText(/Open/i)).toBeTruthy();
  });
});
