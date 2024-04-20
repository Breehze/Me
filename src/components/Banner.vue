<script setup>
import { ref } from 'vue';
import { computed } from 'vue';


const props = defineProps(['title','shortContent','bgPath'])
const hoveredClass = ref(['sm:w-1/6'])
const hoveredImg = ref(false)
const showText = ref(false)

const onHover = () => {
    hoveredClass.value = ['sm:w-1/3']
    hoveredImg.value = true
    setTimeout(() => {
        showText.value = true
    }, 275);
        
    console.log("I am hovered")
}

const onLeave = () => {
    hoveredClass.value = ['sm:w-1/6']
    hoveredImg.value = false
    showText.value = false
    setTimeout(() => {
        showText.value = false
    }, 290);
}

const backgroundImageStyle = computed(() => {
    console.log({backgroundImage: `url(${props.bgPath})`})
    return {
    backgroundImage: `url(${props.bgPath})`
  };
});

</script>

<template>       
        <div @click = "onHover" @mouseenter = "onHover" @mouseleave = "onLeave" :class = hoveredClass  class="transition-all duration-500 ease-in-out relative  bg-black border-black border-2  h-5/6  w-80 text-white m-5 snap-center">
            <div :style = "backgroundImageStyle" :class = "{ 'opacity-25'  : hoveredImg}"  class="bg-no-repeat bg-cover w-full h-full"></div>
            
            <div class="absolute top-1 mt-2 sm:mt-5 text-xl m-5 w-40 sm:text-4xl">
                <h1 class="">{{ props.title }}</h1>
            </div>    
            
            <div v-if="showText" class="absolute top-20 md:top-32  left-0 ml-5 w-48 xl:w-80 ">
                <slot name = "career"></slot>
            </div>
            
            <div v-if="showText" class="absolute top-20 md:top-32  left-0 ml-3">
                <slot name = "skills"></slot>
            </div>

            <div v-if="showText" class="absolute top-20 md:top-48  right-0 ">
                <slot name = "projects"></slot>
            </div>
            
            <div v-if="showText" class="absolute top-20 md:top-48  left-0 ">
                <slot name = "projectMenu"></slot>
            </div>
            
            
            
            <div v-if="showText" class="transition-all duration-1000 animate-fade-right ease-in-out absolute -bottom-0 right-1 w-4/5 m-9 text-xs xl:text-xl">
                <h1  class="">{{ props.shortContent }}</h1>
            </div>
            
        </div>


</template>

