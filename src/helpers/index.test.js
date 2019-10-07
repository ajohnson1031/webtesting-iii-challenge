import React from "react";
import Display from "../display/Display";
import Dashboard from "../dashboard/Dashboard";

import { render, fireEvent } from "@testing-library/react";

describe("Gate initial state", () => {
  it("defaults to unlocked and open", () => {
    const { queryByText } = render(<Display />);

    expect(queryByText(/Unlocked/i)).toBeTruthy();
    expect(queryByText(/Open/i)).toBeTruthy();
  });
});

describe("Gate standard functionality", () => {
  it("cannot be closed or opened if it is locked", () => {
    const { findByText, getByText } = render(<Dashboard />);
    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/closed/i)).toBeTruthy();

    fireEvent.click(getByText(/lock gate/i));
    expect(getByText(/locked/i)).toBeTruthy();

    fireEvent.click(getByText(/open gate/i));
    expect(getByText(/locked/i) && getByText(/closed/i)).toBeTruthy();
  });
});
