<template>
  <div class="hanni">
    <h1>{{ intro }}</h1>
    <div class="content">
      <div class="left">
        <img src="../assets/nj_omg_8.jpg" alt="Photo of Hanni">
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
  name: 'hanni',
  data () {
    return {
      intro: 'Hanni',
      stageName: 'Hanni (하니)',
      birthName: 'Hanni Pham',
      birthday: 'October 6, 2004',
      nationality: 'Vietnamese-Australian'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hanni {
  background-image: linear-gradient(#ffc0ff, #fff);
  color: #130013;
}

p {
  text-align: left;
}
</style>
