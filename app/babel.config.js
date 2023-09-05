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
            '@/animations': './src/animations',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/hooks': './src/hooks',
            '@/styles': './src/styles',
            '@/pages': './src/pages',
            '@/utils': './src/utils',
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
      ['react-native-reanimated/plugin'],
    ],
  };
};
