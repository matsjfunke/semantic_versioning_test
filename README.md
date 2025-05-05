# Semantic Versioning & Commit Workflow

This project uses semantic versioning, conventional commits, and automated release management to maintain a consistent workflow.

## Commit Linting

We enforce commit message standards using commitlint with Husky git hooks. All commit messages must follow the conventional commit format with specific types.

### Commit Types

Only the following commit types are allowed:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect code meaning (formatting, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `build`: Changes to build system or external dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

| Valid Commit Messages                         | Invalid Commit Messages |
| --------------------------------------------- | ----------------------- |
| `feat: add user authentication`               | `add new feature`       |
| `fix: resolve login redirect issue`           | `updated code`          |
| `docs: update API documentation`              | `WIP`                   |
| `refactor: simplify payment processing logic` | `Fixed bug`             |
| `perf: optimize database queries`             | `New feature added`     |
| `style: format according to style guide`      | `Quick fix`             |

## Semantic Versioning

This project follows semantic versioning (MAJOR.MINOR.PATCH) with automatic version bumps based on commit types:

```
git commit -m "feat: add user authentication"    # → Bumps MINOR version
git commit -m "fix: resolve login redirect bug"   # → Bumps PATCH version
git commit -m "feat!: completely redesign UI"     # → Bumps MAJOR version
```

## Automated Workflow

1. Make changes to the codebase
2. Commit with a valid commit type (commitlint will enforce this)
3. Push to the main branch
4. CI/CD pipeline automatically:
   - Determines the next version based on your commits
   - Updates the version in package.json
   - Creates a new release
   - Release notes are automatically generated from commit messages, grouping changes by type.
   - Adds a "released" label to related issues
   - Adds comments to Pull Requests:
     - Success: "🎉 This PR is included in version X.Y.Z"
     - Failure: "❌ Release failed due to an error"
