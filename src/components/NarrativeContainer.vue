<template>
    <div class='narrative-container'>
        <p v-for='text in Data[id].text' :key='text'>{{text}}</p>
        <form v-if='Data[id].prompt' @submit.prevent='onSubmit'>
            <input v-model='prompt' type='text' />
            <input type='submit'/>
        </form>
        <div class='options-container' v-if='Data[id].options'>
            <button 
            @click='selectOption(option.class, option.hp)' :class='option.class' v-for='option in Data[id].options' :key='option.class'>{{option.class}}</button>
        </div>
    </div>
</template>

<script>
import Data from '../data/Data'

export default {
    name: 'NarrativeContainer',
    props: {
        id: Number,
        party: Array,
    },
    data() {
        return {
            Data,
            prompt: '',
        }
    },
    methods: {
        onSubmit() {
            if (!this.prompt) {
                alert('Please fill in the prompt!')
                return
            }
            if (Data[this.id].promptType === 'charName') {
                localStorage.setItem('charName', this.prompt)
            }
            this.$emit('change_id', this.Data[this.id].next);
        },
        selectOption(c, h) {
            localStorage.setItem('mcClass', c)
            const mcCreate = {
                name: localStorage.getItem('charName'),
                class: c,
                maxHP: h,
                currentHP: h,
            }
            this.$emit('mc_create', mcCreate)
            this.$emit('change_id', this.Data[this.id].next);
        }
    }
}

</script>

<style>
.hidden {
    opacity: 0;
    transform: scaleX(0) scaleY(0);
    margin: 0;
    border: 0;
    padding: 0;
}
</style>