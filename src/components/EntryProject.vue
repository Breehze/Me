<script setup>

const props = defineProps(['projectName','projectPremise','projectGoal','projectTechStack'])

</script>

<template>

<div class="w-44 animate-fade-down sm:w-72">
    <h1 class="text-white text-2xl sm:text-3xl">{{ props.projectName }}</h1>
    <div class="mt-3">
        <h1 class="text-white text-xl border-b-2 w-5/6 sm:text-2xl">Premise:</h1>
        <h1 class="text-white w-5/6 mt-2 text-xs sm:text-base">{{ props.projectPremise }}</h1>
    </div>
    <div class="mt-3">
        <h1 class="text-white text-xl border-b-2 w-5/6 sm:text-2xl">Goal:</h1>
        <h1 class="text-white w-5/6 mt-2 text-xs sm:text-base">{{ props.projectGoal }}</h1>
    </div>
    <div class="mt-3">
        <h1 class="text-white text-xl border-b-2 w-5/6">Tech stack:</h1>
        
        <div class="flex flex-wrap w-5/6"> 
            <div v-for=" framework in projectTechStack" class="flex mt-2 mr-2">
                <div :style = "{backgroundImage : `url(${framework.img})`}" class=" bg-contain bg-no-repeat w-3 h-3 sm:w-5 sm:h-5"></div>
                <div>
                    <h1 class="text-white ml-2 text-xs sm:text-base">{{ framework.name }}</h1>
                </div>         
            </div>
            
        </div>
    
    </div>

</div>



</template>