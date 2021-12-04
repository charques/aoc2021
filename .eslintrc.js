module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/file-extension-in-import": ["error", "always"],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error", "always"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error",
        "node/no-unpublished-require": ["error", {"devDependencies": true}]
    }
};
