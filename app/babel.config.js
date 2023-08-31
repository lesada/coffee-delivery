module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/styles': './src/styles',
            '@/pages': './src/pages',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  };
};
