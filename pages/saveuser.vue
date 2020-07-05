<template>
  <v-layout
    column
  >
     <v-flex>
       <SavedForm :user=user />
     </v-flex>
   </v-layout>

</template>

<script>
import SavedForm from '~/components/savedform.vue'
export default {
  data () {
    //TODO: ここでsaveするもの?
    const payload = { user: this.$route.params.user }
    this.$store.commit('updateUser', payload)
    var user =  Object.assign({}, this.$store.getters['getUser'](this.$route.params.user.id));
    return {
      user: user
    }
  },
  components: {
    SavedForm,
  }
}
</script>