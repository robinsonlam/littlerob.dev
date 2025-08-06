<template>
    <nav class="navigation-bar">
        <div class="nav-container">
            <!-- Logo/Brand -->
            <NuxtLink to="/" class="nav-brand">
                littlerob.
            </NuxtLink>

            <!-- Navigation Links -->
            <div class="nav-links">
                <NuxtLink to="/" class="text-pixel-cyan-500" :class="{ 'active': $route.path === '/' }">
                    home
                </NuxtLink>
                <NuxtLink to="/projects" class="nav-link" :class="{ 'active': $route.path === '/projects' }">
                    projects
                </NuxtLink>
                <NuxtLink to="/career" class="nav-link" :class="{ 'active': $route.path === '/career' }">
                    career
                </NuxtLink>
                <NuxtLink to="/skills" class="nav-link" :class="{ 'active': $route.path === '/skills' }">
                    skills
                </NuxtLink>
            </div>

            <span class="nav-divider"></span>

            <!-- Social Links -->
            <div class="nav-social">
                <a href="https://github.com" target="_blank" rel="noopener" class="social-link">
                    github.
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link">
                    linkedin.
                </a>
                <a href="https://bsky.app" target="_blank" rel="noopener" class="social-link">
                    bluesky.
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navigation-bar {
    font-family: 'Pixelify Sans', monospace;
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

.nav-divider {
    height: 1rem;
    width: 1px;
    margin: 0 2rem;
    background: white;
    box-sizing: padding-box;
}

.nav-social {
    display: flex;
    gap: 2rem;
}
</style>