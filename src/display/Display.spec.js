// Test away!
import React, { useState } from "react";
import Display from "./Display";
import Dashboard from "../dashboard/Dashboard";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/open/i)).toBeTruthy();
    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/closed/i)).toBeTruthy();
    fireEvent.click(getByText(/lock gate/i));
    expect(getByText(/locked/i)).toBeTruthy();
  });

  it("displays 'Closed' if the closed prop is true, when closed use the red-led class", () => {
    let closed = true;

    const { getByText } = render(<Display closed={closed} />);
    expect(getByText(/closed/i)).toBeTruthy();
    expect(getByText(/closed/i).className.includes("red-led")).toBeTruthy();
  });

  it("displays 'Open' if the closed prop is false, when unlocked use the green-led class", () => {
    let closed = false;

    const { getByText } = render(<Display closed={closed} />);
    expect(getByText(/open/i)).toBeTruthy();
    expect(getByText(/open/i).className.includes("green-led")).toBeTruthy();
  });

  it("displays 'Locked' if the locked prop is true, when closed use the red-led class", () => {
    let locked = true;

    const { getByText } = render(<Display locked={locked} />);
    expect(getByText(/locked/i)).toBeTruthy();
    expect(getByText(/locked/i).className.includes("red-led")).toBeTruthy();
  });

  it("displays 'Unlocked' if the locked prop is false, when unlocked use the green-led class", () => {
    let locked = false;

    const { getByText } = render(<Display locked={locked} />);
    expect(getByText(/unlocked/i)).toBeTruthy();
    expect(getByText(/unlocked/i).className.includes("green-led")).toBeTruthy();
  });
});
