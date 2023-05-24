<template>
    <v-container
    class="bg-grey-darken-4 footer d-inline-flex justify-center"
  >
  <div class="elementFooter" >
    <v-row>
      <v-col cols="lg-4 md-10 sm-10 xs-12">
        <p class="contact">Контакты</p>
        <p class="contactText">8 (800) 300-6-122</p>
        <p class="contactText">press@welcome.moscow</p>
      </v-col>
      <v-col cols="lg-4 md-10 sm-10 xs-12" class="contactText">
        <p class="contactText">О проекте</p>
        <p class="contactText">Вход для партнеров</p>
      </v-col>
      <v-spacer />
      <v-col cols="lg-4 md-10 sm-10 xs-12" class="d-flex">
          <v-btn  variant="text">
            <img src="@/assets/footer/rutube.png" >
          </v-btn>
          <v-btn  variant="text">
            <img src="@/assets/footer/vk.png" >
          </v-btn>
          <v-btn  variant="text">
            <img src="@/assets/footer/dzen.png" >
          </v-btn>
          <v-btn  variant="text">
            <img src="@/assets/footer/tg.png" >
          </v-btn>
          <v-btn variant="text">
            <img src="@/assets/footer/ok.png" >
          </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <div class="w-100 mt-5">
      <v-divider/>
    </div>
    </v-row>
    <v-row>
      <v-col>
        <img src="@/assets/footer/Logo.png" alt="Комитет по туризму города Москвы">
      </v-col>
      <v-col></v-col>
      <div class="mt-5">
        <pre class="politics">Политика конфиденциальности   Политика обработки персональных данных</pre>
        <!-- <br><br>
      <p class="copyRight">{{ new Date().getFullYear() }} — <strong>TeamOne</strong></p> -->
    </div>
    </v-row>
     </div>
    </v-container>
  
 
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style scoped>
.divider{
  max-width: 1224px;
}
.footer{
 max-width: 1440px;
 max-height: 320px;
}
.elementFooter{
 max-width: 1224px;
}
.contact{
  color: rgba(255, 255, 255, 0.5);  
  font-size: 14px;
  margin-bottom: 12px;
}
.contactText{
  font-size: 16px;
  margin-bottom: 12px;
}
.politics{
  font-size: 12px;
}
.copyRight{
  margin: 0 auto;
}
</style>