<template>
    <div id="sidebar">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link 
                    @click="getData('clients')" 
                    to="/clients"
                    class="nav-link"
                >
                    <i class="bi bi-diagram-3"></i>
                    <span class="ms-2">dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    @click="getData('clients')" 
                    to="/clients"
                    class="nav-link"
                >
                    <i class="bi bi-people"></i>
                    <span class="ms-2">clients</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    @click="getData('factures')" 
                    to="/factures"
                    class="nav-link"
                >
                    <i class="bi bi-files"></i>
                    <span class="ms-2">factures</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    @click="getData('factures')" 
                    to="/factures"
                    class="nav-link"
                >
                    <i class="bi bi-box"></i>
                    <span class="ms-2">articles</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    @click="getData('factures')" 
                    to="/factures"
                    class="nav-link"
                >
                    <i class="bi bi-currency-euro"></i>
                    <span class="ms-2">impostos</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from "vuex";
import constants from '@/constants/constants.js';

export default {
    name: 'SidebarMenu',
    setup() {
    const store = useStore();
    const apiUrl = constants.API_URL;

    async function getData(url) {

        // url = apiUrl + '/' + url;
        url = `${apiUrl}/${url}`;

        try {
            await store.dispatch('dashboardModules/getData', { url });
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getData
    }
  }
}
</script>
