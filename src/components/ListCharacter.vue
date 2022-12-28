<script setup lang="ts">
import Character from './Character.vue'
export type CharacterType = {
  name: string,
  status: string,
  species: string,
  lastKnownLocation: string,
  firstSeenIn: string,
  imgUrl: string
}
defineProps<{
  characters: CharacterType[]
}>()
</script>
<template>
  <div class="listCharacter">
    <Character v-for="character in characters" :name="character.name" :status="character.status"
      :species="character.species" :lastKnownLocation="character.lastKnownLocation" :firstSeenIn="character.firstSeenIn"
      :imgUrl="character.imgUrl" />
  </div>
</template>
<style scoped>
div.listCharacter {
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>