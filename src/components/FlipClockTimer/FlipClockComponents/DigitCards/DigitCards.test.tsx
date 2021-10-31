import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { AnimatedCard, StaticCard } from "./DigitCards";

describe("AnimatedCardContainer", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    container = shallow(<AnimatedCard animation={""} digit={0} />);
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});

describe("StaticCardContainer", () => {
  let container: any;

  beforeEach(() => {
    container = shallow(<StaticCard position={""} digit={0} />);
  });

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
