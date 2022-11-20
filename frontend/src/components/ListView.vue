<template>
    <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Event Name</th>
          <th>Number of Attendees</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in event_data" :key="event">
          <td>{{ event.eventName }}</td>
          <td>{{ event.attendees.length }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    event_data: {
      type: Array,
    },
    data() {
      return {
        event_data: [],
      }
    }
  },
};
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>