<template>
  <!-- <v-app>
    <v-main class="container">

      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app> -->

  <v-layout>
      <v-app-bar class="pl-10"  >
       <img src="https://cms2.russpass.ru/media/icons/logomst.svg" alt="" srcset="" width="150" height="150"> 
       <v-btn size="large">
          <v-icon size="large">mdi-hamburger</v-icon>
          Меню
        </v-btn>
        <v-btn size="large">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn size="large">
          Бонусы
          <v-icon size="large">mdi-cash-100</v-icon>
        </v-btn>
        
        <v-spacer />
        <v-btn size="large">
          <img src="@/assets/icons/header/rus_flag.svg" alt="" srcset="">
          RUS / РУС
        </v-btn>
        <v-btn size="large">
          <v-icon size="large">mdi-face-agent</v-icon>
          Поддержка
        </v-btn>
        <v-btn size="large">
          <v-icon>mdi-heart</v-icon>
          Избранное
        </v-btn>
        <v-btn size="large" to="/login">
          <v-icon size="large">mdi-account</v-icon>
          Вход
        </v-btn>
      </v-app-bar>
      <v-main style="min-height: 300px;">
        <v-container>
          <router-view />

        
          <Footer />
          
        </v-container>
      </v-main>
    </v-layout>
    
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "./components/Footer.vue"
import flag from "@/assets/icons/header/rus_flag.svg"

export default {
  components: { Header, Footer },
  data: () => ({
      navItem: [
        
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}

</script>

<style scoped>

.container{
  /* display: flex; */
  /* justify-content: center; */
  /* max-width: 1440px; */
	background: #FAEFDB;
}
</style>