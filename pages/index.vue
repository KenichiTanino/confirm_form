<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          ユーザ一覧サンプル
        </v-card-title>
        <v-btn color="primary" to="/users" nuxt>ユーザ一覧</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>
