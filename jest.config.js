module.exports = {
    verbose: true,
    testEnvironment: 'node',
    bail: true,
    testTimeout: 30000,
    "coverageThreshold": {
        "global": {
          "branches": 0,
          "functions": 0,
          "lines": 0
        }
    },
    "testPathIgnorePatterns": [
      "cypress/integration/standalone.spec.js"
    ]
};