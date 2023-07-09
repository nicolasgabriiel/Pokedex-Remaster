<template>
    <header class="header-pokemon">
        <h1>{{ nomePokemon }}</h1>
        <h2>{{ idPokemonCompleto }}</h2>
    </header>
    <main class="corpo">
        <div class="container-principal">
            <div class="parte-esquerda">
                <div class="carrosel-imagens">
                    <CarrosselDeImagens/>
                </div>
                <div class="status-pokemon">
                    <StatsPokemon/>
                </div>
            </div>
            <div class="parte-direita">
                <div class="descricao">
                    <p> {{descricaoPokemon}}</p>
                </div>
                <div class="estatisticas">

                </div>
                <div class="tipos"></div>
                <div class="fraquezas"></div>
            </div>
        </div>
        <div class="container-evolucoes">

        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
import CarrosselDeImagens from './CarrosselDeImagens.vue';
import StatsPokemon from './StatsPokemon.vue';
export default defineComponent({
    name: 'Pokemon-Indiviual-Status',
    components:{
        CarrosselDeImagens,
        StatsPokemon
    },
    data() {
        return {
            idPokemon: '',
            dataPokemon: [],
            nomePokemon: '',
            idPokemonCompleto: '',
            nomeBusca: '',
            descricaoPokemon: ''
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.idPokemon = id.toString()
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.dataPokemon = DataPokemon;
                this.idPokemonCompleto = 'Nº ' + DataPokemon.id.toString().padStart(4, '0')
                this.nomePokemon = DataPokemon.name.charAt(0).toUpperCase() + DataPokemon.name.slice(1)
                this.nomeBusca = 'https://pokeapi.co/api/v2/pokemon-species/' + DataPokemon.name.toString()

            })
            .catch(error => {
                console.error(error);
            });
            axios.get(`${this.nomeBusca}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.descricaoPokemon = DataPokemon.flavor_text_entries[0].flavor_text
                console.log(DataPokemon)
                console.log('https://pokeapi.co/api/v2/pokemon-species/charmander')
                console.log(this.nomeBusca)

                

            })
            .catch(error => {
                console.error(error);
            });    
    }
})
</script>

<style scoped>
.header-pokemon {
    display: flex;
    flex-direction: row;
    font-size: 26px;
    font-weight: bold;
    justify-content: center;
    padding: 40px 0;
}

.header-pokemon h2 {
    color: #616161;
    margin: 0 0 0 15px;
}
</style>