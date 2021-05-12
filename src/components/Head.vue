<template>
  <div>
<circular-count-down-timer
        :initial-value="60"
        :steps="60"
:size="100"
 @finish="finished"
></circular-count-down-timer>
    <b-nav id="ee" tabs>
      <b-nav-item disabled><b>Quezzie</b></b-nav-item>
      <b-nav-item disabled>Score: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Head',
data() {
    return {
  pseudo:"",

}},
  props: [
    'numCorrect',
    'numTotal'
  ],
methods: {
 finished(){
        console.log('finished');
  
    this.pseudo=localStorage.getItem('Pseudo')
axios.post("http://localhost:3400/score", {pseudo: this.pseudo, score: this.numCorrect}).then(res => {
                console.log(res);
               this.$router.push({ path: '/Fin/'})
            }).catch(err => {
                console.log(err)
this.$router.push({ path: '/Fin/'})
            })
        }
   
    },


}

</script>
<style>
#ee{ color:white;}
</style>