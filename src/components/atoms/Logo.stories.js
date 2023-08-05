import Logo from './Logo.vue';
import { LogoVariant, LogoVariants } from '../../utils/Logo';

export default {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: LogoVariants,
    },
  },
}

export const Default = {
  args: {
    variant: LogoVariant.PRIMARY,
  },
}