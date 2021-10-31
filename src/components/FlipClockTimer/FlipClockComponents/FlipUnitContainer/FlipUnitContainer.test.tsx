import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FlipUnitContainer from "./FlipUnitContainer";

describe("FlipUnitContainer", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    container = shallow(
      <FlipUnitContainer digit={0} shuffle={Boolean} unit={0} />
    );
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
