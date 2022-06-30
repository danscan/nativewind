import { Style } from "css-to-react-native";
import { render } from "@testing-library/react-native";
import { Text, View, ViewStyle } from "react-native";
import { createTests, tailwindRunner } from "./runner";
import { TestProvider } from "./runner";
import { StyledComponent } from "../../src";

const scenarios: Record<string, ViewStyle["borderWidth"]> = {
  0: 0,
  2: 2,
  4: 4,
  8: 8,
};

describe("Border - Border Width", () => {
  test("divide-x", () => {
    const tree = render(
      <TestProvider>
        <StyledComponent component={View} className="border">
          <Text>A</Text>
        </StyledComponent>
      </TestProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

tailwindRunner(
  "Border - Border Width",
  [
    [
      "border",
      {
        styles: {
          border: {
            borderBottomWidth: "hairlineWidth()",
            borderTopWidth: "hairlineWidth()",
            borderLeftWidth: "hairlineWidth()",
            borderRightWidth: "hairlineWidth()",
          } as Style,
        },
      },
    ],
    [
      "border-x",
      {
        styles: {
          "border-x": {
            borderLeftWidth: "hairlineWidth()",
            borderRightWidth: "hairlineWidth()",
          } as Style,
        },
      },
    ],
    [
      "border-y",
      {
        styles: {
          "border-y": {
            borderTopWidth: "hairlineWidth()",
            borderBottomWidth: "hairlineWidth()",
          } as Style,
        },
      },
    ],
    [
      "border-t",
      {
        styles: {
          "border-t": { borderTopWidth: "hairlineWidth()" } as Style,
        },
      },
    ],
    [
      "border-b",
      {
        styles: {
          "border-b": {
            borderBottomWidth: "hairlineWidth()",
          } as Style,
        },
      },
    ],
    [
      "border-l",
      {
        styles: {
          "border-l": { borderLeftWidth: "hairlineWidth()" } as Style,
        },
      },
    ],
    [
      "border-r",
      {
        styles: {
          "border-r": {
            borderRightWidth: "hairlineWidth()",
          } as Style,
        },
      },
    ],
  ],
  createTests("border", scenarios, (n) => ({
    borderBottomWidth: n,
    borderRightWidth: n,
    borderTopWidth: n,
    borderLeftWidth: n,
  })),
  createTests("border-x", scenarios, (n) => ({
    borderRightWidth: n,
    borderLeftWidth: n,
  })),
  createTests("border-y", scenarios, (n) => ({
    borderBottomWidth: n,
    borderTopWidth: n,
  })),
  createTests("border-t", scenarios, (n) => ({
    borderTopWidth: n,
  })),
  createTests("border-b", scenarios, (n) => ({
    borderBottomWidth: n,
  })),
  createTests("border-l", scenarios, (n) => ({
    borderLeftWidth: n,
  })),
  createTests("border-r", scenarios, (n) => ({
    borderRightWidth: n,
  }))
);
