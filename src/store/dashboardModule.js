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
        factures: []
    },
    getters: {
        getFactures: state => state.factures
    },
    mutations: {
        setData(state, payload) {
            state.factures = payload.factures;
        }
    },
    actions: {
        async getData({ commit }, { url }) {
            const result = await (await fetch(url, { method: 'POST' })).json();
            commit("setData", result);
        }
    }
};