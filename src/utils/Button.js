const ButtonVariant = Object.freeze({
  SOLID: 'solid',
  OUTLINED: 'outlined',
});

const ButtonSize = Object.freeze({
  SMALL: 'small',
  REGULAR: 'regular',
  LARGE: 'large'
});

const ButtonColor = Object.freeze({
  BLUE: 'blue',
  GREEN: 'green',
  PURPLE: 'purple'
});

const ButtonVariants = [
  ButtonVariant.SOLID,
  ButtonVariant.OUTLINED,
];

const ButtonSizes = [
  ButtonSize.SMALL,
  ButtonSize.REGULAR,
  ButtonSize.LARGE,
];

const ButtonColors = [
  ButtonColor.BLUE,
  ButtonColor.GREEN,
  ButtonColor.PURPLE
]

export {
  ButtonVariant,
  ButtonVariants,
  ButtonSize,
  ButtonSizes,
  ButtonColor,
  ButtonColors
}