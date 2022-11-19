<template>
  <section class="container">
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">New Clients Within the Last 2 Months</h1>
    <div class="columns">
      <div class="column">
        

      </div>
      <div class="column">
        <div>
          <div>
            <EventBar
              v-if="!loading && !error"
              :label="events"
              :chart-data="labels"
            ></EventBar>
            <EventTable
              v-if="!loading && !error"
              :event_data="event_data"></EventTable>
            <!-- Start of loading animation -->
            <div class="mt-40" v-if="loading">
              <p
                class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                "
              >
                Loading...
              </p>
            </div>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-12 bg-red-50" v-if="error">
              <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg font-bold text-red-900">
                {{ error.message }}
              </p>
            </div>
            <!-- End of error alert -->
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>

  </section>

</template>
<script>
import axios from "axios";
import EventBar from "@/components/BarChartComponent.vue";
import EventTable from "@/components/ListView.vue";

export default {
  components: {
    EventBar,
    EventTable
  },
  data() {
    return {
      labels: [],
      events: [],
      event_data: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    routePush(routeName) {
      this.$router.push({ name: routeName });
    },
    async fetchClients() {
      try {
        this.error = null;
        this.loading = true;
        let apiURL =import.meta.env.VITE_ROOT_API + `/eventdata`;
        const response = await axios.get(apiURL)
        for (let event of response.data) {
          let lastTwoMonths = await axios.get(import.meta.env.VITE_ROOT_API + `/eventdata/lastTwoMonths/` + event._id )
          let amountOfClients = lastTwoMonths.data.length
          this.labels.push(amountOfClients)
          this.events.push(event.eventName)
          this.event_data.push(event)
        }
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchClients()
  },
};
</script>
