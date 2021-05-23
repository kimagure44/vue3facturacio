<template>
  <div>
    <p>clients</p>
    {{ clients }}
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ClientsView",
  setup() {
    const store = useStore();
    const clients = computed(() => store.getters["dashboardModules/getClients"]);
    return { clients };
  }
};
</script>