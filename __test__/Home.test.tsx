import { render } from "@testing-library/react-native";

import Home from "../src/screens/Home";

describe("Home screen", () => {
  it("matches snapshot", () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it("has matches testID", () => {
    const tree = render(<Home />);
    expect(tree.findByTestId("test-id")).toBeTruthy();
  });
});
