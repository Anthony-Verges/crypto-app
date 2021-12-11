<template>
  >
  <div class="card-item">
    <!-- <CardItem :title="item.name" /> -->
    <!-- <h3>{{ item.name }}</h3> -->
    <CardItem :title="title" :data="data" />
  </div>
</template>

<script>
import CardItem from "../components/CardItem.vue";
import axios from "axios";

export default {
  name: "CardList",
  components: {
    CardItem,
  },
  data() {
    return {
      data: [],
      loading: true,
      title: "",
    };
  },
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        this.data.push(res.data);
        this.title = res.data[0].name;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.card-item {
  width: 100%;
  height: 100%;
}
h3 {
  color: whitesmoke;
}
</style>
