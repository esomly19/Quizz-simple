<template>
  <div>
<circular-count-down-timer
        :initial-value="120"
        :steps="120"
:size="200"
 @finish="finished"
></circular-count-down-timer>
    <b-nav tabs>
      <b-nav-item disabled><b>Quezzie</b></b-nav-item>
      <b-nav-item disabled>Score: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ],
methods: {
 finished: () => {
        console.log('finished');
 this.$emit();
alert('finished');
    },
}
}
</script>
