module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "allowReserved": false,
        "ecmaFeatures": {
            "impliedStrict": true,
        },
    },
    "rules": {
        "array-callback-return": "error",
        "no-cond-assign": ["error", "always"],
        "no-constant-binary-expression": "error",
        "no-constructor-return": "error",
        "no-duplicate-imports": ["warn", {"includeExports": true}],
        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-negation": ["error", {"enforceForOrderingRelations": true}],
        "no-unsafe-optional-chaining": ["error", {"disallowArithmeticOperators": true}],
    },
    "ignorePatterns": ["node_modules/**/*"],
}
