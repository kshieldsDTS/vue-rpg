<template>
  <p>{{character.name}} the {{character.class}}</p>
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