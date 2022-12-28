<script setup lang="ts">

defineProps<{
  name: string,
  status: string,
  species: string,
  lastKnownLocation: string,
  firstSeenIn: string,
  imgUrl: string
}>()

</script>
<template>
  <div class="character">
    <img :src="imgUrl" :alt="name">
    <div class="content">
      <h3>{{ name }}</h3>
      <p>
        {{ status }} - {{ species }}
        <br />
        Last Known Location:
        <br />
        {{ lastKnownLocation }}
        <br />
        First seen in:
        <br />
        {{ firstSeenIn }}
      </p>
    </div>
  </div>
</template>
<style scoped>
div.character {
  background-color: #A8E8E3;
  color: #242424;
  display: flex;
  flex-direction: row;
  border-radius: .5rem;
  overflow: hidden;
}

div.character>img {
  width: 10rem;
  object-fit: cover;
}

div.character>div.content {
  padding: 1rem;
}

div.character>div.content>* {
  padding: 0;
  margin: 0;
}

div.character>div.content>p {
  margin-top: .5rem;
}
</style>