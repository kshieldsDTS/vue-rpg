<template>
    <progress :class="[(character.currentHP/character.maxHP) > 0.75 ? 'hp-bar-green' : 'hp-bar-red']" :value="character.currentHP" :max='character.maxHP'></progress>
    <p>{{character.currentHP}}/{{character.maxHP}} HP</p>
    <p>{{character.name}}</p>
    <p class='character-class'>{{character.class}}</p>
</template>

<script>
export default {
    name: 'PartyStatusCard',
    props: {
        character: Object
    }
}
</script>

<style scoped>
progress {
    width: 100%
}
.hp-bar-green
p {
    margin: 0.1em;
    padding: 0.1em;
}
.character-class {
    font-size: 0.8em;
    font-style: italic
}
</style>