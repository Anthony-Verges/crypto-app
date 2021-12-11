<template>
  <div id="BTC">
    <div class="bitcoins-wrapper">
      <div class="title-btc-page">
        <h1>Prices of Bitcoins</h1>
        <img class="logo-btc" alt="" src="../assets/btc-img.png" />
      </div>

      <div class="wrapper">
        <div class="loading" v-if="loading">Chargement...</div>
        <div
          v-else
          v-for="currency in infos"
          :key="currency.index"
          class="currency"
        >
          {{ currency.description }} :
          <span class="price">{{ currency.rate_float.toFixed(2) }} </span
          ><span class="symbol" v-html="currency.symbol"></span>
        </div>
      </div>
    </div>

    <div class="convert-wrapper">
      <h1>Convert your bitcoins in Euros</h1>
      <p>Enter your number of bitcoins to convert it into euros</p>
      <div>
        <div class="input-group">
          <input
            class="input-convert"
            v-model.number="MyBitcoinsInEuros"
            @click="setCalculToInitValue()"
          />

          <div class="validate-button">
            <button
              class="button"
              type="submit"
              @click="convert(MyBitcoinsInEuros)"
            >
              Valider
            </button>
          </div>
        </div>

        <h3 v-if="calculateInEuros">
          Tu disposes de {{ this.myMonney.toFixed(2) }} €
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Bitcoins",
  el: "#Bitcoins",
  data() {
    return {
      infos: null,
      loading: true,
      monneys: null,
      MyBitcoinsInEuros: "",
      calculateInEuros: false,
      btcPriceInEuros: null,
      myMonney: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        this.infos = res.data.bpi;
        //console.log("infos:", this.infos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        this.monneys = res.data;
        this.btcPriceInEuros = res.data[0].current_price;
        //console.log("monneys", this.monneys);
        //console.log("btc price :", this.btcPriceInEuros);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    setCalculToInitValue() {
      this.myMonney = "";
      this.MyBitcoinsInEuros = "";
      this.calculateInEuros = false;
    },
    convert(value) {
      if (this.MyBitcoinsInEuros !== "") {
        this.calculateInEuros = true;
        this.myMonney = value * this.btcPriceInEuros;
        return this.myMonney;
      }
    },
  },
};
</script>

<style scoped>
#BTC {
  padding-top: 10rem;
}
.bitcoins-wrapper {
  background-color: #2c3e50;
  width: 50rem;
  height: 15rem;
  border-radius: 10px;
  margin: auto;
}

.title-btc-page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.logo-btc {
  width: 40px;
  height: 40px;
}

h1 {
  text-align: center;
  color: #ff8500;
}
.loading {
  color: #cb06ed;
}

.currency {
  color: floralwhite;
  font-size: 20px;
}
.price {
  font-weight: bold;
  color: #cb06ed;
}
.symbol {
  color: floralwhite;
  font-weight: bold;
  font-size: 20px;
}
.convert-wrapper {
  margin-top: 2rem;
  background-color: #9f9fff;
  height: 20rem;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.convert-wrapper h1 {
  color: white;
}
.convert-wrapper p {
  color: rgb(235, 233, 233);
  font-size: 25px;
}

.input-group {
  display: flex;
  justify-content: space-between;
  background-color: #d7c2ff;
  align-items: center;
  border: 3px solid #120044;
  width: 35rem;
  height: 3rem;
  border-radius: 25px;
  margin: auto;
  padding: 10px;
}

.input-convert {
  /* width: 20rem; */
  height: 2rem;
  background-color: #d7c2ff;
  border: transparent;
  border-radius: 15px;
  outline: none;
  font-size: 2rem;
  /* text-align: center; */
  font-weight: bold;
  color: white;
}

.button {
  color: white;
  background-color: #120044;
  width: 8rem;
  height: 3rem;
  border-radius: 20px;
  border: 1px solid #120044;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
}
.button:hover {
  background-color: #2f2744;
}
</style>
