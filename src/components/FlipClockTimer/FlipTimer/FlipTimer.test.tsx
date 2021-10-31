import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FlipTimer from "./FlipTimer";

describe("FlipTimer", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    container = shallow(<FlipTimer minutes={0} seconds={0} />);
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
