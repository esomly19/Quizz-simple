<template>
    <div  class="mx-auto mt-4" style="width: 45%; padding-top:10%; ">
        <div class="card mx-auto p-5">
            <h1 class="h1">Bienvenue sur Quezzie</h1>
            <p>Commencer une partie pour tester vos connaissances sur différents thème </p>
            <h3>Votre pseudo : </h3>
            <input type="text" v-model="pseudo">
            <small class="text-muted">Permet d'établir votre classement</small>
    
          
            <button type="submit" class="btn btn-primary p-2 mt-2" v-on:click="start">Commencer</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'StartGame',
  data() {
      return {
         token: "",
         v: "Sélectionner une ville",
         pseudo: "",
         villes: "",
      }
    },

    mounted() {
        
    },

    methods: {
         start() { 
localStorage.setItem("Pseudo",this.pseudo);
this.$router.push({ path: '/Game/'}) },
    },

    created() {
       
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>