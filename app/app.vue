<template>
  <div>
    <NavigationBar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <NuxtRouteAnnouncer />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Pixelify Sans', monospace;
}

.main-content {
  padding-top: 80px; /* Account for fixed navbar */
  min-height: calc(100vh - 80px);
}
</style>
