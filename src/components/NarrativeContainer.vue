<template>
    <div class='narrative-container'>
        <p>{{Data[0].text}}</p>
        <p>{{Data[0].text2}}</p>
        <form>
            <input :class="Data[0].prompt ? 'prompt' : 'hidden'" type='text' />
            <input type='submit'/>
        </form>
    </div>
</template>

<script>
import Data from '../data/Data'

export default {
    name: 'NarrativeContainer',
    data() {
        return {
            Data
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