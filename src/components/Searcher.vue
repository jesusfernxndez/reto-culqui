<script setup lang="ts">
import { ref, watch } from 'vue'
const character = ref("")

const emit = defineEmits<{
  (e: 'onChange', value: string): void
}>()

watch(character, () => {
  emit('onChange', character.value)
})
</script>
<template>
  <input type="text" placeholder="Find a character" v-model="character">
</template>
<style scoped>
input {
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  max-width: 300px;
}
</style>