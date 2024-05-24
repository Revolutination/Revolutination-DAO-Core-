module.exports = {
  tags: {
    allowUnknownTags: true,
  },
  source: {
    include: ['src/FormalVerifier.sol', 'src/SecurityAnalysis.sol'],
    includePattern: /\.sol$/,
  },
  opts: {
    destination: './docs',
    recurse: true,
    verbose: true,
  },
  plugins: ['jsdoc-plugin-solidity'],
  templates: {
    cleverLinks: true,
    monospaceLinks: true,
  },
};
