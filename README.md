# Debugging & Code Quality Pipeline

Project that configures a complete code quality pipeline from scratch, including testing, linting, coverage, and pre-commit hooks.

## Exercise Goal

Configure a project from zero with a robust quality pipeline that prevents defects before code is committed.

## Purpose

Guarantee code correctness, consistency, and maintainability through automated quality controls.

## Tech Stack

- Node.js
- JavaScript
- ESLint
- Prettier
- Jest
- Husky
- lint-staged

## Requirements

- Node.js 14+
- npm

## Installation

npm install

## Testing

npm test
npm run test:coverage

## Code Quality

npm run lint
npm run lint:fix

## Pre-commit Quality Gate

Before each commit:

- ESLint validates code
- Prettier enforces formatting
- Jest runs related tests
- Commits are blocked on failure

## Branching Strategy

dev: development
master: stable code

## Project Structure

.
├── src/
│ ├── utils/
│ │ └── validators.js
│ └── **tests**/
│ └── validators.test.js
├── .husky/
├── package.json
├── jest.config.cjs
└── eslint.config.cjs

## Key Principle

High coverage does not guarantee correctness.
