import Button from './Button.vue';
import {
  ButtonVariant,
  ButtonVariants,
  ButtonSize,
  ButtonSizes,
  ButtonColor,
  ButtonColors 
} from '../../utils/Button'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ButtonVariants,
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ButtonSizes,
    },
    color: {
      control: {
        type: 'select',
      },
      options: ButtonColors,
    },
  },
}

export const SolidPurple = {
  args: {
    variant: ButtonVariant.SOLID,
    size: ButtonSize.REGULAR,
    color: ButtonColor.PURPLE,
    label: 'Solid Purple',
    disabled: false,
    fullWidth: false,
  },
}

export const SolidGreen = {
  args: {
    variant: ButtonVariant.SOLID,
    size: ButtonSize.REGULAR,
    color: ButtonColor.GREEN,
    label: 'Solid Green',
    disabled: false,
    fullWidth: false,
  },
}

export const SolidBlue = {
  args: {
    variant: ButtonVariant.SOLID,
    size: ButtonSize.REGULAR,
    color: ButtonColor.BLUE,
    label: 'Solid Blue',
    disabled: false,
    fullWidth: false,
  },
}

export const TextPurple = {
  args: {
    variant: ButtonVariant.TEXT,
    size: ButtonSize.REGULAR,
    color: ButtonColor.PURPLE,
    label: 'Text Purple',
    disabled: false,
    fullWidth: false,
  },
}

export const TextGreen = {
  args: {
    variant: ButtonVariant.TEXT,
    size: ButtonSize.REGULAR,
    color: ButtonColor.GREEN,
    label: 'Text Purple',
    disabled: false,
    fullWidth: false,
  },
}

export const TextBlue = {
  args: {
    variant: ButtonVariant.TEXT,
    size: ButtonSize.REGULAR,
    color: ButtonColor.BLUE,
    label: 'Text Purple',
    disabled: false,
    fullWidth: false,
  },
}