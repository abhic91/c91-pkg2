import deepmerge from "deepmerge";
import colors from "../colors/colors";
import { IColorNames } from "../colors/colors.types";
import { IShadowAlias, ITextAlias } from "./theme.types";

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
};
