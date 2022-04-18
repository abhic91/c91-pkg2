import { colors } from "@abhic91/design-system/";
import { IColorAliases, IShadowAlias, ITextAlias, ITheme } from "./theme.types";
import deepmerge from "deepmerge";
import { getShadowAliasesInString } from "./utils";
import { IColorNames } from "../colors/colors.types"; //TODO: verify if ok to import like this
import { fontFamilies } from "./constants";

export const createTheme = (
  primaryColorName: IColorNames = "violet",
  neutralColorName: IColorNames = "gray",
  theme: ITheme = {}
) => {
  const colorAliases = createColorAliases(
    primaryColorName,
    neutralColorName,
    neutralColorName,
    theme.colorAliases
  );
  const shadowAliases = createShadowAlias(theme.shadowAliases);
  const textAliases = createTextAliases(theme.textAliases);
  const defaultUISettings: ITheme = {
    colorAliases,
    shadowAliases,
    textAliases,
    button: {
      primaryContained: {
        backgroundColor: colorAliases.primaryBgColor,
        backgroundColorActive: colorAliases.primaryBgColorSaturated,
        backgroundColorFocus: colorAliases.primaryBgColor,
        backgroundColorHover: colorAliases.primaryBgColorSaturated,
        backgroundColorDisabled: colorAliases.primaryBgColorDisabled,

        textColor: colorAliases.neutralTextColorInverted,
        textColorHover: colorAliases.neutralTextColorInverted,
        textColorActive: colorAliases.neutralTextColorInverted,
        textColorDisabled: colorAliases.neutralTextColorInverted,

        outlineColorOnFocus: colorAliases.primaryOutlinedColor,

        shadow: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][600],
        ]),
        shadowHover: getShadowAliasesInString(shadowAliases.shadowHover, [
          colors[primaryColorName][700],
        ]),
      },
      semiTransparent: {
        backgroundColor: colorAliases.primaryBgLight,
        backgroundColorActive: colorAliases.primaryBgLightSaturated,
        backgroundColorFocus: colorAliases.primaryBgLight,
        backgroundColorHover: colorAliases.primaryBgLightSaturated,
        backgroundColorDisabled: colorAliases.primaryBgLightDisabled,

        textColor: colorAliases.primaryTextColor,
        textColorHover: colorAliases.primaryTextColor,
        textColorActive: colorAliases.primaryTextColor,
        textColorDisabled: colorAliases.primaryTextColorDisabled,

        outlineColorOnFocus: colorAliases.primaryLightOutlinedColor,
        shadow: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][100],
        ]),
        shadowHover: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][100],
        ]),
      },
      primaryTextOnly: {
        backgroundColor: colorAliases.transparentColor,
        backgroundColorActive: colorAliases.transparentColor,
        backgroundColorFocus: colorAliases.transparentColor,
        backgroundColorHover: colorAliases.primaryBgLight,
        backgroundColorDisabled: colorAliases.transparentColor,

        textColor: colorAliases.primaryTextColor,
        textColorHover: colorAliases.primaryTextColor,
        textColorActive: colorAliases.primaryTextColor,
        textColorDisabled: colorAliases.primaryTextColorDisabled,

        outlineColorOnFocus: colorAliases.primaryLightOutlinedColor,

        shadow: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][25],
        ]),
        shadowHover: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][25],
        ]),
      },
      primaryLink: {
        backgroundColor: colorAliases.transparentColor,
        backgroundColorActive: colorAliases.transparentColor,
        backgroundColorFocus: colorAliases.transparentColor,
        backgroundColorHover: colorAliases.transparentColor,
        backgroundColorDisabled: colorAliases.transparentColor,

        textColor: colorAliases.primaryTextColor,
        textColorHover: colorAliases.primaryTextColorSaturated,
        textColorActive: colorAliases.primaryTextColorSaturated,
        textColorDisabled: colorAliases.primaryTextColorDisabled,

        outlineColorOnFocus: colorAliases.primaryLightOutlinedColor,

        textDecorationHover: "underline",

        shadow: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][25],
        ]),
        shadowHover: getShadowAliasesInString(shadowAliases.shadow, [
          colors[primaryColorName][25],
        ]),
      },
    },
  };
  return deepmerge(defaultUISettings, theme);
};

export const createColorAliases = (
  primaryColorName: IColorNames,
  // invertedPrimaryColor: IColorNames = "gray",
  neutralColorName: IColorNames,
  invertedNeutralColor: IColorNames,
  customColorAliases?: IColorAliases
) => {
  const defaultColorAliases: IColorAliases = {
    primaryOutlinedColor: colors[primaryColorName][200],
    primaryLightOutlinedColor: colors[primaryColorName][200],
    neutralOutlineColor: colors[neutralColorName][200],
    errorOutlinedColor: colors.red[200],
    errorLightOutlinedColor: colors.red[200],

    primaryBorderColor: colors[primaryColorName][600],
    neutralBorderColor: colors[neutralColorName][200],
    errorBorderColor: colors.red[600],

    primaryLightBorderColor: colors[primaryColorName][25],
    errorLightBorderColor: colors.red[25],

    primaryBorderColorSaturated: colors[primaryColorName][700],
    neutralBorderColorSaturated: colors[neutralColorName][100],
    errorBorderColorSaturated: colors.red[700],

    primaryBgColor: colors[primaryColorName][600],
    neutralBgColor: colors[neutralColorName][0],
    errorBgColor: colors.red[600],

    primaryBgLight: colors[primaryColorName][50],
    errorBgLight: colors.red[50],

    primaryBgColorSaturated: colors[primaryColorName][800],
    neutralBgColorSaturated: colors[neutralColorName][50],
    errorBgColorSaturated: colors.red[700],

    primaryBgColorDisabled: colors[primaryColorName][200],
    neutralBgColorDisabled: colors[neutralColorName][25],
    errorBgColorDisabled: colors.red[200],

    primaryBgLightSaturated: colors[primaryColorName][100],
    errorBgLightSaturated: colors.red[100],

    primaryBgLightDisabled: colors[primaryColorName][25],
    errorBgLightDisabled: colors.red[25],

    primaryTextColor: colors[primaryColorName][700],
    primaryTextColorSaturated: colors[primaryColorName][800],
    neutralTextColor: colors[neutralColorName][800],
    neutralTextColorInverted: colors[invertedNeutralColor][0],
    errorTextColor: colors.red[700],

    primaryTextColorDisabled: colors[primaryColorName][300],
    neutralTextColorDisabled: colors[neutralColorName][200],
    neturalTextColorInvertedDisabled: colors[invertedNeutralColor][50],
    errorTextColorDisabled: colors.red[300],

    transparentColor: "transparent",
  } as const;

  return deepmerge(
    defaultColorAliases,
    customColorAliases || {}
  ) as IColorAliases;
};
export const createShadowAlias = (customShadowAliases?: IShadowAlias) => {
  const defaultShadowAlias: IShadowAlias = {
    shadow: [`0px 1px 2px`],
    shadowHover: [`0px 1px 2px`],
    shadowSm: [`0px 1px 2px 0px #1018280F`, `0px 1px 2px 0px #1018280F`],
    shadowSmHover: [`0px 1px 2px 0px #1018280F`, `0px 1px 2px 0px #1018280F`],
    shadowMd: [`0px 2px 4px -2px #1018280F`, `0px 4px 8px -2px #1018281A`],
    shadowMdHover: [`0px 2px 4px -2px #1018280F`, `0px 4px 8px -2px #1018281A`],
    shadowLg: [`0px 4px 6px -2px #10182808`, `0px 12px 16px -4px #10182814`],
    shadowLgHover: [
      `0px 4px 6px -2px #10182808`,
      `0px 12px 16px -4px #10182814`,
    ],
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

  return deepmerge(
    defaultShadowAlias,
    customShadowAliases || {}
  ) as IShadowAlias;
};

export const createTextAliases = (customTextAliases?: ITextAlias) => {
  const defaultTextAlias: ITextAlias = {
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
    font: fontFamilies,
  };
  return deepmerge(defaultTextAlias, customTextAliases || {}) as ITextAlias;
};
