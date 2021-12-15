<template>
  <div class="search-box">
    <input
      type="text"
      class="search-bar"
      placeholder="Search..."
      v-model="query"
      @keypress="fetchWeather"
    />
  </div>
</template>

<script>
export default {
  name: "searchField",
  props: {
    api_key: {
      Type: String,
    },
    url_base: {
      Type: String,
    },
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(results => this.$emit('searchResults', results));
      }
    },
  },
};
</script>