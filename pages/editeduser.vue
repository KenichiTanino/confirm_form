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
    console.log(this.$route.params);
    var user =  Object.assign({}, this.$route.params.user);
    return {
      user: user
    }
  },
  components: {
    Editform,
  }
}
</script>