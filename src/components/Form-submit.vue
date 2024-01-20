<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
<h1>Form Submit in VUE JS</h1>
<ul v-for="item in error" v-bind:key="item">
<li >{{ item }} is required</li>
</ul>
<input type="email" placeholder="Enter your email address" v-model="form.email">
<input type="password" placeholder="Enter your password" v-model="form.password">
<select v-model="form.profession">
    <option value="Web Developer">Web Developer</option>
    <option value="App Developer" >App Developer</option>
    <option value="UI/UX DESIGNER">UI/UX DESIGNER</option>
</select>
<button v-on:click="getInfo">Submit</button>
<!-- <h2>{{ form.email }}</h2>
<h2>{{ form.password }}</h2>
<h2>{{ form.profession }}</h2> -->
</template>

<script>
export default {
    name: 'About',
    components: {

    },
    data() {
        return {
            form: {
                email: "",
                password: "",
                profession:""
            },

            error:[],

        }
    },

    methods: {
        getInfo() {
            this.error = []
            for(const item in this.form){
                if(this.form[item]==="" || this.form[item].length===0){
                    this.error.push(item)
                }
            }
            if(this.error.length === 0){
                alert("Data has been submitted successfully")
            }
            console.warn("User information", this.form, this.error)
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
