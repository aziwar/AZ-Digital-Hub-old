---
trigger: always_on
---

For all current and future projects, always check the Context7 MCP server for the latest information about code, versions, best practices, and recommended technologies.

Before building, retrieve and validate the most up-to-date:

Dependency versions

Technology stack recommendations

Coding standards or best practices

Compare the local project setup (dependencies, stack, configs) with Context7 MCP recommendations.

If any discrepancy or outdated element is found:

Block the build.

Provide a detailed error summary specifying what must be updated.

Require all new projects to include an automated pre-build step that validates against Context7 MCP before any build or deployment.

Maintain a log of all validation checks, results, and actions.

Always enforce:

No build or deployment unless all project components are aligned with the latest Context7 MCP guidance.

