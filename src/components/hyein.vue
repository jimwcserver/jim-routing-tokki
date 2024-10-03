<template>
  <div class="hyein">
    <h1>{{ intro }}</h1>
    <div class="content">
      <div class="left">
        <img src="../assets/nj_omg_13.jpg" alt="Photo of Hyein">
      </div>
      <div class="right">
        <p>Stage Name: {{ stageName }}</p>
        <p>Birth Name: {{ birthName }}</p>
        <p>Birthday: {{ birthday }}</p>
        <p>Nationality: {{ nationality }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hyein',
  data () {
    return {
      intro: 'Hyein',
      stageName: 'Hyein (혜인)',
      birthName: 'Lee Hyein (이혜인)',
      birthday: 'April 21, 2008',
      nationality: 'Korean'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hyein {
  background-image: linear-gradient(#ddc0ff, #fff);
  color: #0a0014;
}

p {
  text-align: left;
}
</style>