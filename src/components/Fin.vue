<template>
  <div>
    <p>Votre score est {{Score}}</p>
    <p>Bravo {{pseudo}}</p>
  </div>
</template>

<script>
export default {
 data() {
    return {
  pseudo:""
    }},
  props: [
    'Score'
  ],
methods: {
 finished: () => {
        console.log('finished');
alert('finished');
    },
},
  mounted: function() {

 this.pseudo = localStorage.getItem('Pseudo')
}
}
</script>
