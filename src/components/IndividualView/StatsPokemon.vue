<template>
    <div>
        <h2>Stats</h2>
        <div class="container-stats">
            <ul >
                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">HP</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">Attack</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">Defense</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">Special Attack</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">Special Defense</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul">
                            
                        </div>
                    </div>
                    <span class="atributo">Speed</span>
                </li>
            </ul>
        </div>
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
<style>
.coluna-branca{
    width: 55px;
    height: 180px;
    background-color: red;
    display: flex;
    align-items: flex-end;
}
.coluna-azul{
    width: 55px;
    height: 10px;
    background-color: blue;
}
</style>