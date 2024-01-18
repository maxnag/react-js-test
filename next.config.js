const pkg = require('./package.json');
/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    const commitHash = require('child_process')
      .execSync('git log --pretty=format:"%h" -n1')
      .toString()
      .trim();

    return `${pkg.version}-${commitHash}`;
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
