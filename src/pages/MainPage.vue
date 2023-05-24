<template>
    <v-container>
      <h2>Путешествия по России начинаются здесь!</h2>
      <div class="recomendation elevation-5">
        <v-row class="d-flex justify-center mx-10">
          <v-col class="d-flex justify-center" cols="lg-3 md-3 sm-3 xs-10">
            <v-btn class="bs">
              <img class="logo" src="../assets/icons/Buttons/Sun.svg">
            Летний сезон
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center" cols="lg-3 md-3 sm-3 xs-10">
            <v-btn class="bs">
              <img class="logo" src="../assets/icons/Buttons/Rainbow.svg">
            Осенний сезон
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center" cols="lg-3 md-3 sm-3 xs-10"> 
            <v-btn class="bs">
            <img class="logo" src="../assets/icons/Buttons/Winter.svg">
            Зимний сезон
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center" cols="lg-3 md-3 sm-3 xs-10">
            <v-btn class="bs">
              <img class="logo" src="../assets/icons/Buttons/Spring.svg">
            Весенний сезон
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="lg-3 md-8 sm-8 xs-10"
            v-for="item in imgSource"
            :key="item"
            >
            <v-card
              class="mx-auto"
              max-width="288"
              min-width="250"
              rounded="xl"
            >
              <v-img
                class="text-white"
                :src= item.url
                min-height="348"
                cover
              >
                <v-card-title class="mt-2">
                  {{ item.title }}
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row >
            <v-col class="d-flex justify-center" cols="12">
              <v-btn
                class="btnPlan ma-5"
                color="#F5F5F5"
              >
                Спланировать самостоятельно
              </v-btn>
            </v-col>
          </v-row>
      </div>
    </v-container>
</template>

<script>
import RecomendationCard from '@/components/Recomendations/RecomendationCard.vue';
import UserPreferencesModal from '@/components/UserPreferencesModal.vue';


export default {
  components: { UserPreferencesModal, RecomendationCard },
  data: () => ({
    imgSource: [
      {title:'Text Name Carad', url: "src/assets/recommendations/1.jpg"},
      {title:'Text Name Carad3', url: "src/assets/recommendations/2.jpg"},
      {title:'Text Name Carad3', url: "src/assets/recommendations/3.jpg"},
      {title:'Text Name Carad3', url: "src/assets/recommendations/4.jpg"},

    ]
  })
}
</script>

<style scoped>
.recomendation{
background: white;
min-height: 500px;
border: 2px;
border-radius: 3em;
margin-top: 5px;
padding: 30px;
}

.bs{
  min-width: 230px;
  min-height: 48px;
  background-color: white;
  align-items: center;
  border: 2px solid rgba(245, 223, 184, 0.5);
  border-radius: 12px;
  font-size: 14px;
  /* margin: 8px; */
}
.bs:hover{
  background-color: #FAEFDB;
}
.btnPlan{
  min-width: 50%
}
</style>