import { defaultShadowColor } from "./constants";
import { IShadowAlias } from "./theme.types";

export const getShadowAliasesInString = (
  shadowAliases: IShadowAlias[keyof IShadowAlias],
  shadowColors: string[] = []
) => {
  return Array.isArray(shadowAliases)
    ? shadowAliases
        .map(
          (shadow, index) =>
            `${shadow} ${
              shadowColors[index] ||
              defaultShadowColor[index] ||
              defaultShadowColor[0]
            }`
        )
        .join(",")
    : shadowAliases;
};
