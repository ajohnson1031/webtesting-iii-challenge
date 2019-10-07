// Test away
import React from "react";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
