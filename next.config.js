const isProd = process.env.NODE_ENV === 'production';
const repo = '';

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
