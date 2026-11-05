# Security policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.x     | Yes       |

## Report a vulnerability

To report a vulnerability in Graupl, [open an issue](https://github.com/Graupl/graupl/issues/new) with the `security` label.

Maintainers check issues at least two or three times a week. You can expect a response within a few days.

If you submit a pull request with a fix, maintainers will review it within the same time frame. Otherwise, the time needed to develop a fix depends on the severity of the vulnerability.

## Vulnerabilities in dependencies

Graupl has production dependencies, including Accessible Ecosystem Core and Graupl workspace packages. Maintainers prioritize vulnerabilities that affect the code shipped to users. When a dependency fix affects shipped code, update the dependency and lockfile, rebuild the affected bundles, and verify the result before releasing.

Maintainers will update vulnerable development dependencies when possible. Maintainers may not publish a Graupl release immediately after these updates.

Maintainers prioritize vulnerabilities in tools that compile project code, including Sass, Rolldown, Vite, Lightning CSS, and related plugins. When a vulnerability in one of these dependencies is resolved, maintainers will publish a new Graupl release.

## Attribution

This document is based on [Accessible Ecosystem Core](https://github.com/Accessible-Ecosystem/core), adapted from its [corresponding document](https://github.com/Accessible-Ecosystem/core/blob/1.x/.github/SECURITY.md).
