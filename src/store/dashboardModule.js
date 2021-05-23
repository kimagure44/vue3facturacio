/* import apiService from "@/services/apiService.js";

var config = {};
var data = {};

var factures = [];

apiService.post("factures", data, config)
    .then(function (response) {
        factures = response.data.factures;
    }); */

export default {
    namespaced: true,
    state: {
        data: {
            factures:  null,
            clients: null
        }
    },
    getters: {
        getFactures: state => state.data.factures,
        getClients: state => state.data.clients
    },
    mutations: {
        setData(state, payload) {
            state.data = {...payload};
            // state.factures = payload.factures;
        }
    },
    actions: {
        async getData({ commit }, { url }) {
            const result = await (await fetch(url, { method: 'POST' })).json();
            commit("setData", result);
        }
    }
};