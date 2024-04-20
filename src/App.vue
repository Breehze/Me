<script setup>

import { ref } from 'vue';

import Load from './components/Load.vue'
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue';
import Entry from './components/Entry.vue';
import EntrySkill from './components/EntrySkill.vue'
import EntryProject from './components/EntryProject.vue';
import ProjectMenu from './components/ProjectMenu.vue';

const skillSet1 = [{skillName : "Javascript",skillImg:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",skillSkill:"Beginner"},{skillName : "Vue.js",skillImg:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",skillSkill:"Beginner"},{skillName : "TailwindCSS",skillImg:"tw.png",skillSkill:"Beginner"}]
const skillSet2 = [{skillName : "FastAPI",skillImg:"https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg",skillSkill:"Intermediate"},{skillName : "Django",skillImg:"https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png",skillSkill:"Beginner"}]
const skillSet3 = [{skillName : "C",skillImg:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",skillSkill:"Can't say i know it"},{skillName : "Haskell",skillImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/512px-Haskell-Logo.svg.png",skillSkill:"Keen enjoyer"},{skillName : "Python",skillImg:"https://www.svgrepo.com/show/452091/python.svg",skillSkill:"One Trick Pony"}]

const projectNames = ref(['SanctumChat','Portfolio page','Auth server','IO Collabs'])
const activeProject = ref(1)

const projects = ref({ 1 : { prName : "SanctumChat", prPremise : "Paying 10€ for discord Nitro to have gif pfp is kinda meh, so i made my own budget discord." , prGoal : "Apply my knowledge of FastAPI framework, experiment with WebSockets and basic JWT based Auth", prTechStack : [{name : "Vue", img : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"},{name : "Tailwind", img : "tw.png"},{name : "FastAPI", img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},{name : "MongoDB", img : "mon.png"}]},
  2 : { prName : "Portfolio page", prPremise : "-__-" , prGoal : "Get back into Vue and Tailwind", prTechStack : [{name : "Vue", img : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"},{name : "Tailwind", img : "tw.png"}]},
  3 :  { prName : "Auth Server", prPremise : "Implementing auth logic every single time you start a new project is quite annoying, so i made something that is reusable. " , prGoal : "Implement authorization code flow using FastAPI. ", prTechStack : [{name : "FastAPI", img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},{name : "MongoDB", img : "mon.png"}]},
 4: {prName: "IO Collabs", prPremise : "Deimos team couldn't pull this off, and they have titles xD. My take on (See goal)", prGoal : "Try out untrusted server side code execution (Feel free to mess with it).", prTechStack :[{name : "FastAPI",img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},{name : "Docker", img:"https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png"}]}
})

const callback = (inp) => {activeProject.value = inp}
</script>


<template>
    <div class="relative flex flex-col justify-center items-center bg-opacity-95 h-screen w-full font-Inconsolata bg-[url(/bg.svg)] bg-cover">
      <Navbar></Navbar>
        <div class=" w-11/12  grid grid-flow-col overflow-x-auto snap-x snap-mandatory h-screen place-items-center  sm:flex sm:justify-center sm:w-full">
          <Banner short-content="" title="Career & Education" bg-path="career.webp">
            <template #career>
              <Entry org-link="https://playcyberverse.com" img-path="cc1.png" year-range="2021-2023" content="Worked on developing off-chain bots to integrate blockchain into the world of CyberVerse." title="CyberVerse"></Entry>
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
          <Banner bg-path="me.png" short-content="Hey, as you may have seen my name is Boris. I am currently 20 years young. I've been interested in software since the times i can remember. As of right now the most of my free time is distributed between cars, video games and coding. " title="About me"></Banner>
    
        </div>

        <div class=" text-slate-700 opacity-75 text-xs">!This is spaghetti code, DO NOT LOOK AT THE REPO!</div>
      </div>
</template>
