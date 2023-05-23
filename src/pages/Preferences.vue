<template>
      <UserPreferencesModal />
    <v-container>
      <h2>Рекомендуем для вас</h2>
      <div class="recomendation">
        <v-row class="d-flex justify-center btnSeason">
          <v-btn class="bs" size="large">
          <img src="@/assets/icons/Buttons/Sun.svg" alt="Summer">
          Летний сезон
        </v-btn>
        <v-btn class="ml-8 bs" size="large">
          <img src="@/assets/icons/Buttons/Rainbow.svg" alt="Rainbow">
          Осенний сезон
        </v-btn>
        <v-btn class="ml-8 bs" size="large">
          <img src="@/assets/icons/Buttons/Winter.svg" alt="Winter">
          Зимний сезон
        </v-btn>
        <v-btn class="ml-8 bs" size="large">
          <img src="@/assets/icons/Buttons/Spring.svg" alt="Spring">
          Весенний сезон
        </v-btn>
        </v-row>
        <v-row>
          <v-col cols="lg-3 md-4 sm-8 xs-10">
            <RecomendationCard>
              <template #title> Top 10 Московских пляжей</template>
              <template #describe> Очень крутые пляжи найдете только у нас</template>
            </RecomendationCard>
          </v-col>
          <v-col cols="lg-3 md-4 sm-8 xs-10">
            <RecomendationCard>
              <template #title> Lorem ipsum dolor sit amet.</template>
              <template #describe> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</template>
            </RecomendationCard>
          </v-col>
          <v-col cols="lg-3 md-4 sm-8 xs-10">
            <RecomendationCard>
              <template #title> Lorem ipsum dolor sit amet.</template>
              <template #describe> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</template>
            </RecomendationCard>
          </v-col>
          <v-col cols="lg-3 md-4 sm-8 xs-10">
            <RecomendationCard>
              <template #title> Lorem ipsum dolor sit amet.</template>
              <template #describe> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</template>
            </RecomendationCard>
          </v-col>
          <v-row>
            <v-btn
              class="mx-auto ma-5"
              width="60%"
              color="amber-accent-3"

            >
              Показать ещё
            </v-btn>
          </v-row>
        </v-row>
      </div>
    </v-container>
    


</template>

<script>
import RecomendationCard from '@/components/Recomendations/RecomendationCard.vue';
import UserPreferencesModal from '@/components/UserPreferencesModal.vue';


export default {
  components: { UserPreferencesModal, RecomendationCard }
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
.btnSeason{
  margin: 0 auto;
}
.bs{
  min-width: 174px;
  min-height: 48px;
  background-color: white;
  align-items: center;
  border: 2px solid rgba(245, 223, 184, 0.5);
  border-radius: 12px;
  font-size: 16px;
}
.bs:hover{
  background-color: #FAEFDB;
}

</style>