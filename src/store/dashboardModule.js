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
        data: []
    },
    getters: {
        getStateData: state => state.data
    },
    mutations: {
        setData(state, payload) {
            state.data = [...payload];
        }
    },
    actions: {
        async getData({ commit }, { url }) {
            const result = await (await fetch(url, { method: 'POST' })).json();
            commit("setData", result);
            console.log(result);
        }
    }
};