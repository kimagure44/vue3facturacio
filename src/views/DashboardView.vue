<template>
  <div>
    <p>Dashboard</p>
    <router-link @click="getFactures" to="/factures">factures</router-link>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: 'dashboard',
  setup() {
    const store = useStore();

    const url = "http://localhost:8080/factures";
    // store.dispatch('dashboardModules/getData', { url });

    async function getFactures() {
        try {
            await store.dispatch('dashboardModules/getData', { url });
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getFactures
    }
  }
};
</script>