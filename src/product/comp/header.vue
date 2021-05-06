<template>
    <div class="comp">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h1>Comp</h1>
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
export default {
    name: 'Comp',
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
    computed: {},
}
</script>

<style lang="scss" scoped>
.contaier {
    width: auto;
}
</style>
