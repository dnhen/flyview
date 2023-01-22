import { Divider } from '@/theme/components/Divider';
import { Heading } from '@/theme/components/Heading';
import { Text } from '@/theme/components/Text';
import { colors } from '@/theme/foundations/colors';
import { fonts } from '@/theme/foundations/fonts';
import { textStyles } from '@/theme/foundations/textStyles';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Divider,
    Text,
    Heading
  },
  colors,
  fonts,
  textStyles
});
