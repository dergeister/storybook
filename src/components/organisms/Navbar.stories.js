import Navbar from './Navbar.vue';

import {
  ButtonVariant,
  ButtonSize,
  ButtonColor,
} from '../../utils/Button'

import {
  NavbarVariant,
  NavbarVariants,
} from '../../utils/Navbar'

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: NavbarVariants,
    },
  }
}

export const Complete = {
  args: {
    variant: NavbarVariant.COMPLETE,
    logo: {
      variant: 'primary',
      to: 'https://dietbox.me'
    },
    navLinks: [
      {
        label: 'Planos e Preços',
        to: 'https://pay.dietbox.me'
      },
      {
        label: 'Dietbox Academy',
        to: 'https://academy.dietbox.me/',
        active: true
      },
      {
        label: 'Blog',
        to: 'https://blog.dietbox.me/'
      }
    ],
    navActions: [
      {
        label: 'Experimente Grátis',
        to: 'https://blog.dietbox.me/',
        variant: ButtonVariant.SOLID,
        color: ButtonColor.PURPLE,
        size: ButtonSize.SMALL,
      },
      {
        label: 'Login',
        to: 'https://blog.dietbox.me/',
        variant: ButtonVariant.TEXT,
        color: ButtonColor.PURPLE,
        size: ButtonSize.SMALL,
      },
    ]
  }
}

export const NoActions = {
  args: {
    variant: NavbarVariant.NO_ACTIONS,
    logo: {
      variant: 'primary',
      to: 'https://dietbox.me'
    },
    navLinks: [
      {
        label: 'Planos e Preços',
        to: 'https://pay.dietbox.me'
      },
      {
        label: 'Dietbox Academy',
        to: 'https://academy.dietbox.me/',
        active: true
      },
      {
        label: 'Blog',
        to: 'https://blog.dietbox.me/'
      }
    ],
    navActions: []
  }
}

export const Simplified = {
  args: {
    variant: NavbarVariant.SIMPLIFIED,
    logo: {
      variant: 'primary',
      to: 'https://dietbox.me'
    },
    navLinks: [],
    navActions: []
  }
}