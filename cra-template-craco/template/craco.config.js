const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Contexts': path.resolve(__dirname, 'src/contexts'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Utils': path.resolve(__dirname, 'src/utils')
    }
  }
};
