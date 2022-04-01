<template>
  <p>Hello from PartyStatus</p>
  <PartyStatusCard />
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