<template>
<nav :class="classes">
  <a class="navbar__logo" :href="logo.to">
    <Logo :variant="logo.variant" />
  </a>
  <div class="navbar__links">
    <NavLink 
      v-for="link in navLinks"
      :label="link.label"
      :to="link.to"
      :active="link.active"
    />
  </div>
  <div 
    v-if="showActions"
    class="navbar__actions"
  >
    <Button
      v-for="action in navActions"
      :label="action.label"
      :variant="action.variant"
      :color="action.color"
      :size="action.size"
    />
  </div>
</nav>
</template>
<script>
import Logo from '../atoms/Logo.vue';
import Button from '../atoms/Button.vue';
import NavLink from '../atoms/NavLink.vue';

import { NavbarVariant, NavbarVariants } from '../../utils/Navbar';

export default {
  components: {
    Logo,
    Button,
    NavLink
  },
  props: {
    logo: {
      type: Object,
      required: true
    },
    navLinks: {
      type: Array,
      required: true
    },
    navActions: {
      type: Array,
      required: true
    },
    variant: {
      type: Boolean,
      default: NavbarVariant.COMPLETE,
      validator: (prop) => NavbarVariants.includes(prop)
    }
  },
  computed: {
    classes() {
      return {
        'navbar': true,
        'navbar--simplified': this.variant == NavbarVariant.SIMPLIFIED
      }
    },
    showActions() {
      return this.variant != NavbarVariant.SIMPLIFIED;
    }
  },
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: $gray-100;

  &--simplified {
    justify-content: center;
  }

  &__logo {
    cursor: pointer;

    &:hover {
      .svg-logo {
        transform: scale(1.02);
      }
    }
  }

  &__links {
    .nav-link + .nav-link {
      margin-left: 1rem;
    }
  }

  &__actions {
    display: flex;
    min-width: 150px;

    .btn + .btn {
      margin-left: 1rem;
    }
  }
}
</style>