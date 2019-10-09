// Test away!
import React from "react";
import Controls from "./Controls";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("provides buttons to toggle the closed and locked states", () => {
    const { container } = render(<Controls />);
    const buttons = container.querySelectorAll("button");
    expect(buttons).toBeTruthy() && expect(buttons.length).toEqual(2);
  });

  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    let closed, locked, toggleClosed, toggleLocked, rendered;

    beforeEach(() => {
      closed = false;
      locked = false;
      toggleLocked = jest.fn(() => (locked = !locked));
      toggleClosed = jest.fn(() => (closed = !closed));

      rendered = render(
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={toggleLocked}
          toggleClosed={toggleClosed}
        />
      );

      expect(rendered.getByText(/close gate/i)).toBeTruthy();
      expect(
        rendered.getByText(/lock gate/i).getAttribute("disabled")
      ).toBeTruthy();
      fireEvent.click(rendered.getByText(/close gate/i));

      expect(toggleClosed).toHaveBeenCalled();
      expect(rendered.getByText(/open gate/i)).toBeTruthy();

      expect(rendered.getByText(/lock gate/i)).toBeTruthy();
      fireEvent.click(rendered.getByText(/lock gate/i));

      expect(toggleLocked).toHaveBeenCalled();
      rendered
        .getByText(/open gate/i)
        .getAttribute("disabled")
        .toBeTruthy();
      expect(rendered.getByText(/unlock gate/i)).toBeTruthy();
    });
  });
});
