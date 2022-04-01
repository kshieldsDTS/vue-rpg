<template>
  <div class='party-bar'>
     <div class='character' :key='character.id' v-for='character in party'>
    <PartyStatusCard :character='character'/>
    </div>
  </div>
</template>

<script>
import PartyStatusCard from './PartyStatusCard.vue'

export default {
    name: 'PartyStatus',
    components: {
        PartyStatusCard
    },
    props: {
        party: Array
    }
}
</script>

<style scoped>
.party-bar {
  color: white;
  background: blue;
  display: flex;
}
.character {
  flex-basis: 25%;
}
</style>