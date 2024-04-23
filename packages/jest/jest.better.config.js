// const os = require('os');

module.exports = {
    testMatch: [
        "**/jest/tests/**/*.js"
    ],
    cacheDirectory: "./.cache",
    // maxWorkers: os.cpus().length,
    maxWorkers: 4,
    collectCoverageFrom: [
        '**/js-common/*.{js,jsx}',
        '**/packages/*/**/*.js',
        '**/js-common/spendTime*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
      ],
};