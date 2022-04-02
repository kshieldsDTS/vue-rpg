<template>
    <div class='nav-bar'>
        <div class='icon'>
            <i class="fa-solid fa-circle-user fa-2x"></i>
            <legend>Characters (C)</legend>
        </div>
        <div class='icon'>
            <i class="fa-solid fa-book fa-2x"></i>
            <legend>Journal (J)</legend>
       </div>
       <div class='icon'>
            <i class="fa-solid fa-coins fa-2x"></i>
            <legend>Inventory (I)</legend>
       </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
    background-color: blue;
    color: white;
    display: flex;
    padding: 0.3em;
}
.icon {
    padding: 0.1em;
}
</style>