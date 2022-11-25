import { fontFamily } from './fontFamily';
import { palette } from './light/palette';
import { input } from './components';

export * from './global';

export const theme = {
  components: {
    input: input.lightTheme,
  },
  fontFamily,
  palette,
};
