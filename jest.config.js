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
}