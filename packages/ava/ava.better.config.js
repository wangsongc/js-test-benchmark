// import os from "os"

export default {
	"files": [
        "**/tests/functions/*.test.js"
    ],
    // "match": [
    //     "*.test.js"
    // ],
    // "concurrency": os.cpus().length,
    "concurrency": 4,
    "failFast": true,
    "failWithoutAssertions": false,
    // "environmentVariables": {
    //     "MY_ENVIRONMENT_VARIABLE": "some value"
    // },
    // "verbose": true,
    // "require": [
    //     "./my-helper-module.js"
    // ],
    // "nodeArguments": [
    //     "--trace-deprecation",
    //     "--napi-modules"
    // ]
};