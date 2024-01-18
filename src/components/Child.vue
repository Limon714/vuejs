<script>
export default {
    name: 'Child',
    props:{
        getIn:Function,
        name:String,
        nam:String,
        
       
    }
    
}
</script>
<template>
<h1> {{ name }}</h1>
<h1> {{ nam }}</h1>
<button v-on:click="getIn()">Get Information</button>
</template>
