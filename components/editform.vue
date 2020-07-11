<template>
  <v-card>
    <v-subheader> ユーザ編集 </v-subheader>
    <v-card-text>
      <form>
       <validation-observer ref="validationObserver" tag="div">
        <v-text-field
            v-model="edituser.name"
            label="名前"
            required
        />
        <validation-provider v-slot="{ errors }" rules="required|email" name="email" >
          <v-text-field
            v-model="edituser.email"
            label="Eメール"
            :error-messages="errors"
          />
        </validation-provider>
        <v-radio-group v-model="edituser.gender" row>
          <v-radio label="男性" value="男性"></v-radio>
          <v-radio label="女性" value="女性"></v-radio>
        </v-radio-group>
        <validation-provider v-slot="{ errors }" rules="required|ipaddr" name="ipaddr" >
          <v-text-field
            v-model="edituser.ipaddress"
            label="IPアドレス"
            :error-messages="errors"
          />
        </validation-provider>
        <v-text-field
            v-model="edituser.memo"
            label="メモ"
        />
       </validation-observer>
      </form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submit(edituser)">確認</v-btn>
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
  props: ['user'], 
  data () {
    var edituser =  Object.assign({}, this.$props.user);
    return {
      edituser: edituser,
    }
  },
  computed: {
  },
  methods: {
    async submit (edituser) {
      const isValid = await this.$refs.validationObserver.validate();
      if (!isValid) return false;
      this.$router.push({ name: 'confirmuser', params: { user: edituser }})
    },
  }
}
</script>