module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/**/__tests__/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'lcov', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    'src/utils/': {
      branches: 95,
      functions: 95
    }
  }
};
