<script setup>
import { ref, onMounted } from 'vue';

const showOne = ref(true)
const showTwo = ref(false)
const showThree = ref(false)
const showFour = ref(false)
const currentAniClass = ref([])

const hideTimer = (toHide,ms) => {
    currentAniClass.value = ['animate-fade-down', 'animate-once', 'animate-duration-[1300ms]','animate-ease-linear' ,'animate-reverse']
    setTimeout(() => {  
        toHide.value = false
    },ms)
}

const showTimer = (toShow,ms) => {
    setTimeout(() => {
        toShow.value = true
        currentAniClass.value = ['animate-fade-up' ,'animate-duration-[1300ms]' ,'animate-ease-linear']
    },ms)
}


onMounted(() => {hideTimer(showOne,1299),showTimer(showTwo,1299),hideTimer(showTwo,3000),showTimer(showThree,3000)})


</script>


<template>
    <div class=" flex items-center justify-center">   
        <div v-if="showOne" :class = currentAniClass  class=" flex justify-center items-center h-screen">
            <div  class="inline-block h-8 w-8 animate-spin animate-duration-[1500ms] rounded-full border-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
            <span class="text-white text-4xl ml-4">Fetching ./content.json</span>
        </div>
        
        <div v-if="showTwo" :class = currentAniClass  class="text-center">
            <h1 class="text-4xl text-white ">Errno.[403]</h1>
            <h1 class="text-white text-xl">(Forbidden)</h1>
        </div>
        
        <div v-if="showThree" :class = currentAniClass>
            <div class="flex items-center justify-center"  >
                <img src="../assets/trollolo.png" class=" w-16">
                <h1 v-if="showThree" class=" text-4xl text-white m-4 ">JK</h1>
                <img src="../assets/trollolo.png" class=" w-16">
            </div>
            <h1 v-if="showThree" class=" text-4xl text-white m-4 ">Welcome dear Stranger!</h1>

        </div>    
    </div> 
</template>

