<template>
  <div class="minji">
    <h1>{{ intro }}</h1>
    <div class="content">
      <div class="left">
        <img src="../assets/nj_omg_4.jpg" alt="Photo of Minji">
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
  name: 'minji',
  data () {
    return {
      intro: 'Minji',
      stageName: 'Minji (민지)',
      birthName: 'Kim Minji (김민지)',
      birthday: 'May 07, 2004',
      nationality: 'Korean'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minji {
  background-image: linear-gradient(#c0d4ff, #fff);
  color: #00081a;
}

p {
  text-align: left;
}
</style>