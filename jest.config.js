module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '^react$': 'preact/compat',
        '^react-dom/test-utils$': 'preact/test-utils',
        '^react-dom$': 'preact/compat',
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
}