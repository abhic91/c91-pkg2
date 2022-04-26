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

export type IFontWeightRanges =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type ITextFieldSettings = {
  borderColor?: string;
  errorBorderColor?: string;
  disabledBorderColor?: string;

  borderColorFocus?: string;

  outlineColorOnFocus?: string;
  errorOutlineColorOnFocus?: string;

  placeholderColor?: string;
  placeholderColorDisabled?: string;

  disabledBgColor?: string;

  disabledTextColor?: string;
  hintTextColor?: string;
  labelTextColor?: string;
  errorTextColor?: string;

  labelFontSize?: string;
  hintFontSize?: string;
  textFontSize?: string;
  placeholderFontSize?: string;

  labelFontWeight?: IFontWeightRanges;
  hintFontWeight?: IFontWeightRanges;

  padding?: string;

  borderRadius?: string;

  shadow?: string;
};

export type ITextSizes = keyof ITextAlias["size"];

export type IButtonAlias = {
  backgroundColor?: string;
  backgroundColorActive?: string;
  backgroundColorFocus?: string;
  backgroundColorHover?: string;
  backgroundColorDisabled?: string;

  borderRadius?: string;

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
  primaryTextColorLight: string;
  neutralTextColor: string;
  neutralTextColorLight: string;
  neutralTextColorSatured: string;
  neutralTextColorInverted: string;
  errorTextColor: string;
  errorTextColorLight: string;
  errorTextColorSaturated: string;
  primaryTextColorDisabled: string;
  primaryTextColorSaturated: string;
  neutralTextColorDisabled: string;
  neturalTextColorInvertedDisabled: string;
  errorTextColorDisabled: string;
  transparentColor: "transparent";
};

export type IThemeButtonVariants = {
  primaryContained?: IButtonAlias;
  primaryLight?: IButtonAlias;
  primaryTextOnly?: IButtonAlias;
  primaryLink?: IButtonAlias;

  neutralOutlined: IButtonAlias;
  neutralLink: IButtonAlias;
  neutralTextOnly: IButtonAlias;

  errorContained?: IButtonAlias;
  errorLight?: IButtonAlias;
  errorOutlined?: IButtonAlias;
  errorTextOnly?: IButtonAlias;
  errorLink?: IButtonAlias;
};

export type IDropdownPopoverSettings = {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  appearAnimation?: string;
};

export type ITheme = {
  colorAliases?: IColorAliases;
  shadowAliases?: IShadowAlias;
  textAliases?: ITextAlias;
  button?: IThemeButtonVariants;
  textField?: ITextFieldSettings;
  dropdownPopover?: IDropdownPopoverSettings;
};
