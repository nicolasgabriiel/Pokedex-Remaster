<template>
    <div>
        <h2>Stats</h2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name:'Stats-Pokemon',
    mounted(){
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(Data => {
                let DataPokemon = Data.data;
                console.log(DataPokemon)
            })
            .catch(error => {
                console.error(error);
            });

} 
})



</script>
<style></style>