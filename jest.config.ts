import type { Config } from 'jest';

const config: Config = {
  preset: "jest-expo",
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native)|expo|@expo)"
  ]
};

export default config;
