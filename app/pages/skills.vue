<template>
  <div class="skills-page">
    <div class="container">
      <h1 class="page-title">skills.</h1>
      <p class="page-subtitle">Technologies and tools I work with</p>
      
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Languages</h3>
          <div class="skills-list">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Python</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Frameworks</h3>
          <div class="skills-list">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">Nuxt.js</span>
            <span class="skill-tag">React</span>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Tools</h3>
          <div class="skills-list">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  font-family: 'Pixelify Sans', monospace;
  padding: 1rem;
}

.skills-grid {
  display: grid;
  gap: 1rem;
}

.skill-category {
  padding: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.5rem;
}
</style>
