const explanations = {
  "type-enum":
    "Type must be one of: feat, fix, docs, wip, refactor, test, ci, chore, infra",
  "type-empty": 'Message must begin with a type (e.g. "feat: ", "fix: ")',
  "subject-empty": "A subject must follow the type and colon",
  "header-max-length": "The first line cannot be longer than 200 characters",
  "body-leading-blank": "There must be a blank line between header and body",
  "body-max-line-length":
    "No line in the body can be longer than 200 characters",
  "footer-max-line-length":
    "No line in the footer can be longer than 200 characters",
};

function getDetailedDescription(ruleName) {
  return (
    explanations[ruleName] || "Please check the convention and fix the error"
  );
}

module.exports = (report, options) => {
  const { results } = report;
  const messages = results
    .filter((result) => result.warnings.length > 0 || result.errors.length > 0)
    .map((result) => {
      const issues = [...result.errors, ...result.warnings]
        .map((issue) => {
          const emoji = issue.level === 2 ? "❌" : "⚠️";
          const description = getDetailedDescription(issue.name);
          return `${emoji} ${issue.message} [${issue.name}]\n   💡 ${description}`;
        })
        .join("\n");

      return `\n📝 Commit message: "${result.input}"\n\n${issues}`;
    })
    .join("\n");

  if (messages) {
    return `\n🚫 Your commit message doesn't meet our conventions:\n${messages}\n\n📘 Examples of valid commit messages:\n✅ feat: add new login feature\n✅ fix: resolve user authentication issue\n✅ docs: update readme\n✅ infra: update deployment config\n\n🔍 More information: ${options.helpUrl}"
    }`;
  }

  return "✅ Commit message meets our conventions!";
};
