//TODO: move to separate workspace

export const generateRandomId = (additionalText: string = "") =>
  `${additionalText}-${
    Date.now().toString(36) + Math.random().toString(36).substring(2)
  }`;
