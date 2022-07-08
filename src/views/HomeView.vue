<template>
  <div>
    <div class="wrap">
      <h1 class ="page-title">
        Calendrier personnel
      </h1>
    </div>
    <calendar class="calendar-div"/>
  </div>
</template>
<script>
import Calendar from "@/components/calendar";
export default {
  components: {Calendar}
}
</script>