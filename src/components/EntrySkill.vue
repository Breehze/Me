<script setup>
import { ref } from 'vue';

const props = defineProps(['skillSetTitle','skillList'])
</script>



<template>
    
    <div class=" w-40 animate-fade-left xl:w-72">
        <h1 class="text-white border-b-2 border-white  border-solid "> {{ props.skillSetTitle }} </h1>
        <div class="flex flex-wrap"> 
            <div v-for=" skill in skillList" class="flex mt-2 mr-2">
                <div :style = "{backgroundImage : `url(${skill.skillImg})`}" class=" bg-contain bg-no-repeat w-10 h-10"></div>
                <div>
                    <h1 class="text-white ml-2">{{ skill.skillName }}</h1>
                    <h1 class="text-white ml-2 text-xs opacity-50">{{ skill.skillSkill }}</h1>
                </div>         
            </div>
            
        </div>
    </div>    

</template>