<template>
  <v-card>
    <v-subheader> ユーザ編集完了 </v-subheader>
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
      <v-btn color="primary" to="/users" nuxt>一覧に戻る</v-btn>
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
  }
}
</script>