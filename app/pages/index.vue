<template>
  <div class="home-page">
    <div class="hero-section">
      <h1 class="hero-title">Hello. I am <span class="highlight">Rob</span>.</h1>
      <p class="hero-subtitle">
        I like software engineering, robots, pixel games and volleyball.<br>
        Here's a little more about me:
      </p>
      <div class="hero-buttons">
        <NuxtLink to="/projects" class="hero-btn">PROJECTS</NuxtLink>
        <NuxtLink to="/career" class="hero-btn">CAREER</NuxtLink>
        <NuxtLink to="/skills" class="hero-btn">SKILLS</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  font-family: 'Pixelify Sans', monospace;
  padding: 1rem;
  text-align: center;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-btn {
  padding: 0.5rem 1rem;
  text-decoration: none;
}
</style>