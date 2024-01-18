
<template>
<Child name="Rana"/>
<Child  name="kana"/>
<Child  :nam="nami" :getIn="getInfo"/>

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
           nami:"Lion",
          
         
        }
    },



    methods: {
       getInfo(){
         alert ("funciton called")
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
