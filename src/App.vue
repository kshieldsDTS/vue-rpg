<template>
  <NavBar />
  <NarrativeContainer />
  <InventoryMenu />
  <CharacterMenu />
  <PartyStatus :party='party' />
</template>

<script>
// Imports
import NavBar from './components/NavBar.vue'
import NarrativeContainer from './components/NarrativeContainer.vue'
import InventoryMenu from './components/InventoryMenu.vue'
import CharacterMenu from './components/CharacterMenu.vue'
import PartyStatus from './components/PartyStatus.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NarrativeContainer,
    InventoryMenu,
    CharacterMenu,
    PartyStatus
  },
  data() {
    return {
      party: [
        {
          id: 0,
          name: 'Valdyr',
          class: 'Monk',
          maxHP: 20,
          currentHP: 10,
        },
        {
          id: 1,
          name: 'Zaakia',
          class: 'Berserker',
          maxHP: 25,
          currentHP: 5,
        },
        {
          id: 2,
          name: 'Valysra',
          class: 'Assassin',
          maxHP: 18,
          currentHP: 9,
        },
        {
          id: 3,
          name: 'Anders',
          class: 'Cleric',
          maxHP: 16,
          currentHP: 16,
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
