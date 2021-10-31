import React from "react";
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import TimerButton from "./TimerButton";
import Timer from "../Timer/Timer";

describe("TimerButton", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    container = shallow(
      <TimerButton buttonAction={jest.fn()} buttonValue={""} />
    );
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
