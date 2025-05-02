module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "wip",
        "refactor",
        "test",
        "ci",
        "chore",
        "infra",
      ],
    ],
  },
  helpUrl:
    "https://github.com/matsjfunke/halunken-website/blob/main/commitlint.config.js",
  formatter: "./commitlint-formatter.js",
};
