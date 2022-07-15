<template>
  <div class="wrap">
    <div class="left">
      <DayPilotNavigator id="nav" :config="navigatorConfig" :events="events" />
    </div>
    <div class="content">
      <DayPilotCalendar id="dp" :config="config" ref="calendar" :events="events" />
    </div>
  </div>
</template>

<script>
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-vue'
import Calendar from "@/state/module/calendar";
import calendar from "@/state/module/calendar";
import { mapGetters } from 'vuex'

export default {
  name: 'Calendar',/*
  props: {
    eventsToAdd: Array
  },
  watch: {
    '$store.state.calendar.data.Events': function() {
      console.log(this.$store.getters.getMyCalendarEvents)
    },

  },*/
  data: function() {
    return {
      events: [],
      navigatorConfig: {
        showMonths: 1,
        skipMonths: 1,
        selectMode: "Week",
        onTimeRangeSelected: args => {
          this.config.startDate = args.day;
        }
      },
      config: {
        startDate: DayPilot.today,
        viewType: "Week",
        timeFormat: "EU-eu",
        eventResizeHandling: "Disabled",
        eventMoveHandling: "Disabled",
      },
    }
  },
  components: {
    DayPilotNavigator,
    DayPilotCalendar
  },
  methods: {
    loadEvents() {
      console.log("loadevents")
      this.events = this.$store.getters.getCalendar
      console.log(this.events)
      this.calendar.update(this.events)
    }
  },
  computed : {
    calendar() {
      return this.$refs.calendar.control;
    }

  },
  mounted() {
    this.loadEvents();
  },
}
</script>

<style>

.left {
  margin-right: 10px;
}

.content {
  flex-grow: 1;
}

.navigator_default_busy.navigator_default_cell {
  background-color: #ee4f2e;
  border-radius: 15px;
  color: white;
}

.calendar_default_event_inner {
  background: #2e78d6;
  color: white;
  border-radius: 5px;
  opacity: 0.9;
}

</style>