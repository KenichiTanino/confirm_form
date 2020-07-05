<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card v-if="users">
      <v-card-title>
        ユーザー一覧
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索"
          sigle-line
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="10"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="$router.push('/edituser/' + item.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="remove(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <div v-else>
      Now you don't
    </div>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: '名前', value: 'name' },
        { text: 'メールアドレス', value: 'email' },
        { text: 'IPアドレス', value: 'ipaddress' },
        { text: '性別', value: 'gender' },
        { text: 'メモ', value: 'memo' },
        { text: '操作', value: 'actions' }
      ],
      user: {},
    }
  },
  computed: {
    users () {
      return this.$store.getters['getUsers']
    }
  },
  methods: {
    remove (user) {
      const payload = { user: user }
      this.$store.commit('removeUser', payload)
    },
  }
}
</script>