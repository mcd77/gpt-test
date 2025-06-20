const isProd = process.env.NODE_ENV === 'production';
const repo = 'gpt-test';

module.exports = {
  output: 'export',
  basePath: isProd ? `/` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
