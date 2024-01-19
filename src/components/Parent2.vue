
<template>
<h1> User : {{ name }}</h1>
<Child :getInfo="getInfo"/>

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
          
            name:''
         
        }
    },



    methods: {
       getInfo(name){
        this.name=name
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
