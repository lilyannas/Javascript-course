<template>
  <div class="weather-wrap">
    <div class="location-box">
      <div class="location">
        New York City
      </div>
      <div class="date">
        Monday 20 January 2021
      </div>
    </div>

    <div class="weather-box">
      <div class="tempeture">9&#8457;</div>
      <div class="weather">Cloudy</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Tempeture',
  props: {
    msg: String
  }
}
</script>