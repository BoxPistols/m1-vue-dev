<template>
    <div class="Easist">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h1>Easiest</h1>
                </div>
            </div>
            <h2>
                <router-link to="/userlist">userlist</router-link>
            </h2>
        </div>
    </div>
</template>

<script>
import UserList from '@/easiest/comp/UserList'
/* eslint-disable */
export default {
    name: 'Comp',
    // props: {
    //     title: String,
    // },
    components: {
        UserList,
    },
    methods: {},
    computed: {},
}
</script>

<style lang="scss" scoped>
    .contaier {
        width: auto;
    }
</style>
