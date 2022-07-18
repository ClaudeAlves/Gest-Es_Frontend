<template>
  <div>
    testsMarkView
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TestsView",
  computed: {
    ...mapGetters({
      classes: 'getClasses',
      students: 'getStudents'
    })
  }
}
</script>

<style scoped>

</style>