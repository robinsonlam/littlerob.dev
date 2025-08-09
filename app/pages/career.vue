<template>
  <UContainer class="pt-[6rem]">
    <div class="font-sans py-8 md:w-150 lg:w-249 mx-auto">
      <div class="text-center mb-8  ">
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
      >

        <template #date="{ item }">
          <div class="flex flex-row items-start">
            <span class="text-lg text-black font-medium">{{ item.title }}</span>

            <span class="bg-secondary px-2 py-0 inline-block ml-auto text-base font-numbers tracking-wide text-black text-nowrap">
              {{ item.date }}
            </span>
          </div>
        </template>

        <template #title="{ item }">
          <span></span>
        </template>


        <template #description="{ item }">
          <div class="flex gap-1 flex-col">

            <UCollapsible class="flex flex-col gap-2 w-full text-black">
              <div class="flex flex-row justify-between items-end">
                <h2 class="text-md text-primary-600">{{ item.company }}</h2>
                <UButton
                    label="Role Details..."
                    color="neutral"
                    trailing-icon="i-lucide-chevron-down"
                    class="cursor-pointer justify-between text-xs"
                  />
              </div>
  
              <template #content>
                <p class="text-xs text-black text-wrap whitespace-pre-wrap pt-2">{{ item.description }}</p>
              </template>
            </UCollapsible>

          </div>
        </template>
      </UTimeline>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const careerItems: TimelineItem[] = [
  {
    date: 'Apr 2024 - Jul 2025',
    title: 'Senior Software Engineer',
    company: 'UBET / ubet.io',
    description: "Led end-to-end development of two major promotional features that enhanced user acquisition and retention while reducing promotional abuse; \n\nHot Bets\nDeveloped a dynamic promotion system enabling users to access premium odds, driving both new user acquisition and existing customer engagement.\n\nUCASH Bonus Wallet\nArchitected a comprehensive promotional balance system allowing users to earn credits through marketing campaigns and tournaments, with built-in turnover requirements to minimize abuse and protect business margins.\n\nBoth were built using Nest.js microservices architecture with Kafka event-driven communication, ensuring high performance and reliability across the promotions domain.\n\nCollaborated closely with Product Owners, Business Analysts, and QA teams to gather requirements, define technical specifications, and deliver complete software solutions from concept to production.\n\n(React / Next.js / MUI / Nest.js / TypeORM / SQL / MongoDB / Kafka / Elastic)",
  }, {
    date: 'Apr 2019 - Feb 2024',
    title: 'Full Stack Software Engineer / Team Lead (Scheduling & Timeoff)',
    company: 'Playvox / AgyleTime',
    description: "- Created, maintained and oversaw the Scheduling and Leave domain and their multitude of features\n\n- Mentored several engineers following SOLID principles, steering teams towards event driven architecture and strong testing suites\n\n- Provided expert technical and business domain knowledge around products and their technical functionality\n\n- Architecting & developing major features end-to-end for a workforce management platform. \n\n- Provided on-call and T3 support, debugging, root cause and impact analysis as well as developing fixes.\n\n(Angular.js, Vue3, MongoDB, AWS, ECS, CloudWatch, Serverless, Lambda, Datadog, PagerDuty)",
  }, {
    date: 'Nov 2016 - Feb 2018',
    title: 'UI/UX & Full Stack Software Engineer (QE:Touch)',
    company: 'Qantas / Prismatik',
    description: "- Conducted UX testing with users on-site and developed processes to attain valuable user feedback\n\n- Provided professional technical knowledge to make purposeful and valuable decisions during development\n\n- Leading the design and front-end development for an in-house application developed for Engineers to streamline their workflow. \n\n (React, React Native, Cordova, Node.js, AWS, SES)",
  }, {
    date: 'Feb 2016 - Aug 2016',
    title: 'Front End Developer',
    company: 'Jaxsta Music',
    description: "- Built and maintained the UI as the sole front-end engineer for a music credentials database (IMDB for artists)\n\n (Vue, Ruby on Rails)",
  }, {
    date: 'Nov 2015 - Ongoing',
    title: 'Contract/Freelance Full Stack Engineer',
    company: 'For The People Agency, Snepo Research & Various Businesses & Companies',
    description: "- Conducted UX testing with users on-site and developed processes to attain valuable user feedback\n\n- Provided professional technical knowledge to make purposeful and valuable decisions during development\n\n- Leading the design and front-end development for an in-house application developed for Aircraft Maintenance Engineers to streamline their workflow. (React, React Native, Cordova, Node.js, AWS)\n\n- Front-end for client-facing websites for digital agencies, councils and small businesses (HTML, CSS, React, Ember, Angular)\n\n- Marketing touch-screen application for a leading automotive industry (React Native, CSS)\n\n- Web-scraping museum display application (Ruby on Rails)\n\n- UI and front-end logic for various dashboards",
  },
]
</script>
