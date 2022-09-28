module.exports = {
   'extends': [
      '@jeroentvb/eslint-config-typescript',
      'plugin:react/recommended',
   ],
   'parserOptions': {
      'ecmaFeatures': {
         'jsx': true
      },
      'ecmaVersion': 'latest',
      'sourceType': 'module'
   },
   'plugins': [
      'react',
   ],
};
