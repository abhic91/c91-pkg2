export type IShadowAlias = {
  shadow: string[] | string;
  shadowHover: string[] | string;
  shadowSm: string[] | string;
  shadowSmHover: string[] | string;
  shadowMd: string[] | string;
  shadowMdHover: string[] | string;
  shadowLg: string[] | string;
  shadowLgHover: string[] | string;
  shadowXl: string[] | string;
  shadowXlHover: string[] | string;
  shadow2Xl: string[] | string;
  shadow2XlHover: string[] | string;
  shadow3Xl: string[] | string;
  shadow3XlHover: string[] | string;
};
export type ITextAlias = {
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
  font: string;
};

export type ITextSizes = keyof ITextAlias["size"];

export type IButtonAlias = {
  backgroundColor?: string;
  backgroundColorActive?: string;
  backgroundColorFocus?: string;
  backgroundColorHover?: string;
  backgroundColorDisabled?: string;

  textColor?: string;
  textColorHover?: string;
  textColorActive?: string;
  textColorDisabled?: string;

  outlineColorOnFocus?: string;

  borderColor?: string;

  textDecoration?: string;

  textDecorationHover?: string;

  shadow?: string;
  shadowHover?: string;
};

export type IColorAliases = {
  primaryOutlinedColor: string;
  primaryLightOutlinedColor: string;
  neutralOutlineColor: string;
  errorOutlinedColor: string;
  errorLightOutlinedColor: string;
  primaryBorderColor: string;
  neutralBorderColor: string;
  errorBorderColor: string;
  primaryLightBorderColor: string;
  errorLightBorderColor: string;
  primaryBorderColorSaturated: string;
  neutralBorderColorSaturated: string;
  errorBorderColorSaturated: string;
  primaryBgColor: string;
  neutralBgColor: string;
  errorBgColor: string;
  primaryBgLight: string;
  errorBgLight: string;
  primaryBgColorSaturated: string;
  neutralBgColorSaturated: string;
  errorBgColorSaturated: string;
  primaryBgColorDisabled: string;
  neutralBgColorDisabled: string;
  errorBgColorDisabled: string;
  primaryBgLightSaturated: string;
  errorBgLightSaturated: string;
  primaryBgLightDisabled: string;
  errorBgLightDisabled: string;
  primaryTextColor: string;
  neutralTextColor: string;
  neutralTextColorInverted: string;
  errorTextColor: string;
  primaryTextColorDisabled: string;
  primaryTextColorSaturated: string;
  neutralTextColorDisabled: string;
  neturalTextColorInvertedDisabled: string;
  errorTextColorDisabled: string;
  transparentColor: "transparent";
};

export type IThemeButtonVariants = {
  primaryContained?: IButtonAlias;
  semiTransparent?: IButtonAlias;
  primaryTextOnly?: IButtonAlias;
  primaryLink?: IButtonAlias;

  neutralOutlined: IButtonAlias;
};

export type ITheme = {
  colorAliases?: IColorAliases;
  button?: IThemeButtonVariants;
  shadowAliases?: IShadowAlias;
  textAliases?: ITextAlias;
};