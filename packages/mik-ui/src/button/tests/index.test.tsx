import { mount } from "@vue/test-utils";
import { Button } from "mik-ui";
import { expect } from "vitest";

describe("button", () => {
  it("size", () => {
    const wrapper = mount(Button, {
      props: {
        size: "small",
      },
    });
    // console.log("wra", wrapper.props());
    expect(wrapper.props().size).toBe("small");
  });

  it("click", () => {});
});

test("trigger", async () => {
  let clickState = false;
  const handleClick = () => {
    clickState = true;
  };
  const wrapper = mount(<Button onCli={handleClick}>test</Button>);
  await wrapper.trigger("click");
  expect(clickState).toBe(true);
  wrapper.unmount();
  // const wrapper = mount(KButton);
  // await wrapper.find("button").trigger("click");
  // expect(wrapper.find("button").text()).toBe(1);
});
