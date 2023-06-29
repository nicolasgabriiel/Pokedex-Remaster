<template>
  <div class="box-pai">
    <div class="background-fora">
      <div class="background-dentro">

        <header><!--        Cabeçalho           -->
          <div class="titulo">
            <h1>Pokédex</h1>
          </div>
          <div class="busca_um"></div>
          <div class="busca_dois"> </div>
        </header><!--        Cabeçalho           -->

        <main><!--      Corpo Principal     -->
        </main><!--      Corpo Principal     -->

      </div><!--background-dentro-->
    </div><!--background-fora-->
  </div>
</template>

<style scoped> 
/* Importando Fonte */
   @font-face {
      font-family: "Flexo-Regular";
      src: url(../assets/fonts/Flexo/Flexo-Regular/Flexo-Regular.ttf) format('opentype');
    }
/* Estilização */
.box-pai {
      font-family: "Flexo-Regular";
    }
   
    .background-fora {
      width: 100%;
      height: 100vh;
      background-image: url(../assets//images/bg_1.png);
   
    }
   
    .background-dentro {
      width: 70vw;
      height: 100vh;
      background-color: white;
      background-image: url(../assets//images/bg_2.png);
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
   }
   .busca_dois{
       width:20vw;
       height: 18px;
       background-color:#616161 ;
       margin:0 auto;
       border-radius: 0 0 18px 18px;
   }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>


