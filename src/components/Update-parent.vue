
<template>

<Child :pro="profession" :info="getInfo"/>

</template>

<script>
import Child from './Child.vue'
export default {
    name: 'About',
    components:{
        Child
    },
    data() {
        return {
          
          profession:"Developer"
         
        }
    },



    methods: {
       getInfo(){
         alert("Everyday is beautiful")
       }
    }
}
</script>





<style scoped>
h2 {
    color: chartreuse;
    background-color: black;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
}
</style>
