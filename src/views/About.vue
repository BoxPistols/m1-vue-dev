<template>
    <div class="container">
        <h2>About</h2>
        <div class="row">
            <div class="col">
                <watch-option tex="Option deep" />
            </div>
            <div class="col">
                <watch-app tex="Calc" />
            </div>
            <div class="col">
                <vue-basic-watch />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import VueBasicWatch from '@/vueBasic/Watch'
import WatchApp from '@/vueBasic/WatchApp'
import WatchOption from '@/vueBasic/WatchOption'

export default {
    data() {
        return {}
    },
    components: {
        VueBasicWatch,
        WatchApp,
        WatchOption,
    },
}
</script>

<style lang="scss" scoped>
.container {
    .row {
        display: flex;
        flex-wrap: wrap;
        max-width: 1280px;
        margin: auto;
        .col {
            min-width: 45%;
            border: 2px solid purple;
            padding-bottom: 5vh;
            max-width: 1280px;
            margin: 2vh auto;
        }
    }
}
</style>
