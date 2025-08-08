<template>
  <nav class="font-sans">
    <div class="flex justify-between items-center px-10 py-10">
      <!-- Logo/Brand -->
      <ULink to="/" active-class="text-white">littlerob.</ULink>

      <!-- Navigation Links -->
      <div class="flex gap-8 ml-auto">
        <ULink to="/">home</ULink>
        <ULink to="/projects">projects</ULink>
        <ULink to="/career">career</ULink>
        <ULink to="/skills">skills</ULink>
      </div>

      <NavigationDivider />

      <!-- Social Links -->
      <div class="flex gap-8">
        <ULink href="https://github.com/robinsonlam" target="_blank">github.</ULink>
        <ULink href="https://linkedin.com/in/robinsonlam" target="_blank">linkedin.</ULink>
        <ULink href="https://bsky.app" target="_blank">bluesky.</ULink>
      </div>
    </div>
  </nav>
</template>
