<template>
  <div class="background-fora">
            <div class="background-dentro">

                <header><!--        Cabeçalho           -->
                    <div class="titulo"><h1>Pokedéx</h1></div>
                    <div class="busca_um"></div>
                    <div class="busca_dois"> </div>
                </header><!--        Cabeçalho           -->
                
                <main><!--      Corpo Principal     -->
                </main><!--      Corpo Principal     -->
           
            </div><!--background-dentro-->
        </div><!--background-fora-->
</template>

<style scoped> 
  /* Importando Fonte */
  @font-face {
    font-family: "Flexo-Regular";
    src: url(../assets/fonts/Flexo/Flexo-Regular/Flexo-Regular.ttf) format('truetype');
}
  .home h1{
    font-family: "Flexo-Regular";
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>


