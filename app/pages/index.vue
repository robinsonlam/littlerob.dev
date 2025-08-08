<template>
  <UContainer class="max-w-none w-auto flex flex-col items-center justify-center mt-[-12rem]">
    <div class="flex flex-col">
      <h1 class="text-4xl">Hello. I am <span class="text-secondary">Rob</span>.</h1>
      <p class="text-base mb-4">
        I like software engineering, robots, pixel games and volleyball.<br>
        Here's a little more about me:
      </p>
      <div class="flex gap-4 justify-start flex-wrap">
        <UButton to="/projects" variant="outline" color="primary">PROJECTS</UButton>
        <UButton to="/career" variant="outline" color="primary">CAREER</UButton>
        <UButton to="/skills" variant="outline" color="primary">SKILLS</UButton>
      </div>
    </div>
  </UContainer>
</template>