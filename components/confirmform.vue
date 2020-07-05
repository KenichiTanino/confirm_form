<template>
  <v-card>
    <v-subheader> ユーザ編集確認 </v-subheader>
    <v-card-text>
      <form>
        <v-text-field
            v-model="user.name"
            label="名前"
            readonly
        />
        <v-text-field
            v-model="user.email"
            label="Eメール"
            readonly
        />
        <v-radio-group v-model="user.gender" row readonly>
          <v-radio label="男性" value="男性"></v-radio>
          <v-radio label="女性" value="女性"></v-radio>
        </v-radio-group>
        <v-text-field
            v-model="user.ipaddress"
            label="IPアドレス"
            readonly
        />
        <v-text-field
            v-model="user.memo"
            label="メモ"
            readonly
        />

      </form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submit" nuxt>保存</v-btn>
      <v-btn
        color=""
        class="mr-4"
        @click="cancel" 
      >
        戻る
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ['user'], 
  data () {
    return {
      user: this.$props.user,
    }
  },
  computed: {
  },
  methods: {
    submit () {
      this.$router.push({ name: 'saveuser', params: { user: this.$props.user }})
    },
    cancel () {
      this.$router.push({ name: 'editeduser', params: { user: this.$props.user }})
    },
  }
}
</script>