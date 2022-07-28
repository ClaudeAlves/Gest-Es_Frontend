<!-- main vue of the application has the navbar, the router dans the notification system -->
<template>
  <v-app>
    <Nav_bar/>
    <v-container class="pt-12">
      <router-view/>
      <notifications position="bottom left" />
    </v-container>
  </v-app>
</template>

<style>
</style>

<script>
import Nav_bar from "@/components/nav_bar";
export default {
  components: {Nav_bar}
}
</script>


