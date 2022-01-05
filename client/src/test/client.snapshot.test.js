import React from "react";
// Imported the Loading component for testing.
import Loading from "../components/Loading";
// Imported react-test-renderer for rendering snapshots.
import renderer from "react-test-renderer";

/* Snapshot Test
• After renderer.create, I passed in the component that I want to render.
• I then called .toJSON() on it to get a JSON representation of the component. */

it("renders correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
