
<template>

<h1>Ref in VUE JS</h1>
<input type="text" ref="inputRef">
<br>
<button v-on:click="getInfo">Submit</button>
</template>

<script>

export default {
    name: 'About',
    components:{
       
    },
    data() {
        return {
          
           
         
        }
    },



    methods: {
       getInfo(){
          this.$refs.inputRef.focus()
          this.$refs.inputRef.value="Favorite Web Tech"
          this.$refs.inputRef.style.backgroundColor = "red"
          this.$refs.inputRef.style.color = "white"
          this.$refs.inputRef.style.padding = "20px"
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
