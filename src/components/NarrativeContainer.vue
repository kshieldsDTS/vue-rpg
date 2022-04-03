<template>
    <div class='narrative-container'>
        <p>{{Data[id].text}}</p>
        <p>{{Data[id].text2}}</p>
        <form v-if='Data[id].prompt' @submit.prevent='onSubmit'>
            <input v-model='prompt' type='text' />
            <input type='submit'/>
        </form>
        <div v-if='Data[id].options'>
            <button v-for='option in Data[id].options' :key='option.class'>{{option.class}}</button>
        </div>
    </div>
</template>

<script>
import Data from '../data/Data'

export default {
    name: 'NarrativeContainer',
    props: {
        id: Number,
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
                const newMember = {
                    id: 0,
                    name: this.prompt
                }
                localStorage.setItem('charName', this.prompt)
                this.$emit('add-party-member', newMember)
            }
            this.$emit('incrementID', this.id+1)
            
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