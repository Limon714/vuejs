
<template>
<li v-for="info in Games" :key="info">
    {{ info }}

</li>

<h2 v-for="details in Employees" :key="details"> 
    {{ details.name }} is {{ details.age }} years old.

</h2>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
           Games:["Cricket","Football","Tenis","Volley"],
           Employees:[
            {
                name :"Rahim",
                age:23
            },
            
            {
                name :"Tahim",
                age:33
            },
            {
                name :"Jahim",
                age:43
            },
            {
                name :"Lahim",
                age:25
            },
            {
                name :"Karim",
                age:28
            },

           ]
        }
    },



    methods: {
       getInfo(){
     
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
