<template>
<main>
  <div class="search-box">
    <input type="text" class="search-bar" placeholder="Search for city..." />
  </div>
</main>
</template>


<script>
export default {
  name: 'SearchField',
  props: {
    msg: String
  }
}
</script>