<template>
  <v-app >
    <v-app-bar class="pl-10 ">
       <img src="https://cms2.russpass.ru/media/icons/logomst.svg" alt="" srcset="" width="150" height="150"> 
       <v-btn size="large">
          <v-icon size="large">mdi-menu</v-icon>
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
        <!-- <v-btn size="large" @click="openModal">
          <v-icon size="large">mdi-account</v-icon>
          Enter
        </v-btn> -->

        <v-dialog
          v-model="dialog"
          width="524"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
            >
              <v-icon>mdi-account</v-icon>

              Вход
            </v-btn>
          </template>
          <v-card
            v-modal=dialog
            class="my-5 px-6 py-8">
              <v-form
                v-model="form"
                @submit.prevent="onSubmit"
              >
                <v-text-field
                  v-model="email"
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  clearable
                  label="Email"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="Password"
                  placeholder="Enter your password"
                ></v-text-field>

                <br>
                <v-card-actions>
                  <v-spacer />
                 <v-btn variant="text" @click="dialog = false">
                    Отмена
                  </v-btn>
                  <v-btn
                    color="#FFCF08"
                    :loading="loading"
                    size="large"
                    variant="elevated"
                    width="200"
                  >
                    Войти
                  </v-btn>
                  
                </v-card-actions>
              </v-form>
            </v-card>
        </v-dialog>
      </v-app-bar>
      
      <v-main >
        <v-container>
          <router-view />
        
          <Footer />
          
        </v-container>
      </v-main>
    </v-app>
    
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "./components/Footer.vue"
import SignIn from "./components/Login/Sign.vue"


export default {
  components: { Header, Footer, SignIn },
  data: () => ({
    dialog: false,
      navItem: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
    }
}

</script>

<style scoped>
.header{
 min-height: 1440px;
}
.container{
  /* display: flex; */
  /* justify-content: center; */
  /* max-width: 1440px; */
	/* background: #FAEFDB; */
}
</style>