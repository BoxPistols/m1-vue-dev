<template>
    <div class="VueComponent">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <router-link to="/Easiest">Easiest Top</router-link>

                    <h2>VueComponent</h2>
                    <ul>
                        <li>No:{{ $route.params.id}}</li>
                        <li>Name:{{ $route.params.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3>Transition</h3>
                    <button class="btn btn-primary" v-on:click="show = !show">Toggle</button>
                    <transition name="fade">
                        <p v-if="show">hello</p>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'VueComponent',
    components: {},
    data() {
        return {
            show: false,
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
    .fade-enter-active,
    .fade-leave-active {
        transition: 1s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
