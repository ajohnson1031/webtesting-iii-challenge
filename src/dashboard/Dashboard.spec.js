// Test away
import React from "react";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("shows controls and display", () => {
    const dash = render(<Dashboard />);
    const display = document.getElementsByClassName("display");
    const controls = document.getElementsByClassName("controls");
    expect(display).toBeTruthy();
    expect(controls).toBeTruthy();
  });
});
