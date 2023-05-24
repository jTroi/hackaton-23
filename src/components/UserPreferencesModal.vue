<template>
  <v-row justify="start">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="ma-10"
          color="amber-accent-3"
          v-bind="props"
        >
          Указать предпочтения
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Выбирете предпочтения которые подходят Вам
        </v-card-title>
        <v-card-subtitle>
          Укажите, что больше всего подходит именно Вам
        </v-card-subtitle>
        <v-card-text>

          <v-divider class="mb-5" />
          
          <v-container>
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          cols="auto"
          class="py-1 pe-0"
        >
          <v-chip
            :disabled="loading"
            closable
            @click:close="selected.splice(i, 1)"
          >
            <v-icon
              :icon="selection.icon"
              start
            ></v-icon>

            {{ selection.text }}
          </v-chip>
        </v-col>

        <v-col
          v-if="!allSelected"
          cols="12"
        >
          <v-text-field
            ref="search"
            v-model="search"
            hide-details
            label="Поиск"
            single-line
          ></v-text-field>
          <!-- <v-btn
              icon="mdi-magnify"
              @click="$refs.search.focus()"
            >
            </v-btn> --> 
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list>
      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.text"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <template v-slot:prepend>
            <v-icon
              :disabled="loading"
              :icon="item.icon"
            ></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn>
        Отмена
      </v-btn>
      <v-btn
        :disabled="!selected.length"
        :loading="loading"
        color="purple"
        variant="text"
        @click="next"
      >
        Выбрать
      </v-btn>
    </v-card-actions>

         
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      items: [
        {text: 'Спорт', icon: 'mdi-account', category: '1'},
        {text: 'Море', icon: 'mdi-nature', category: '1'},
        {text: 'Природа', icon: 'mdi-map-marker', category: '2'},
        {text: 'Прогулка', icon: 'mdi-weather-sunny-alert', category: '3'},
        {text: 'Активный образ', icon: 'mdi-account', category: '1'},
        {text: 'Автомобили', icon: 'mdi-nature', category: '1'},
        {text: 'Nature', icon: 'mdi-menu', category: '1'},
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine', category: '1'},
        {
          text: 'Portland',
          icon: 'mdi-map-marker',  category: '1'
        },
        {
          text: 'Biking',
          icon: 'mdi-bike', category: '1'
        },
      ],
      loading: false,
      search: '',
      selected: [],
    }),

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          // this.selected = []
          this.loading = false
          this.dialog = false
        }, 2000)
      },
    },
  }
</script>
