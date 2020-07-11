<template>
  <v-card>
    <v-subheader> ユーザ生成 </v-subheader>
    <v-card-text>
      <form>
        <v-text-field
            v-model="user.name"
            :error-messages="nameErrors"
            label="名前"
            required
            @input=""
            @blur=""
        />
        <v-text-field
            v-model="user.email"
            :error-messages="emailErrors"
            label="Eメール"
            required
            @input=""
            @blur=""
        />
        <v-text-field
            v-model="user.ipaddress"
            :error-messages="ipaddressErrors"
            label="IPアドレス"
            @input=""
            @blur=""
        />
        <v-text-field
            v-model="user.memo"
            :error-messages="ipaddressErrors"
            label="メモ"
            @input=""
            @blur=""
        />

      </form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="{ name: '/confirm', params: { user: user }}" nuxt>確認</v-btn>
      <v-btn
        color=""
        class="mr-4"
        to="/users" nuxt
      >
        一覧に戻る
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    'id': {
      type: String,
    }  
  }, 
  data () {
    console.log(this.$route)
    var user = Object.assign({}, this.$route.params.user)
    console.log(user)
    return {
      user: user,
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
    edit (user) {
      this.user = Object.assign({}, user)
    },
    update () {
      const payload = { user: this.user }
      this.$store.commit('updateUser', payload)
      this.close()
    },
    remove (user) {
      const payload = { user: user }
      this.$store.commit('removeUser', payload)
    },
    close () {
      this.dialog = false
      this.user = {}
    },
  }
}
</script>