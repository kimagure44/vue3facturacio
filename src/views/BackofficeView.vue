<template>
    <div class="row m-0 p-0">
        <div class="w-100 p-0 m-0">
            <TopbarMenu />
        </div>
        <div class="col-2 p-0 m-0">
            <div class="m-4">
                <SidebarMenu />
            </div>
        </div>
        <div class="col-10 p-0 m-0">
            <div class="m-4">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import TopbarMenu from '@/components/TopbarMenu.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
    name: 'BackofficeView',
    components: {
        TopbarMenu,
        SidebarMenu
    }
}
</script>