<template>
  <a :href="to" target="_blank" :class="classes">{{ label }}</a>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Link',
    },
    to: {
      type: String,
      default: '#',
    },
    active: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        'nav-link': true,
        'nav-link--active': this.active
      }
    }
  }
}
</script>
<style lang="scss">
.nav-link {
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: $gray-400;
  cursor: pointer;
  font-size: 0.875rem;
  
  &:visited {
    color: $gray-400;
  }

  &:hover {
    color: $purple-400;
  }

  &--active {
    color: $purple-400 !important;
    font-weight: 700;
  }
}
</style>