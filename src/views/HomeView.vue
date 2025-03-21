<template>
  <div class="home">
    <HomeLista/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLista from '@/components/HomeLista.vue'

export default {
  name: 'HomeView',
  components: {
    HomeLista
  }
}
</script>
