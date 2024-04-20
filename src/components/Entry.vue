<script setup>
import {ref} from 'vue'
const props = defineProps(['yearRange','title','content','imgPath','orgLink'])
</script>


<template>
<div class=" flex  mb-3 animate-fade-left"> 
    <div class="relative bg-white w-1/3 h-full">
        <div :style = "{backgroundImage : `url(${props.imgPath})` }"  class=" bg-center bg-contain bg-no-repeat w-10 h-10   absolute -top-2 right-2  xl:w-20 md:h-20"></div>
    </div>    
    <div class="text-white w-full mr-3">
        <div class="flex ">
            <a :href = "props.orgLink" target="_blank">
                <h1  class=" font-bold cursor-pointer hover:opacity-55 text-xs xl:text-base">{{ props.title }}</h1>
            </a>    
            <h1 class="opacity-45 ml-2 text-xs xl:text-base">{{ props.yearRange }}</h1>
        </div>    
        
            <h1 class=" border-t-2 text-xs xl:text-base">{{ props.content }}</h1>
    </div>

</div>



</template>
