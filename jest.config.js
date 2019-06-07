module.exports = {
  "testMatch": [
    "**/*.test.ts",
    "**/*.test.tsx",
  ],
  "moduleDirectories": [
    "./node_modules",
    "./src",
  ],
  "moduleFileExtensions": [
    'js',
    "ts",
    "tsx",
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
    ".+\\.css$": "jest-transform-css"
  },
  "setupFilesAfterEnv": ["./setupTests.ts"], // runs the code from the setupTests.ts file before each test so that the adapter does not have to be in each test file which tests React component
}