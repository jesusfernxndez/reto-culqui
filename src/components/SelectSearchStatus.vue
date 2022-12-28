<script setup lang="ts">
import { ref, watch } from 'vue'
import { CharacterStatusType } from '../services/rickAndMorty';
const status = ref<CharacterStatusType | undefined>("all")

const emit = defineEmits<{
  (e: 'onChange', value: CharacterStatusType | undefined): void
}>()

watch(status, () => {
  emit('onChange', status.value)
})
</script>
<template>
  <select v-model="status">
    <option value="all">Todos</option>
    <option value="Alive">Alive</option>
    <option value="Dead">Dead</option>
    <option value="unknown">Unknown</option>
  </select>
</template>
<style scoped>
select {
  font-size: 22px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  max-width: 300px;
}
</style>