<!-- Calendar component it has the calendar and the navigator element at the left -->
<template>
  <v-container>
    <div class="wrap">
      <div class="left">
        <DayPilotNavigator id="nav" :config="navigatorConfig" :events="events" />
      </div>
      <div class="content">
        <DayPilotCalendar id="dp" :config="config" ref="calendar" :events="events" />
      </div>
    </div>
  </v-container>



</template>

<script>
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from '@daypilot/daypilot-lite-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'calendar',
  data: function() {
    return {
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
      this.calendar.update(this.events)
    }
  },
  computed : {
    ...mapGetters({
      events: 'getCalendar'
    }),
    calendar() {
      return this.$refs.calendar.control;
    }
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
  border-radius: 6px;
  opacity: 0.7;
}

</style>