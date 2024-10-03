<template>
  <div class="haerin">
    <h1>{{ intro }}</h1>
    <div class="content">
      <div class="left">
        <img src="../assets/nj_omg_17.jpg" alt="Photo of Haerin">
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
  name: 'haerin',
  data () {
    return {
      intro: 'Haerin',
      stageName: 'Haerin (해린)',
      birthName: 'Kang Haerin (강해린)',
      birthday: 'May 15, 2006',
      nationality: 'Korean'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.haerin {
  background-image: linear-gradient(#c0ffce, #fff);
  color: #001104;
}

p {
  text-align: left;
}
</style>