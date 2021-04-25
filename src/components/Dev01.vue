<template>
    <div>
        <h1>Prop:dev01Msg = {{ dev01Msg }}</h1>
        <h2>{{ inputMsg }}</h2>
        <input type="text" v-model="inputMsg" />
        <button @click="doAction">Click doAction</button>
        <p>Like: {{ like }}</p>
        <p>halfNum: {{ halfNum }}</p>
    </div>
</template>
<script>
export default {
    props: {
        dev01Msg: String,
        like: Number,
    },
    data() {
        return {
            inputMsg: 'Hi!',
        }
    },
    computed: {
        halfNum() {
            return this.like / 2
        },
    },
    methods: {
        doAction() {
            this.inputMsg = 'Oh!!'
        },
    },
}
</script>
