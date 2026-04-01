<script setup>

import { ref } from 'vue';

import Load from './components/Load.vue'
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue';
import Entry from './components/Entry.vue';
import EntrySkill from './components/EntrySkill.vue'
import EntryProject from './components/EntryProject.vue';
import ProjectMenu from './components/ProjectMenu.vue';

const skillSet1 = [
    {skillName : "Javascript",skillImg:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",skillSkill:"Beginner"},
    {skillName : "Vue.js",skillImg:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",skillSkill:"Beginner"},
    {skillName : "TailwindCSS",skillImg:"https://www.svgrepo.com/show/374118/tailwind.svg",skillSkill:"Beginner"}
]
const skillSet2 = [
    {skillName : "FastAPI",skillImg:"https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg",skillSkill:"Intermediate"},
    {skillName : "Python",skillImg:"https://www.svgrepo.com/show/452091/python.svg",skillSkill:"Intermediate"},
    {skillName : "Go",skillImg:"https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",skillSkill:"Beginner"},
    {skillName : "Java",skillImg:"https://static.vecteezy.com/system/resources/thumbnails/048/332/150/small/java-programming-language-java-logo-free-png.png",skillSkill:"Beginner"},
]
const skillSet3 = [
    {skillName : "C",skillImg:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",skillSkill:"Intermediate"},
    {skillName : "CMake",skillImg:"https://upload.wikimedia.org/wikipedia/commons/9/96/CMake-logo-triangle-high-res.png",skillSkill:"Basics"},
    {skillName : "Solidity",skillImg:"https://www.svgrepo.com/show/374088/solidity.svg",skillSkill:"Intermediate"},
    {skillName : "MongoDB",skillImg:"https://www.svgrepo.com/show/331488/mongodb.svg",skillSkill:"Basics"},
    {skillName : "PostgreSQL",skillImg:"https://www.postgresql.org/media/img/about/press/elephant.png",skillSkill:"Basics"},
    {skillName : "git",skillImg:"https://www.svgrepo.com/show/452210/git.svg",skillSkill:"Intermediate"},
    {skillName : "Docker",skillImg:"https://www.svgrepo.com/show/452192/docker.svg",skillSkill:"Basics"},
    {skillName : "GDB",skillImg:"https://raw.githubusercontent.com/devicons/devicon/master/icons/gnu/gnu-original.svg",skillSkill:"Basics"},
]

const projectNames = ref(['Gale','Typhoon','Auth server'])
const activeProject = ref(1)

const projects = ref({ 
    1 : { 
            prName : "Gale", 
            prPremise : "I've been really enjoying Neovim for the last year and really wanted to build something alike from scratch" , 
            prGoal : "Build a bare-bones terminal text editor", 
            prTechStack : [
                {name : "C", img : "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"},
                {name : "CMake", img : "https://upload.wikimedia.org/wikipedia/commons/9/96/CMake-logo-triangle-high-res.png"},
                {name : "Python", img : "https://www.svgrepo.com/show/452091/python.svg"},
            ]
        },
    2 : { 
            prName : "Typhoon",
            prPremise : "Part of FIIT System Programing and Assemblers coursework." , 
            prGoal : "Implement a UNIX like shell and also make it  remote (something like telnet)", 
            prTechStack : [
                {name : "C", img : "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"},
                {name : "Make", img : "https://media.trustradius.com/product-logos/zN/s4/XOFJUR0XLSMD.PNG"}
            ]
        },
    3 :  { 
            prName : "Auth Server", 
            prPremise : "Implementing auth logic every single time you start a new project is quite annoying, so i made something that is reusable. " , 
            prGoal : "Implement authorization code flow using FastAPI. ", 
            prTechStack : [
                {name : "FastAPI", img : "https://www.itnetwork.sk/images/112150/fastapi/fastapi-1.svg"},
                {name : "MongoDB", img : "https://www.svgrepo.com/show/331488/mongodb.svg"}
            ]
        }
})

const callback = (inp) => {activeProject.value = inp}
</script>


<template>
    <div class="relative flex flex-col justify-center items-center bg-opacity-95 h-screen w-full font-Inconsolata bg-black bg-opacity-95 bg-cover">
      <Navbar></Navbar>
        <div class=" w-11/12  grid grid-flow-col overflow-x-auto snap-x snap-mandatory h-screen place-items-center  sm:flex sm:justify-center sm:w-full">
          <Banner short-content="" title="Career & Education" bg-path="career.png">
            <template #career>
              <Entry org-link="https://playcyberverse.com" img-path="cc1.png" year-range="2021-2023" content="Worked on developing off-chain bots to integrate blockchain into the world of CyberVerse." title="CyberVerse"></Entry>
              <Entry org-link="https://www.nay.sk" img-path="nay.png" year-range="2022-2023" title="NAY.sk" content="Part-time job where i worked as a salesman while sharpening my skills in field of Software Engineering"></Entry>
              <Entry org-link="https://www.fiit.stuba.sk" img-path="fiit.png" year-range="2024-Present" title="STU FIIT" content="Mostly focusing on operating systems and system programming courses. I did enjoy networking courses as well."></Entry>
              <Entry org-link="https://www.sos-it.sk" img-path="sosit.png" year-range="2019-2023" title="SOS IT" content="High school where I acquired CCNA1,CCNA2 and CEFR C1 in english. "></Entry>
            </template> 
          </Banner>
          <Banner short-content="" title="Side projects" bg-path="projects.png" >
            <template #projectMenu>
              <ProjectMenu @choice = "callback" :project-amount="projectNames.length" :project-names="projectNames"></ProjectMenu>
            </template>
            <template #projects>
                <EntryProject :key="activeProject" :project-name="projects[`${activeProject}`]['prName']" :project-goal="projects[`${activeProject}`]['prGoal']" :project-premise="projects[`${activeProject}`]['prPremise']" :project-tech-stack="projects[`${activeProject}`]['prTechStack']"></EntryProject>
            </template>
          </Banner>
          <Banner short-content="" title="Skills" bg-path="Skills.png">
            <template #skills>
              <EntrySkill skill-set-title="Front-End" :skill-list = "skillSet1"  ></EntrySkill>
              <EntrySkill skill-set-title="Back-End" :skill-list = "skillSet2"  ></EntrySkill>
              <EntrySkill skill-set-title="Another" :skill-list = "skillSet3"  ></EntrySkill>
            </template>
          </Banner>
          <Banner bg-path="me.png" short-content="Hey, as you may have seen my name is Boris. I am currently 22 years old. I've been interested in software since high school. I enjoy riding my 2003 NB Miata through beautiful landscapes of Slovakia. " title="About me"></Banner>
    
        </div>
      </div>
</template>
