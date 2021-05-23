<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <template v-if="fields">
                        <th v-for="(field, index) in fields" :key="index" scope="col"> {{ field }} </th>  
                    </template>
                </tr>
            </thead>
            <tbody>
                <template v-if="items">
                    <tr v-for="(item, index) in items" :key="item.id">
                        <td> {{ index+1 }} </td>
                        <td> {{ item.sku }} </td>
                        <td> {{ item.data }} </td>
                        <td> {{ item.venciment }} </td>
                        <td> {{ item.client.nom }} </td>
                        <td> {{ item.client.document }} </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'TableComponent',
    props: {
        fields: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    setup() {
        
    },
}
</script>
