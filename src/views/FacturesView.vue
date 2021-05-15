<template>
  <div>
    <p>factures</p>
    {{ factures }}
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "factures",
  setup() {
    const store = useStore();
    const factures = computed(() => store.getters["dashboardModules/getFactures"]);
    console.log(factures);
    return { factures };
  }
};
</script>