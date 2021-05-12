<template>
    <div>
 
       
 
    <div class="card-header">Classement TOP 20</div>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Pseudo</th>
                <th scope="col">Score</th>
               
            </tr>
        </thead>
        <tbody>
            <tr v-for="score in listeScores" :key="score.id">
                <td>{{score.id}}</td>
                <td>{{score.Pseudo}}</td>
                <td>{{score.score}}</td>
        
            </tr>
        </tbody>
        </table>
    </div>    

</template>

<script>
import axios from 'axios'
export default {
  name: 'Classement',
  data() {
      return {
         listeScores: "",
         joueur: "",
      
        
    
      }
    },
    mounted() {
        
    },
    methods: {
     
    },
    created() {
        axios.get("http://localhost:3400/getScore").then(res => {
            this.listeScores = res.data.scores
   console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>
