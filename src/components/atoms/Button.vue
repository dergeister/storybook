<template>
  <button
    :class="classes"
    :disabled="disabled"
  >
    <span>{{ label }}</span>
  </button>
</template>
<script>
import {
  ButtonVariant,
  ButtonVariants,
  ButtonSize,
  ButtonSizes,
  ButtonColor,
  ButtonColors 
} from '../../utils/Button'

export default {
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    size: {
      type: String,
      default: ButtonSize.REGULAR,
      validator: (prop) => ButtonSizes.includes(prop)
    },
    variant: {
      type: String,
      default: ButtonVariant.SOLID,
      validator: (prop) => ButtonVariants.includes(prop)
    },
    color: {
      type: String,
      default: ButtonColor.GREEN,
      validator: (prop) => ButtonColors.includes(prop)
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn': true,
        [`btn--${this.size}`]: true,
        [`btn--${this.variant}`]: true,
        [`btn--${this.color}`]: true,
        'btn--full-width': this.fullWidth,
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border: solid 1px magenta;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: solid 2px magenta;
    outline-offset: 1px;
  }

  &:disabled {
    pointer-events: none;
  }

  &--large {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }

  &--regular {
    padding: 0.5rem 1.5rem;
  }

  &--small {
    padding: 0.375rem 1rem;
    font-size: 0.75rem;
  }

  &--full-width {
    width: 100%;
  }
}

.btn--solid.btn--purple {
  background-color: $purple-400;
  border-color: $purple-400;
  color: $gray-100;
  
  &:hover {
    background-color: $purple-500;
  }

  &:active {
    background-color: $purple-400;
  }

  &:focus {
    outline-color: $purple-400;
  }

  &:disabled {
    background-color: $gray-400;
    border-color: $gray-400;
  }
}

.btn--solid.btn--green {
  background-color: $green-400;
  border-color: $green-400;
  color: $gray-100;
  
  &:hover {
    background-color: $green-500;
  }

  &:active {
    background-color: $green-400;
  }

  &:focus {
    outline-color: $green-400;
  }

  &:disabled {
    background-color: $gray-400;
    border-color: $gray-400;
  }
}

.btn--solid.btn--blue {
  background-color: $blue-400;
  border-color: $blue-400;
  color: $gray-100;
  
  &:hover {
    background-color: $blue-500;
  }

  &:active {
    background-color: $blue-400;
  }

  &:focus {
    outline-color: $blue-400;
  }

  &:disabled {
    background-color: $gray-400;
    border-color: $gray-400;
  }
}

.btn--outlined.btn--purple {
  background-color: $gray-100;
  border-color: $purple-400;
  color: $purple-400;
  
  &:hover {
    background-color: $purple-100;
  }

  &:active {
    background-color: $gray-100;
  }

  &:focus {
    outline-color: $purple-400;
  }

  &:disabled {
    background-color: $gray-200;
    border-color: $gray-400;
    color: $gray-400;
  }
}

.btn--outlined.btn--green {
  background-color: $gray-100;
  border-color: $green-400;
  color: $green-400;
  
  &:hover {
    background-color: $green-100;
  }

  &:active {
    background-color: $gray-100;
  }

  &:focus {
    outline-color: $green-400;
  }

  &:disabled {
    background-color: $gray-200;
    border-color: $gray-400;
    color: $gray-400;
  }
}

.btn--outlined.btn--blue {
  background-color: $gray-100;
  border-color: $blue-400;
  color: $blue-400;
  
  &:hover {
    background-color: $blue-100;
  }

  &:active {
    background-color: $gray-100;
  }

  &:focus {
    outline-color: $blue-400;
  }

  &:disabled {
    background-color: $gray-200;
    border-color: $gray-400;
    color: $gray-400;
  }
}
</style>