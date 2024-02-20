<script setup>

import { ref } from 'vue';

import Load from './components/Load.vue'
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue';
import Entry from './components/Entry.vue';
import EntrySkill from './components/EntrySkill.vue'
import EntryProject from './components/EntryProject.vue';
import ProjectMenu from './components/ProjectMenu.vue';

const skillSet1 = [{skillName : "Javascript",skillImg:"data:image/png;base64,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",skillSkill:"Intermediate"},{skillName : "Vue.js",skillImg:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",skillSkill:"Intemediate"},{skillName : "TailwindCSS",skillImg:"tw.png",skillSkill:"Intermediate"}]
const skillSet2 = [{skillName : "FastAPI",skillImg:"https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg",skillSkill:"Intermediate"},{skillName : "Django",skillImg:"https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png",skillSkill:"Beginner"}]
const skillSet3 = [{skillName : "C",skillImg:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",skillSkill:"Where is Carbon?"},{skillName : "Haskell",skillImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/512px-Haskell-Logo.svg.png",skillSkill:"Keen enjoyer"},{skillName : "Python",skillImg:"https://www.svgrepo.com/show/452091/python.svg",skillSkill:"Lower Mastery"}]

const projectNames = ref(['SanctumChat','Portfolio page','Auth server'])
const activeProject = ref(1)

const projects = ref({ 1 : { prName : "SanctumChat", prPremise : "Paying 10€ for discord Nitro to have gif pfp is kinda meh, so i made my own budget discord." , prGoal : "Apply my knowledge of FastAPI framework, experiment with WebSockets and basic JWT based Auth", prTechStack : [{name : "Vue", img : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"},{name : "Tailwind", img : "tw.png"},{name : "FastAPI", img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},{name : "MongoDB", img : "mon.png"}]},
  2 : { prName : "Portfolio page", prPremise : "Make something representative of myself" , prGoal : "Get back into Vue and Tailwind", prTechStack : [{name : "Vue", img : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"},{name : "Tailwind", img : "tw.png"}]},
  3 :  { prName : "Auth Server", prPremise : "Implementing auth logic every single time you start a new project is quite annoying, so i made something that is reusable. " , prGoal : "Implement authorization code flow using FastAPI. ", prTechStack : [{name : "FastAPI", img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},{name : "MongoDB", img : "mon.png"}]}
})

const callback = (inp) => {activeProject.value = inp}
</script>


<template>
    <div class="relative flex justify-center items-center bg-black bg-opacity-95 h-screen w-full font-Inconsolata">
      <Navbar></Navbar>
        <div class=" w-11/12  grid grid-flow-col overflow-x-auto snap-x snap-mandatory h-screen place-items-center  sm:flex sm:justify-center sm:w-full">
          <Banner short-content="" title="Career & Education" bg-path="career.webp">
            <template #career> 
              <Entry org-link="https://playcyberverse.com" img-path="cc1.png" year-range="2021-present" content="Worked on developing off-chain bots to integrate blockchain into the world of CyberVerse." title="CyberVerse"></Entry>
              <Entry org-link="https://www.nay.sk" img-path="nay.png" year-range="2022-2023" title="NAY.sk" content="Part-time job where i worked as a salesman while sharpening my skills in field of Software Engineering"></Entry>
              <Entry org-link="https://www.fiit.stuba.sk" img-path="fiit.png" year-range="2023-2024" title="STU FIIT" content="Managed to pass an entry exam, then dropped out due to issues with professors. I absolutely aced procedural programming though."></Entry>
              <Entry org-link="https://www.sos-it.sk" img-path="sosit.png" year-range="2019-2023" title="SOS IT" content="High school where I acquired CCNA1,CCNA2 and CEFR C1 in english. "></Entry>
            </template> 
          </Banner>
          <Banner short-content="" title="Side projects" bg-path="sideproject.webp" >
            <template #projectMenu>
              <ProjectMenu @choice = "callback" :project-amount="projectNames.length" :project-names="projectNames"></ProjectMenu>
            </template>
            <template #projects>
                <EntryProject :key="activeProject" :project-name="projects[`${activeProject}`]['prName']" :project-goal="projects[`${activeProject}`]['prGoal']" :project-premise="projects[`${activeProject}`]['prPremise']" :project-tech-stack="projects[`${activeProject}`]['prTechStack']"></EntryProject>
            </template>
          </Banner>
          <Banner short-content="" title="Skills" bg-path="skills.webp">
            <template #skills>
              <EntrySkill skill-set-title="Front-End" :skill-list = "skillSet1"  ></EntrySkill>
              <EntrySkill skill-set-title="Back-End" :skill-list = "skillSet2"  ></EntrySkill>
              <EntrySkill skill-set-title="Another" :skill-list = "skillSet3"  ></EntrySkill>
            </template>
          </Banner>
          <Banner short-content="Hey, as you may have seen my name is Boris. I am currently 20 years young. I've been interested in software since the times i can remember. As of right now the most of my free time is distributed between cars, video games and coding. " title="About me"></Banner>-->
    
        </div>
      </div>
</template>