<script>
export default {
    name:'About',
    data(){
        return{
            email:"limonbabu165@gmail.com",
            name:"Limon Islam",
            getAge:function(a){
                return a
            }
        }
    }
}
</script>

<template>
 <h1> Coming from About Page {{ 20+3 }} {{ "hello Limon".length }} {{ email }} <br> name : {{ name == "Mony" }}</h1>
 <h3>{{ getAge("Mehebuba") }}</h3>
</template>

<style scoped>
h1{
    color: chartreuse;
    background-color: black;
    padding: 20px;
}
</style>