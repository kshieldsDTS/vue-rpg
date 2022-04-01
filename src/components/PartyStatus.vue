<template>
  <p>Hello from PartyStatus</p>
  <div :key='character.id' v-for='character in party'>
    <PartyStatusCard :character='character'/>
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

<style>

</style>