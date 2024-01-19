<script>
export default {
    name: 'Child',
    props:{
        getInfo:Function
    },
    data(){
        return {
            Username:"Rahim"
        }
    }
    
}
</script>


<template>

<button v-on:click="getInfo(Username)">Information</button>


</template>
