<template>
  <UContainer class="pt-[6rem]">
    <div class="font-sans py-8 md:w-150 lg:w-249 mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-white mb-4">My <span class="text-primary-500">Journey</span></h1>
        <p class="text-white">My professional career timeline</p>
      </div>
      
      <UTimeline  
        :items="careerItems" 
        :default-value="0"
        :ui="{ item: 'even:mr-0 odd:ml-0 md:even:flex-row-reverse md:even:mr-auto md:odd:ml-auto', wrapper: 'w-full md:w-70 lg:w-120'  }"
        color="primary"
        size="lg"
        class="w-full"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const careerItems: TimelineItem[] = [
  {
    date: '2024 - 2025',
    title: 'Senior Software Engineer',
    company: 'UBET.io',
    description: 'TechCorp Solutions\n\nLead development of scalable web applications using React and Node.js. Mentored junior developers and established best practices for code quality and testing. Architected microservices infrastructure supporting 10+ users.',
  },
  {
    date: '2021-2023',
    title: 'Full Stack Developer',
    description: 'StartupXYZ\n\nBuilt MVP from scratch and scaled it to 100K+ users. Implemented real-time features using WebSockets and optimized database performance. Collaborated closely with design and product teams.',
    value: 'fullstack-dev'
  },
  {
    date: '2019-2021',
    title: 'Software Developer Intern',
    description: 'BigTech Inc\n\nDeveloped automation tools that reduced manual testing time by 80%. Created data visualization dashboards for internal metrics. Participated in code reviews and agile development processes.',
    value: 'intern'
  },
  {
    date: '2017-2021',
    title: 'Computer Science Degree',
    description: 'University of Technology\n\nBachelor of Science in Computer Science with focus on software engineering and robotics. Completed senior capstone project in autonomous navigation. Active member of robotics club and volleyball team.',
    value: 'education'
  }
]
</script>
