
<template>
<h1 v-if="check">Condition presence</h1>
<h1 v-else>Condition absence</h1>
<button v-on:click="check=!check">Toggle</button>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
         check:true
        }
    },



    methods: {
       getInfo(){
     
       }
    }
}
</script>



<style>

</style>
