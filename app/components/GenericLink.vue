<template>
  <ULink
    :to="to"
    :href="href"
    :target="target"
    :class="linkClasses"
    v-bind="$attrs"
  >
    <slot />
  </ULink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
  target?: string
  variant?: 'default' | 'navigation' | 'social' | 'brand'
  active?: boolean
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  active: false,
  external: false
})

// Base styles using Tailwind v4.1 class composition
const baseClasses = 'font-["Pixelify_Sans",monospace] text-white no-underline transition-all duration-200'

// Variant-specific styles
const variantClasses = {
  default: 'hover:text-pixel-cyan-500',
  navigation: 'hover:text-pixel-cyan-500 hover:underline focus:outline-none focus:text-pixel-cyan-500',
  social: 'text-white/70 hover:text-pixel-cyan-500 hover:underline text-sm',
  brand: 'text-pixel-cyan-500 font-bold text-lg hover:text-pixel-cyan-400'
}

// Active state styles
const activeClasses = 'text-pixel-cyan-500 underline'

// External link styles
const externalClasses = 'after:content-["↗"] after:ml-1 after:text-xs after:opacity-70'

// Compose final classes using computed property
const linkClasses = computed(() => {
  const classes = [baseClasses]
  
  // Add variant styles
  classes.push(variantClasses[props.variant])
  
  // Add active state if active
  if (props.active) {
    classes.push(activeClasses)
  }
  
  // Add external indicator if external
  if (props.external || props.target === '_blank') {
    classes.push(externalClasses)
  }
  
  return classes.join(' ')
})
</script>

<style scoped>
/* Additional CSS for complex compositions that can't be expressed with utilities */
</style>
