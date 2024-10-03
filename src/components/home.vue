<template>
  <div class="home">
    <h1>{{ intro }}</h1>
    <img src="../assets/nj_omg_23.jpg" alt="NewJeans group photo">
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      intro: 'Meet NewJeans',
      desc: 'NewJeans is a groundbreaking South Korean girl group formed by ADOR, a subsidiary of HYBE. Since their debut in July 2022, they have quickly captured the hearts of fans worldwide with their fresh sound and innovative style.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-image: linear-gradient(#c0deff, #fff);
  color: #000831;
}

img {
  width: 30rem;
}

p {
  width: 50rem;
}
</style>
