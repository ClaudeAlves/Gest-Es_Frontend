<template>
  <div class="container">
    <div>
      <Nav_bar/>
    </div>
    <div>
      <router-view/>
    </div>
    <notifications position="bottom left" />
  </div>
</template>

<style>
</style>

<script>
import Nav_bar from "@/components/nav_bar";
export default {
  components: {Nav_bar}
}
</script>


