import { TailwindConfig } from "tailwindcss/tailwind-config";
import { TailwindReactNativeOptions } from "../types";
import { nativePlugin } from "./native-plugin";

export function getNativeTailwindConfig({
  rem = 16,
}: TailwindReactNativeOptions = {}) {
  const config: Partial<TailwindConfig> = {
    plugins: [nativePlugin],
    corePlugins: {
      accentColor: false,
      accessibility: false,
      animation: false,
      appearance: false,
      aspectRatio: false,
      backdropBlur: false,
      backdropBrightness: false,
      backdropContrast: false,
      backdropFilter: false,
      backdropGrayscale: false,
      backdropHueRotate: false,
      backdropInvert: false,
      backdropOpacity: false,
      backdropSaturate: false,
      backdropSepia: false,
      backgroundAttachment: false,
      backgroundBlendMode: false,
      backgroundClip: false,
      backgroundImage: false,
      backgroundOrigin: false,
      backgroundPosition: false,
      backgroundRepeat: false,
      backgroundSize: false,
      blur: false,
      borderCollapse: false,
      boxDecorationBreak: false,
      boxShadow: false,
      boxSizing: false,
      breakAfter: false,
      breakBefore: false,
      breakInside: false,
      brightness: false,
      caretColor: false,
      clear: false,
      columns: false,
      content: false,
      contrast: false,
      cursor: false,
      divideColor: false,
      divideOpacity: false,
      divideStyle: false,
      divideWidth: false,
      dropShadow: false,
      fill: false,
      filter: false,
      float: false,
      fontSmoothing: false,
      gap: false,
      gradientColorStops: false,
      grayscale: false,
      gridAutoColumns: false,
      gridAutoFlow: false,
      gridAutoRows: false,
      gridColumn: false,
      gridColumnEnd: false,
      gridColumnStart: false,
      gridRow: false,
      gridRowEnd: false,
      gridRowStart: false,
      gridTemplateColumns: false,
      gridTemplateRows: false,
      hueRotate: false,
      invert: false,
      isolation: false,
      justifyItems: false,
      justifySelf: false,
      listStylePosition: false,
      listStyleType: false,
      mixBlendMode: false,
      objectFit: false,
      objectPosition: false,
      order: false,
      overscrollBehavior: false,
      placeContent: false,
      placeItems: false,
      placeSelf: false,
      placeholderColor: false,
      placeholderOpacity: false,
      preflight: false,
      resize: false,
      ringColor: false,
      ringOffsetColor: false,
      ringOffsetWidth: false,
      ringOpacity: false,
      ringWidth: false,
      rotate: false,
      saturate: false,
      scale: false,
      scrollBehavior: false,
      scrollMargin: false,
      scrollPadding: false,
      scrollSnapAlign: false,
      scrollSnapStop: false,
      scrollSnapType: false,
      sepia: false,
      skew: false,
      space: false,
      stroke: false,
      strokeWidth: false,
      tableLayout: false,
      textIndent: false,
      textOverflow: false,
      touchAction: false,
      transform: false,
      transformOrigin: false,
      transitionDelay: false,
      transitionDuration: false,
      transitionProperty: false,
      transitionTimingFunction: false,
      translate: false,
      userSelect: false,
      verticalAlign: false,
      visibility: false,
      whitespace: false,
      willChange: false,
      wordBreak: false,
    },
    theme: {
      aspectRatio: {
        auto: "0",
        square: "1",
        video: "1.777777778",
      },
      letterSpacing: {
        tighter: "-0.5",
        tight: "-0.25",
        normal: "0",
        wide: "0.25",
        wider: "0.5",
        widest: "1",
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: `${rem * 0.125}`,
        1: `${rem * 0.25}`,
        1.5: `${rem * 0.375}`,
        2: `${rem * 0.5}`,
        2.5: `${rem * 0.625}`,
        3: `${rem * 0.75}`,
        3.5: `${rem * 0.875}`,
        4: `${rem * 1}`,
        5: `${rem * 1.25}`,
        6: `${rem * 1.5}`,
        7: `${rem * 1.75}`,
        8: `${rem * 2}`,
        9: `${rem * 2.25}`,
        10: `${rem * 2.5}`,
        11: `${rem * 2.75}`,
        12: `${rem * 3}`,
        14: `${rem * 3.5}`,
        16: `${rem * 4}`,
        20: `${rem * 5}`,
        24: `${rem * 6}`,
        28: `${rem * 7}`,
        32: `${rem * 8}`,
        36: `${rem * 9}`,
        40: `${rem * 10}`,
        44: `${rem * 11}`,
        48: `${rem * 12}`,
        52: `${rem * 13}`,
        56: `${rem * 14}`,
        60: `${rem * 15}`,
        64: `${rem * 16}`,
        72: `${rem * 18}`,
        80: `${rem * 20}`,
        96: `${rem * 24}`,
      },
      borderRadius: {
        none: "0px",
        sm: `${rem * 0.125}`,
        DEFAULT: `${rem * 0.25}`,
        md: `${rem * 0.375}`,
        lg: `${rem * 0.5}`,
        xl: `${rem * 0.75}`,
        "2xl": `${rem * 1}`,
        "3xl": `${rem * 1.5}`,
        full: "9999px",
      },
      fontSize: {
        xs: [`${rem * 0.75}`, { lineHeight: `${rem * 1}` }],
        sm: [`${rem * 0.875}`, { lineHeight: `${rem * 1.25}` }],
        base: [`${rem * 1}`, { lineHeight: `${rem * 1.5}` }],
        lg: [`${rem * 1.125}`, { lineHeight: `${rem * 1.75}` }],
        xl: [`${rem * 1.25}`, { lineHeight: `${rem * 1.75}` }],
        "2xl": [`${rem * 1.5}`, { lineHeight: `${rem * 2}` }],
        "3xl": [`${rem * 1.875}`, { lineHeight: `${rem * 2.25}` }],
        "4xl": [`${rem * 2.25}`, { lineHeight: `${rem * 2.5}` }],
        "5xl": [`${rem * 3}`, { lineHeight: "1" }],
        "6xl": [`${rem * 3.75}`, { lineHeight: "1" }],
        "7xl": [`${rem * 4.5}`, { lineHeight: "1" }],
        "8xl": [`${rem * 6}`, { lineHeight: "1" }],
        "9xl": [`${rem * 8}`, { lineHeight: "1" }],
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: `${rem * 0.75}`,
        4: `${rem * 1}`,
        5: `${rem * 1.25}`,
        6: `${rem * 1.5}`,
        7: `${rem * 1.75}`,
        8: `${rem * 2}`,
        9: `${rem * 2.25}`,
        10: `${rem * 2.5}`,
      },
      maxWidth: ({ theme, breakpoints }) => ({
        none: "none",
        0: `${rem * 0}`,
        xs: `${rem * 20}`,
        sm: `${rem * 24}`,
        md: `${rem * 28}`,
        lg: `${rem * 32}`,
        xl: `${rem * 36}`,
        "2xl": `${rem * 42}`,
        "3xl": `${rem * 48}`,
        "4xl": `${rem * 56}`,
        "5xl": `${rem * 64}`,
        "6xl": `${rem * 72}`,
        "7xl": `${rem * 80}`,
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        ...breakpoints(theme("screens")),
      }),
    },
  };

  return config;
}
