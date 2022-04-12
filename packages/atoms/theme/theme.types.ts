export type IColor = {
  main: string;
  light?: string;
  contrastTextMain: string;
  contrastTextLight?: string;
  colorName: string;
};

export type IThemePalette = {
  primary: IColor;
  secondary: IColor;
  error: IColor;
};

export type ITheme = {
  colors: {
    themePalette: IThemePalette;
  };
};
