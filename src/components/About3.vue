
<template>

<h2>Profession</h2>
<input type="radio" id="Developer" v-model="profession" name="profession" value="Developer">
<label for="Developer">Developer</label>

<br>
<input type="radio" id="Student" v-model="profession" name="profession" value="Student">
<label for="Student">Student</label>

<br>
<input type="radio" id="Teacher" v-model="profession" name="profession" value="Teacher">
<label for="Teacher">Teacher</label>
<br>


<h2>Fruits</h2>
<input type="checkbox" name="fruit" v-model="fruit" id="Orange" value="Orange">
<label for="Orange">Orange</label>
<br>

<input type="checkbox" name="fruit" v-model="fruit" id="Apple" value="Apple">
<label for="Apple">Apple</label>
<br>

<input type="checkbox" name="fruit" v-model="fruit" id="Grape" value="Grape">
<label for="Grape">Grape</label>
<br>





<h3>I am a {{ profession }}</h3>
<h3>I Like {{ fruit }}</h3>

</template>

<script>
export default {
    name: 'About',
    data() {
        return {
          profession:null,
          fruit:[]
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
