<template>
  <v-layout
    column
  >
     <v-flex>
       <ConfirmForm :user=user />
     </v-flex>
   </v-layout>

</template>

<script>
import ConfirmForm from '~/components/confirmform.vue'
export default {
  data () {
    var user =  this.$route.params.user;
    return {
      user: user
    }
  },
  components: {
    ConfirmForm,
  }
}
</script>