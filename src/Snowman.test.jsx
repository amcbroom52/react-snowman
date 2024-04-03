import { render, fireEvent, screen } from "@testing-library/react";
import {expect, it, test} from "vitest";
import Snowman from "./Snowman";

it("Doesn't show buttons once player loses", function () {
  const {container} = render(<Snowman words={["test"]}/>);

  const aButton = container.querySelector("[value = a]");
  const bButton = container.querySelector("[value = b]");
  const cButton = container.querySelector("[value = c]");
  const dButton = container.querySelector("[value = d]");
  const fButton = container.querySelector("[value = f]");
  const gButton = container.querySelector("[value = g]");

  fireEvent.click(aButton);
  fireEvent.click(bButton);
  fireEvent.click(cButton);
  fireEvent.click(dButton);
  fireEvent.click(fButton);
  fireEvent.click(gButton);

  const loseElement = screen.getByText("You Lose!");

  expect(aButton).not.toBeInTheDocument();
  expect(loseElement).toBeInTheDocument();
});

it("Matches losing snapshot", function () {
  const {container} = render(<Snowman words={["test"]}/>);

  const aButton = container.querySelector("[value = a]");
  const bButton = container.querySelector("[value = b]");
  const cButton = container.querySelector("[value = c]");
  const dButton = container.querySelector("[value = d]");
  const fButton = container.querySelector("[value = f]");
  const gButton = container.querySelector("[value = g]");

  fireEvent.click(aButton);
  fireEvent.click(bButton);
  fireEvent.click(cButton);
  fireEvent.click(dButton);
  fireEvent.click(fButton);
  fireEvent.click(gButton);

  expect(container).toMatchSnapshot();
})
