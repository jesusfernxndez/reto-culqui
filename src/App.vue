<script setup lang="ts">
import { ref, watch } from 'vue'
import ListCharacter, { CharacterType } from './components/ListCharacter.vue';
import Searcher from './components/Searcher.vue'
import SelectSearchStatus from './components/SelectSearchStatus.vue'
import { CharacterStatusType, getCharacter } from './services/rickAndMorty';

let error = ref(false)
let textError = ref("Escriba un nombre entre 4 y 20 caracteres")
let searchName = ref<string>("")
let searchStatus = ref<CharacterStatusType | undefined>(undefined)

let characters = ref<CharacterType[]>([])

const onChangeInputSearch = async (value: string) => {
  searchName.value = value
}
const onChangeSelectStatusSearch = async (value: CharacterStatusType | undefined) => {
  searchStatus.value = value
}

watch([searchName, searchStatus], async () => {
  if (searchName.value.length < 4 || searchName.value.length > 20) {
    error.value = true
    characters.value = []
    return
  }
  error.value = false
  const data = await getCharacter(searchName.value, searchStatus.value)
  characters.value = data.map((item: any) => ({
    ...item,
    lastKnownLocation: item.location?.name,
    firstSeenIn: item.origin?.name,
    imgUrl: item.image
  }))
})

</script>

<template>
  <div class="page">
    <header class="header">
      <h3>Rick and Morty finder</h3>
    </header>
    <div class="container">
      <img src="https://i.pinimg.com/originals/f8/f3/c3/f8f3c3e177614d714df81f9294ee11ff.png" class="logo"
        alt="Rick and Morty logo" />
      <div class="searcher">
        <Searcher @onChange="onChangeInputSearch" />
        <SelectSearchStatus @onChange="onChangeSelectStatusSearch" />
      </div>
      <div class="errors">
        <small v-if="error">
          {{ textError }}
        </small>
      </div>
      <ListCharacter :characters="characters" v-if="characters.length > 0" />
      <h3 v-else-if="!error">No se encontraron resultados.</h3>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 20rem;
}

div.page>header.header {
  background: #E67095;
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

div.page>header.header>* {
  margin: 0;
  padding: 0;
}

div.page>div.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 60px;
}

div.page>div.container>.searcher {
  margin: 2rem 0;
  display: flex;
  gap: 1rem
}
</style>
