<template>
  <div class="danielle">
    <h1>{{ intro }}</h1>
    <div class="content">
      <div class="left">
        <img src="../assets/nj_omg_10.jpg" alt="Photo of Danielle">
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
  name: 'danielle',
  data () {
    return {
      intro: 'Danielle',
      stageName: 'Danielle (다니엘)',
      birthName: 'Danielle Marsh',
      birthday: 'April 11, 2005',
      nationality: 'Korean-Australian'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danielle {
  background-image: linear-gradient(#fffec0, #fff);
  color: #161500;
}

p {
  text-align: left;
}
</style>