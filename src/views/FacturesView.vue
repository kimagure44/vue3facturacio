<template>
  <div id="factures">
      <div class="w-100 m-2">
        <p>factures</p>
        <tableComponent
            v-if="fields && factures" 
            :fields="fields"
            :items="factures"
            :key="factures"
        />
        {{ factures }}
      </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import TableComponent from '@/components/TableComponent.vue';

export default {
  name: "FacturesView",
  components: {
      TableComponent
  },
  setup() {
    const store = useStore();
    const factures = computed(() => store.getters["dashboardModules/getFactures"]);

    const fields = [
        '#',
        'num',
        'data',
        'venciment',
        'client',
        'dni'
    ];

    return { 
        fields,
        factures 
    };
  }
};
</script>