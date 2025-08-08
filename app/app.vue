<template>
  <div>
    <UApp>
      <NavigationBar />
      <main class="min-h-svh flex">
        <NuxtPage />
      </main>
    </UApp>

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
</style>
