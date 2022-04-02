<template>
  <main>
    <NavBar />
    <NarrativeContainer />
    <InventoryMenu />
    <CharacterMenu />
    <PartyStatus :party='party' />
  </main>
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
      party: []
    }
  },
  // methods: {
  //   addPartyMember(newMember) {
  //     this.party = [...this.party, newMember]
  //   }
  // }
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
main {
  height: 100%;
  width: 100%;
}
</style>
