<template>
  <Header />
  <v-container>
    <v-row>
      <h2 class="mx-auto">Путешествия по Росиии <br> начинаются тут!</h2>
    </v-row>

    <v-row>
      <div class="whiteBlock">
        <v-row class="d-flex justify-center ml-4">
            <v-btn class="bs">
              <img class="logo" src="../assets/icons/Buttons/Sun.svg">
            Летний сезон
            </v-btn>
            <v-btn class="ml-4 bs">
              <img class="logo" src="../assets/icons/Buttons/Rainbow.svg">
            Осенний сезон
            </v-btn>
            <v-btn class="ml-4 bs">
            <img class="logo" src="../assets/icons/Buttons/Winter.svg">
            Зимний сезон
            </v-btn>
            <v-btn class="ml-4 bs">
              <img class="logo" src="../assets/icons/Buttons/Spring.svg">
            Весенний сезон
            </v-btn>
        </v-row>
        <v-row>
        <v-card
          class="d-flex justify-center ma-3"
          width="285"
          height="368"
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
         >
              <v-row >
                <v-col>
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      cover
                    >
                      <v-card-title class="text-white" v-text="card.title"></v-card-title>
                    </v-img>
                    
                  </v-card>
                </v-col>
              </v-row>
          </v-card>
        </v-row>
        <div class="d-flex justify-center mt-8">
          <v-btn class="bs" width="600">Показать ещё </v-btn>
        </div>
      </div>
    </v-row>
    
  </v-container>
 
</template>

<script>
import Header from "@/components/Header.vue"

  export default {
   components: { Header},
   data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
      ],
    }),
    methods: {

    }
  }
</script>

<style scoped>
.whiteBlock{
  margin: 40px auto 0;
	background: #FFFBF3;
	max-width: 1332px;
	min-height: 616px;
	border-radius: 4em;
	padding: 48px 54px 0px;
}
.bs{
  display: flex;
  min-width: 174px;
  min-height: 48px;
  background-color: white;
  align-items: center;
  border: 2px solid rgba(245, 223, 184, 0.5);
  border-radius: 12px;
  font-size: 16px;
  margin-left: 24px;
}
.bs:hover{
  background-color: #FAEFDB;
}
</style>
