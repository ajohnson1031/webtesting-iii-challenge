// Test away!
import React from "react";
import Display from "./Display";
import renderer from "react-test-renderer";
import { animationFrame } from "rxjs/internal/scheduler/animationFrame";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
