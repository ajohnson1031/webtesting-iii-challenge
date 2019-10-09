// Test away
import React from "react";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Display from "../display/Display";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("shows controls and display", () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText(/open/i)).toBeTruthy();
    expect(getByText(/close gate/i)).toBeTruthy();
  });
});
