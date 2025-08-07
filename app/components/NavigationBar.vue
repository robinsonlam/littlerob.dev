<template>
  <nav class="navigation-bar">
    <div class="nav-container">
      <!-- Logo/Brand -->
      <NavLink to="/" :hide-active="true"> littlerob. </NavLink>

      <!-- Navigation Links -->
      <div class="nav-links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects"> projects </NavLink>
        <NavLink to="/career"> career </NavLink>
        <NavLink to="/skills"> skills </NavLink>
      </div>

      <span
        class="w-[2px] h-[1rem] mx-[2rem] bg-white hover:bg-yellow-500"
      ></span>

      <!-- Social Links -->
      <div class="nav-social">
        <NavLink href="https://github.com/robinsonlam" target="_blank">
          github.
        </NavLink>
        <NavLink href="https://linkedin.com/in/robinsonlam" target="_blank">
          linkedin.
        </NavLink>
        <NavLink href="https://bsky.app" target="_blank"> bluesky. </NavLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation-bar {
  font-family: "Pixelify Sans", monospace;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: auto;
}

.nav-social {
  display: flex;
  gap: 2rem;
}
</style>
