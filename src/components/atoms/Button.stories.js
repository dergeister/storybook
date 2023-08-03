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
  title: 'Workshop/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ButtonVariants,
    },
    size: {
      control: {
        type: 'select',
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

export const OutlinedPurple = {
  args: {
    variant: ButtonVariant.OUTLINED,
    size: ButtonSize.REGULAR,
    color: ButtonColor.PURPLE,
    label: 'Outlined Purple',
    disabled: false,
    fullWidth: false,
  },
}

export const OutlinedGreen = {
  args: {
    variant: ButtonVariant.OUTLINED,
    size: ButtonSize.REGULAR,
    color: ButtonColor.GREEN,
    label: 'Outlined Purple',
    disabled: false,
    fullWidth: false,
  },
}

export const OutlinedBlue = {
  args: {
    variant: ButtonVariant.OUTLINED,
    size: ButtonSize.REGULAR,
    color: ButtonColor.BLUE,
    label: 'Outlined Purple',
    disabled: false,
    fullWidth: false,
  },
}