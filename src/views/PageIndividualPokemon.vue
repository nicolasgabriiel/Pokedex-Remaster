<template lang="">
    <div class="box-pai">
      <div class="background-fora">
        <div class="background-dentro">

          <header><!--        Cabeçalho           -->
            <div class="titulo">
              <h1>Pokédex</h1>
            </div>
            <div class="busca_um">
              <router-link class="customer" :to="{ name: 'pokemon', params: { id: idAnt },  query: { reload: true }}" key="reload">{{ idPokemonCompletoAnt }} {{ nomePokemonAnt }} </router-link>
              <router-link class="customer" :to="{ name: 'pokemon', params: { id: idProx},  query: { reload: true }}" key="reload">{{ nomePokemonProx }} {{ idPokemonCompletoProx }}</router-link>
            </div>
            <div class="container_busca_dois">
              <div class="busca_dois"> </div>
              <div class="busca_dois"> </div>
            </div>
            
          </header><!--        Cabeçalho           -->

          <main><!--      Corpo Principal     -->
            <div class="caixa-principal">
              <PokemonIndividual/>
            </div><!--caixa-principal-->
          </main><!--      Corpo Principal     -->

        </div><!--background-dentro-->
      </div><!--background-fora-->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import PokemonIndividual from '../components/IndividualView/PokemonIndividual.vue'

export default defineComponent({
    name:'PAGE-STATUS-POKE',
    components:{
        PokemonIndividual
    },
    mounted() {
        this.trazerTodosOsPokemons()
    },
    data() {
        return {
            idPokemon: "",
            idPokemonN: 0,
            dataPokemon: [],
            nomePokemonAnt: '',
            nomePokemonProx: '',
            idPokemonCompletoAnt: '',
            idPokemonCompletoProx: '',
            idAnt: 0,
            idProx: 0
        }
    }, methods:{
      trazerPokemonAnt(){
        let id = this.$route.params.id;
        this.idPokemon = id.toString();
        this.idPokemonN = parseInt(this.idPokemon)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemonN -1}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.dataPokemon = DataPokemon;
                this.idAnt =  DataPokemon.id;
                this.idPokemonCompletoAnt = 'Nº ' + DataPokemon.id.toString().padStart(4, '0')
                this.nomePokemonAnt = DataPokemon.name.charAt(0).toUpperCase() + DataPokemon.name.slice(1)

            })
            .catch(error => {
                console.error(error);
            });
      },
      trazerPokemonProx(){
        let id = this.$route.params.id;
        this.idPokemon = id.toString();
        this.idPokemonN = parseInt(this.idPokemon)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemonN +1}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.dataPokemon = DataPokemon;
                this.idProx =  DataPokemon.id;
                this.idPokemonCompletoProx = 'Nº ' + DataPokemon.id.toString().padStart(4, '0')
                this.nomePokemonProx = DataPokemon.name.charAt(0).toUpperCase() + DataPokemon.name.slice(1)

            })
            .catch(error => {
                console.error(error);
            });
      },
      trazerTodosOsPokemons(){
        this.trazerPokemonAnt(),
        this.trazerPokemonProx()
      }
    }
})
</script>
<style >
.box-pai {
  font-family: "Flexo-Regular";
}

.background-fora {
  width: 100%;
  min-height: 100vh;
  background-image: url(../assets/images/bg_1.png);

}

.background-dentro {
  width: 70vw;
  min-height: 100vh;
  background-color: white;
  background-image: url(../assets/images/bg_2.png);
  margin: 0px auto;
}

/*           Header           */
.titulo {
  width: 40vw;
  background-color: white;
  margin: 0 auto;
}

.titulo h1 {
  font-size: 30px;
  color: #9F9191;
  font-weight: 400;
  padding: 25px 0 25px 20px;
}
.busca_um{
   width:70vw;
   height: 80px;
   background-color:#616161 ;
   margin:0 auto;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.busca_um .customer{
  margin: auto 35px;
}
.container_busca_dois{
  display: flex;
  justify-content: space-between;
}
.busca_dois:first-child{
  border-radius: 0 0 18px 0 ;
}
.busca_dois{
   width:20vw;
   height: 15px;
   background-color:#616161 ;
   border-radius: 0 0 0 18px;
}
.caixa-principal{
width: 50vw;
max-width: 50vw;
background-color: white;
margin:0 auto;
}
    
</style>