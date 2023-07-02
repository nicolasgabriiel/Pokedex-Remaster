<template>
    <li class="container-pokemon" v-for="indice in IndiceDeBusca" :key="indice">
        <img class="imagem-pokemon" :src="PokemonImagens[indice]" />
        <p class="numero-pokemon">Nº{{ PokemonIds[indice] }}</p>
        <p class="nome-pokemon">{{ PokemonNames[indice] }}</p>
        <div class="container-tipo">
            <div class="tipo1" :class="PokemonType1[indice]"><span>{{ PokemonType1[indice] }}</span></div>
            <div class="tipo2" :class="PokemonType2[indice]"><span>{{ PokemonType2[indice]}}</span></div>
        </div>
    </li>
    <button @click="verMais" :class="{hide: !BotaoVisivel}" class="botao-ver-mais" >Carregar Mais Pokémons</button>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import axios from 'axios';


export default defineComponent({
    name: 'Pokemons-Component',
    data(){
        return{
            LimitadorPokemon: 30,
            IndiceDeBusca: [] as number[],
            PokemonImagens: [''],
            PokemonIds: [''],
            PokemonNames: [''],
            PokemonType1: [''],
            PokemonType2: [''],
            //Botão
            BotaoVisivel: true,
            CarregamentoAutomatico: false
        }
    },methods:{
        verMais(){
        if(this.LimitadorPokemon < 1010){
            this.LimitadorPokemon = this.LimitadorPokemon +5
        }else{
            this.LimitadorPokemon = 1010
        }
            this.TrazerPokemons()
            this.BotaoVisivel = false
            this.CarregamentoAutomatico = true
        },
        TrazerPokemons(){
        for(let i = 0; i < this.LimitadorPokemon; i++){
            this.IndiceDeBusca[i] = i
            let idPokemon = i +1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then(Data => {
        let DataPokemon = Data.data;
        this.PokemonImagens[i] = DataPokemon.sprites.other['official-artwork'].front_default
        this.PokemonIds[i] =  DataPokemon.id.toString().padStart(3, '0')
        this.PokemonNames[i] = DataPokemon.name
        const types = DataPokemon.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name)
        this.PokemonType1[i] = types[0]
        this.PokemonType2[i] = types[1]
      })
      .catch(error => {
        console.error(error);
      });
  }
},
handleScroll() {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (this.CarregamentoAutomatico == true && scrollPosition + windowHeight >= fullHeight) {
        this.verMais();
      }
    },
    },
    mounted() {
        this.TrazerPokemons()
        window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
})
</script>

<style scoped>
.container-pokemon{
    margin-top: 50px;
    background-color: white;
    width: 10vw;
    border: 14px solid white;
    box-sizing: border-box;
    font-family: "Flexo-Regular";
    transition: transform 0.2s ease;
    cursor: pointer;
}
.container-pokemon:hover{
    transform: translateY(-5px);
}
.imagem-pokemon{
    background-color: #F2F2F2;
    height: 205px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
}
.numero-pokemon{
    color: #919191;
    width: 90%;
    margin: 4px auto;
    font-size: 12.8px;
    font-weight: bold;
    text-align: left;
}
.nome-pokemon{
    color:black;
    width: 90%;
    margin: 10px auto;
    font-size: 20px;
    text-align: left;
    font-weight: 500;
}
.nome-pokemon::first-letter{
text-transform: uppercase;
}
.container-tipo{
 display: flex;
 flex-direction: row;
}
.tipo1, .tipo2{
    display: inline-block;
    width: 73px;
    height: 18px;
    background-color: #919191;
    border-radius: 9px; 
    display: inline-block;
    text-align: center;
    line-height: 19px;
    font-size: 14px;
}
.tipo1{margin:5px 0px 5px 5%;}
.tipo2{margin:5px 5px 5px 2px;}
.imagem-pokemon{cursor: pointer;}
.botao-ver-mais{
    background-color: #30a7d7;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.75em 1.25em 0.65em;
    text-align: center;
    font-family: "Flexo-Regular";
    font-size: 14px;
    font-weight: bold;
    border:  0;
    margin: 30px 0 50px;
    box-shadow: 10px 10px 8px -7px rgba(3,10,125,0.4);
    transition: 0.2s;
}
.botao-ver-mais:hover{
    scale: 1.02;
    background-color: #1679a0;
}









/* Cores de acordo com os types */
.tipo2{
    background-color: rgba(0, 0, 0, 0);
}
.steel {
	background-color: #9eb7b8 ;
}
.fire {
    color: white;
	background-color: #fd7d24;
}
.grass {
	background-color: #9BCC50;
}
.electric {
	background-color: #EED535;
}
.water{
	background-color: #4592c4;
    color:white
}
.ice {
	background-color: #51c4e7;
}
.ground {
	background-image:linear-gradient(to bottom, #f7de3f , #ab9842 );
}
.rock {
	background-color: #a38c21;
    color: white;
}
.fairy {
	background-color: #fdb9e9;
}
.poison {
    color: white;
	background-color: #b97fc9;
}
.bug {
	background-color: #729f3f;
    color:white;
}
.dragon {
	background-image: linear-gradient(to bottom, #53a4cf , #f16e57 );
}
.psychic {
	background-color: #f366b9;
    color: white;
}
.flying {
	background-image: linear-gradient(to bottom, #5EB2E3, #bdb9b8);
}
.fighting {
	background-color: #d56723;
    color: white;
}
.normal {
	background-color: #A4ACAF;
}
.undefined{
    display: none;
}
.ghost{
    background-color: #7b62a3;
}
.dark{
    background-color: #707070;
    color: white;
}
.undefined{
    display: none !important;
}
.hide{
    display: none !important;
}
</style>