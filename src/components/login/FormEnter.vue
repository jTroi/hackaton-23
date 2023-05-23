<template>
  <v-card class="my-5 mx-auto px-6 py-8" max-width="455">
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

        <v-btn
          color="#FFCF08"
          :loading="loading"
          block
          size="large"
          variant="elevated"
          to="/"
        >
          Sign In 
        </v-btn>
      </v-form>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>

<style scoped>
.btn{
  color: #FFCF08;
}
</style>