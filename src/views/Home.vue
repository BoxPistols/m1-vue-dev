<template>
    <div class="home">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h2>Home</h2>
                    <Header />
                </div>

                <div class="col">
                    <h2>Contents</h2>
                    <p>Lorem ipsum dolor sit</p>
                    <div class="event" @click="handleEvent('event-on!')">
                        handleEvent
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from '@/product/comp/header.vue'
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            mrg: 'message...',
        }
    },
    methods: {
        handleEvent(x) {
            alert(x)
        },
    },
    components: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
.contaier {
    width: auto;
}
</style>
