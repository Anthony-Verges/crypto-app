<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/btc-img.png" />
    <HelloWorld msg="La blochchain " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
