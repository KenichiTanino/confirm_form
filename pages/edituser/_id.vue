<template>
  <v-layout
    column
  >
     <v-flex>
       <Editform :user=user />
     </v-flex>
   </v-layout>

</template>

<script>
import Editform from '~/components/editform.vue'
export default {
  data () {
    var user =  this.$store.getters['getUser'](this.$route.params.id);
    return {
      user: user
    }
  },
  components: {
    Editform,
  }
}
</script>