import { colors } from "@abhic91/design-system";
import { IColorNames } from "@abhic91/design-system/colors/colors.types";

export const theme = {
  // colors: {
  //   themePalette: {
  //     primary: {
  //       main: colors.violet[600],
  //       light: colors.violet[50],
  //       contrastTextMain: "#ffffff",
  //       contrastTextLight: colors.violet[600],
  //       colorName: "violet",
  //     },
  //     secondary: {
  //       main: "#FFFFFF",
  //       contrastTextMain: colors.gray[700],
  //       colorName: "gray",
  //     },
  //     error: {
  //       main: colors.red[600],
  //       light: colors.red[50],
  //       contrastTextMain: "#ffffff",
  //       contrastTextLight: "#ffffff",
  //       colorName: "red",
  //     },
  //   },
  // },
};
const defaultTextAlias: ITextAlias = {
  color: {
    primary: colors.violet[700],
    primaryDisabled: colors.violet[200],
    secondary: colors.gray[0],
    secondaryDisabled: colors.gray[200],
    error: colors.red[700],
    errorDisabled: colors.red[200],
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2.25rem",
    "5xl": "2.75rem",
    default: "1rem",
  },
};

type IShadowAlias = {
  shadow: string[];
  shadowHover: string[];
  shadowSm: string[];
  shadowSmHover: string[];
  shadowMd: string[];
  shadowMdHover: string[];
  shadowLg: string[];
  shadowLgHover: string[];
  shadowXl: string[];
  shadowXlHover: string[];
  shadow2Xl: string[];
  shadow2XlHover: string[];
  shadow3Xl: string[];
  shadow3XlHover: string[];
};

const defaultShadowAlias: IShadowAlias = {
  shadow: [`0px 1px 2px`],
  shadowHover: [`0px 1px 2px`],
  shadowSm: [`0px 1px 2px 0px #1018280F`, `0px 1px 2px 0px #1018280F`],
  shadowSmHover: [`0px 1px 2px 0px #1018280F`, `0px 1px 2px 0px #1018280F`],
  shadowMd: [`0px 2px 4px -2px #1018280F`, `0px 4px 8px -2px #1018281A`],
  shadowMdHover: [`0px 2px 4px -2px #1018280F`, `0px 4px 8px -2px #1018281A`],
  shadowLg: [`0px 4px 6px -2px #10182808`, `0px 12px 16px -4px #10182814`],
  shadowLgHover: [`0px 4px 6px -2px #10182808`, `0px 12px 16px -4px #10182814`],
  shadowXl: [`0px 12px 16px -4px #10182814`, `0px 20px 24px -4px #10182814`],
  shadowXlHover: [
    `0px 12px 16px -4px #10182814`,
    `0px 20px 24px -4px #10182814`,
  ],
  shadow2Xl: [`0px 24px 48px -12px #1018282E`],
  shadow2XlHover: [`0px 24px 48px -12px #1018282E`],
  shadow3Xl: [`0px 32px 64px -12px #10182824`],
  shadow3XlHover: [`0px 32px 64px -12px #10182824`],
};

type ITextAlias = {
  color: {
    primary: string;
    primaryDisabled: string;
    secondary: string;
    secondaryDisabled: string;
    error: string;
    errorDisabled: string;
  };
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    default: string;
  };
};

export const createTheme = (
  primaryColorName: IColorNames = "violet",
  secondaryColorName: IColorNames = "gray",
  theme: ITheme = {}
) => {
  return {
    button: {
      primaryContained: {
        backgroundColor: colors[primaryColorName][600],
        textColor: colors[secondaryColorName][0],
        backgroundColorHover: colors[primaryColorName][700],
        textColorHover: colors[secondaryColorName],
        backgroundColorActive: colors[primaryColorName][800],
        textColorActive: colors[secondaryColorName][0],
        backgroundColorDisabled: colors[primaryColorName][200],
        textColorDisabled: colors[secondaryColorName][50],
        outlineColorOnFocus: colors[primaryColorName][100],
        shadow: `0px 1px 2px ${colors[primaryColorName][600]};`,
        shadowHover: `0px 1px 2px ${colors[primaryColorName][700]};`,
        ...theme.button?.primaryContained,
      },
      semiTransparent: {
        backgroundColor: colors[primaryColorName][50],
        textColor: colors[primaryColorName][700],
        backgroundColorHover: colors[primaryColorName][100],
        textColorHover: colors[primaryColorName][700],
        backgroundColorActive: colors[primaryColorName][200],
        textColorActive: colors[primaryColorName][700],
        backgroundColorDisabled: colors[primaryColorName][50],
        textColorDisabled: colors[primaryColorName][300],
        outlineColorOnFocus: colors[primaryColorName][100],
        shadow: ` 0px 1px 2px ${colors[primaryColorName][300]};`,
        shadowHover: ` 0px 1px 2px ${colors[primaryColorName][400]};`,
        ...theme.button?.semiTransparent,
      },
      ...theme.button,
    },
  };
};

type IButtonAlias = {
  backgroundColor?: string;
  textColor?: string;
  backgroundColorHover?: string;
  textColorHover?: string;
  backgroundColorActive?: string;
  textColorActive?: string;
  backgroundColorDisabled?: string;
  textColorDisabled?: string;
  outlineColorOnFocus?: string;
  shadow?: string;
  shadowHover?: string;
};

export type ITheme = {
  button?: {
    primaryContained?: IButtonAlias;
    semiTransparent?: IButtonAlias;
  };
};
