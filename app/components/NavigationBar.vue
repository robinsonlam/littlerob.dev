<template>
  <nav class="font-sans">
    <div class="flex justify-between items-center px-16 py-12">
      <!-- Logo/Brand -->
      <NavLink to="/" :hide-active="true">littlerob.</NavLink>

      <!-- Navigation Links -->
      <div class="flex gap-8 ml-auto">
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/career">career</NavLink>
        <NavLink to="/skills">skills</NavLink>
      </div>

      <NavigationDivider />

      <!-- Social Links -->
      <div class="flex gap-8">
        <NavLink href="https://github.com/robinsonlam" target="_blank">github.</NavLink>
        <NavLink href="https://linkedin.com/in/robinsonlam" target="_blank">linkedin.</NavLink>
        <NavLink href="https://bsky.app" target="_blank">bluesky.</NavLink>
      </div>
    </div>
  </nav>
</template>
