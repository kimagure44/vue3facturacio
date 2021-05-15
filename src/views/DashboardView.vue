<template>
  <div>
    <p>Dashboard</p>
    <button @click="setState">set state</button>
    <button @click="getState">get state</button>
    {{ getState }}
  </div>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "DashboardView",
  setup() {
    const store = useStore();
    const getState = store.getters["dashboardModule/getStateData"];

    const url = "http://localhost:8080/factures";
    return { 
      setState: () => store.dispatch('dashboardModules/getData', { url }),
      getState
    };
  }
};
</script>