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
    "body-leading-blank": [2, "always"],
    "subject-case": [0, "always"],
    "subject-full-stop": [0, "never"],
    "type-case": [2, "always", "lower-case"],
  },
  helpUrl:
    "https://github.com/matsjfunke/halunken-website/blob/main/commitlint.config.js",
  formatter: "./commitlint-formatter.js",
};
