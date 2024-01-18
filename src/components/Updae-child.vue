<script>
export default {
    name: 'Child',
    props:{
        name:String,
        pro:Object,
        info:Function
    }
    
    
}
</script>


<template>
<h1> I am a {{ pro}} </h1>
<button v-on:click="info()">Information</button>


</template>
