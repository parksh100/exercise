<template>
  <div class="home container text-center">
    <img alt="kai logo" src="../assets/KAI.png" />
    <HelloWorld msg="Welcome to KAI Certification" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
