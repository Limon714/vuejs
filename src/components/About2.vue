<script>
export default {
    name: 'About',
    data() {
        return {
           name:null,
           age:null
        }
    },
    methods: {
       getInfo(){
       console.log(this.name, "is", this.age ,"years old")
       }
    }
}
</script>

<template>

<input type="text" v-model="name" >
<br>
<input type="number" v-model="age" >
<br>
<button type="submit" v-on:click = "getInfo()"> Submit </button>


</template>


<style scoped>
button {
    color: chartreuse;
    background-color: black;
    margin-top: 10px;
    padding: 10px;
}
</style>
