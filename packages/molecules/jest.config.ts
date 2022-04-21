import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testMatch: [
      "./**/__tests__/**/*.[jt]s?(x)",
      "./**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./setupTests.ts"],
  };
};
