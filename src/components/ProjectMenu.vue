<script setup>
import { ref } from 'vue';

const props = defineProps(['projectAmount','projectNames'])

</script>


<template>

<div class=" ml-5 flex flex-col w-fit  ">
    <button  v-for="amount in projectAmount" @click = "$emit('choice',amount)" class= "border-2 text-white p-2 mt-2 rounded-lg  hover:opacity-80 text-xs sm:text-base "> {{ props.projectNames[amount-1] }} </button>
</div>


</template>