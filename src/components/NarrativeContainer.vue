<template>
    <p>{{Data[0].text}}</p>
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

</style>