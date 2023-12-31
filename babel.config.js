module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/config': './src/config',
          '@/features': './src/features',
          '@/hooks': './src/hooks',
          '@/i18n': './src/i18n',
          '@/navigation': './src/navigation',
          '@/store': './src/store',
          '@/theme': './src/theme',
          '@/types': './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
