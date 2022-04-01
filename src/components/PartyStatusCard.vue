<template>
  <p>{{character.name}}</p>
  <p>{{character.class}}</p>
</template>

<script>
export default {
    name: 'PartyStatusCard',
    props: {
        character: Object
    }
}
</script>

<style>

</style>