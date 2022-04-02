<template>
    <div class="hp-bar-current" :style="hpVars"></div>
    <div class="hp-bar-max"></div>
    <p>{{character.currentHP}}/{{character.maxHP}} HP</p>
    <p>{{character.name}}</p>
    <p class='character-class'>{{character.class}}</p>
</template>

<script>
export default {
    name: 'PartyStatusCard',
    props: {
        character: Object
    },
    computed: {
        hpVars() {
            return {
                '--width': `${(this.character.currentHP/this.character.maxHP)*24.4}%`,
                '--green': `${(this.character.currentHP/this.character.maxHP)*255}`,
                '--red': `${Math.abs((this.character.currentHP/this.character.maxHP)*255-255)}`
            }
        }
    }
}
</script>

<style scoped>
.hp-bar-max {
    position: absolute;
    width: 24.4%;
    height: 5px;
    background-color: #444;
    z-index: 1;
}
.hp-bar-current {
    position: absolute;
    width: var(--width);
    height: 5px;
    background-color: rgb(var(--red), var(--green), 0);
    filter: brightness(150%);
    z-index: 2;
}
p {
    margin: 0.1em;
    padding: 0.1em;
}
.character-class {
    font-size: 0.8em;
    font-style: italic
}
</style>