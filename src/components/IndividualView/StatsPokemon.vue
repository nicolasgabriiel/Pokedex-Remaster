<template>
    
        <div class="container-stats">
            <h2>Stats</h2>
            <ul >
                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[0]}px`" >
                            
                        </div>
                    </div>
                    <span class="atributo">HP</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[1]}px`">
                            
                        </div>
                    </div>
                    <span class="atributo">Attack</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[2]}px`">
                            
                        </div>
                    </div>
                    <span class="atributo">Defense</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[3]}px`">
                            
                        </div>
                    </div>
                    <span class="atributo">Special Attack</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[4]}px`">
                            
                        </div>
                    </div>
                    <span class="atributo">Special Defense</span>
                </li>

                <li>
                    <div class="coluna-branca">
                        <div class="coluna-azul" :style="`height:${PixelPokemon[5]}px`">
                            
                        </div>
                    </div>
                    <span class="atributo">Speed</span>
                </li>
            </ul>
        </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name:'Stats-Pokemon',
    data(){
        return{
            statsPokemon: [] as number[],
            PixelPokemon: [] as number []
        }
    },
    mounted(){
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(Data => {
                for(let i = 0; i < 6; i++){
                    let DataPokemon = Data.data;
                    this.statsPokemon[i] = DataPokemon.stats[i].base_stat
                    this.PixelPokemon[i] = (1/ (180 /this.statsPokemon[i]))*180
                }
                
            })
            .catch(error => {
                console.error(error);
            });

} 
})



</script>
<style>
.container-stats{
    background-color: #a4a4a4;
    width: calc(25vw - 40px);
    margin: 20px 20px 0 20px;
    border-radius: 5px;
}
.container-stats h2{
    text-align: center;
    padding: 10px 0 5px;
}
.container-stats ul{
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
}
.container-stats ul li{
    margin: 5px;
}

.coluna-branca{
    width: 40px;
    height: 180px;
    background-color: white;
    display: flex;
    align-items: flex-end;
}
.coluna-azul{
    width: 40px;
    background-color: #30a7d7;
}
.atributo{
    text-align: center;
    display: block;
    font-size: 10px;
    max-width: 40px;
    margin-top: 10px;
}
</style>