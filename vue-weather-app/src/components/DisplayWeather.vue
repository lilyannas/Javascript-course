<template>
  <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
    <div class="location-box">
      <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
      <div class="date">{{ dateBuilder() }}</div>
    </div>

    <div class="weather-box">
      <div class="temp">{{ Math.round(weather.main.temp) }}°</div>
      <div class="weather">{{ weather.weather[0].main }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "displaWeather",
  props: {
      weather: {
          Type: () => ({}), // type object
          default: {}
      }
  },
  methods: {
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>
