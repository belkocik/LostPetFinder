import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

const lightTheme = {
  colors: {
    primary: 'rgb(150, 73, 12)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 219, 200)',
    onPrimaryContainer: 'rgb(50, 19, 0)',
    secondary: 'rgb(118, 88, 71)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 219, 200)',
    onSecondaryContainer: 'rgb(43, 22, 9)',
    tertiary: 'rgb(98, 96, 51)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(232, 229, 172)',
    onTertiaryContainer: 'rgb(29, 29, 0)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(32, 26, 23)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(32, 26, 23)',
    surfaceVariant: 'rgb(244, 222, 211)',
    onSurfaceVariant: 'rgb(82, 68, 60)',
    outline: 'rgb(133, 116, 107)',
    outlineVariant: 'rgb(215, 194, 184)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(54, 47, 44)',
    inverseOnSurface: 'rgb(251, 238, 233)',
    inversePrimary: 'rgb(255, 182, 139)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(250, 242, 243)',
      level2: 'rgb(247, 237, 236)',
      level3: 'rgb(244, 231, 228)',
      level4: 'rgb(242, 230, 226)',
      level5: 'rgb(240, 226, 221)',
    },
    surfaceDisabled: 'rgba(32, 26, 23, 0.12)',
    onSurfaceDisabled: 'rgba(32, 26, 23, 0.38)',
    backdrop: 'rgba(58, 46, 39, 0.4)',
  },
};

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...lightTheme.colors,
    myOwnColor: '#BADA55',
  },
};
