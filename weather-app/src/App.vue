<template>
  <div id="app">
    <SearchField></SearchField>
    <Tempeture></Tempeture>
  </div>
</template>

<script>
import SearchField from './components/SearchField.vue'
import Tempeture from './components/Tempeture.vue'

let weatherAPI = 'fe412c491c7b80ec2c62af05b01e2511';

export default {
  name: 'App',
  components: {
    SearchField,
    Tempeture
  },
  data() {
    return {
      api_key: weatherAPI
    }
  }

}

</script>
<style>
  @import './assets/styles.css';
</style>


