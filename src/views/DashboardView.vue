<template>
  <div>
    <p>Dashboard</p>
    <button @click="getState">get state</button>
  </div>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "DashboardView",
  setup() {
    const store = useStore();
    console.log(store);
    // const factures = computed(() => store.getters["dashboardModule/getFactures"]);

    const url = "http://localhost:8080/factures";
    return { 
      getState: () => store.dispatch('dashboardModules/getData', { url })
    };
  }
};
</script>