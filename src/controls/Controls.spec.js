// Test away!
import React from "react";
import Controls from "./Controls";
import renderer from "react-test-renderer";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
