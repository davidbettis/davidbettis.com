const { execSync } = require('child_process');

module.exports = function() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    return Date.now().toString();
  }
};
