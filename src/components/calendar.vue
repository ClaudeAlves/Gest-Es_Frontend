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

export default {
  name: 'Calendar',
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
      },
    }
  },
  components: {
    DayPilotNavigator,
    DayPilotCalendar
  },
  methods: {
    loadEvents() {
      // placeholder for an HTTP call
      this.events = this.$store.getters.getCalendar.data.MyEvents;
    },
  },
  mounted() {
    this.loadEvents();
  }
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