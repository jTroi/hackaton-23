<template>
  <v-card
    class="mx-auto ma-5"
    max-width="380"
    height="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <slot name="describe"></slot>

    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Посетить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>