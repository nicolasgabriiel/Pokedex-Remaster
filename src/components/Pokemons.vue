<template>
    <li class="container-pokemon">
        <img class="imagem-pokemon"/>
        <p class="numero-pokemon"></p>
        <p class="nome-pokemon"></p>
        <div class="container-tipo">
            <div class="tipo1 ${type[0]}"><span></span></div>
            <div class="tipo2 ${type[1]}"><span></span></div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Pokemons-Component'
})




// https://pokeapi.co/api/v2/pokemon/${id}
</script>

<style scoped></style>