import color from 'color';
import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0179FE',
    accent: '#0179FE',
    background: '#f6f6f6',
    surface: '#fff',
    error: '#F04984',
    text: '#000',
    textInverted: '#fff',
    headerText: '#fff',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color('#000').alpha(0.26).rgb().string(),
    placeholder: color('#000').alpha(0.54).rgb().string(),
    backdrop: color('#000').alpha(0.5).rgb().string(),
    notification: '#f50057',
  },
  animation: {
    scale: 1.0,
  },
};

export default theme;
