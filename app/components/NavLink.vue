<template>
  <ULink
    :to="to"
    :href="href"
    :target="target"
    :inactive-class="inactiveClass"
    :active-class="activeClass"
    :class="hoverClass"
    v-bind="$attrs"
  >
    <slot />
  </ULink>
</template>

<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  target?: string
  variant?: 'default'
  hideActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

// Define classes based on variant
const inactiveClass = computed(() => {
  return 'text-white'
})

const activeClass = computed(() => {
  return props.hideActive ? 'text-white' : 'text-cyan-500'
})

const hoverClass = computed(() => {
  return 'hover:text-cyan-500'
})
</script>
