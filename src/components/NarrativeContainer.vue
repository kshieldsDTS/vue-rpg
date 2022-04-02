<template>
    <div class='narrative-container'>
        <p>{{Data[0].text}}</p>
        <p>{{Data[0].text2}}</p>
        <form @submit.prevent='onSubmit'>
            <input :class="Data[0].prompt ? 'prompt' : 'hidden'" type='text' />
            <input type='submit'/>
        </form>
    </div>
</template>

<script>
import Data from '../data/Data'

export default {
    name: 'NarrativeContainer',
    props: {
        id: Number
    },
    data() {
        return {
            Data,
            prompt: '',
        }
    },
    methods: {
        onSubmit() {
            console.log(this.id);
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