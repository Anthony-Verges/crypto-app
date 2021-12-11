<template>
  <!-- <h2>{{ title }}</h2> -->
  <div class="contain-card-item" v-for="(item, index) in data" :key="index">
    <div class="card" v-for="(elem, index) in item" :key="index">
      <h2>{{ elem.name }}</h2>
      <p>{{ elem.current_price }} $</p>
      <img class="img" alt="" :src="elem.image" />
      <h3>Last 24h : {{ elem.price_change_percentage_24h }} %</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    title: String,
    data: Array,
  },
  mounted() {
    //console.log("TITLE", this.title);
    console.log("data", this.data);
  },
  methods: {},
};
</script>

<style scoped>
.contain-card-item {
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
  height: 100%;
  margin: auto;
  cursor: pointer;
}
.card {
  width: 20rem;
  height: 25rem;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #16002c;
}
.img {
  width: 4rem;
  height: 4rem;
}
h2 {
  color: whitesmoke;
}
</style>
