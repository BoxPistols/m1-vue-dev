<template>
    <div>
        <h1>Prop:dev01Msg = {{ dev01Msg }}</h1>
        <h2>{{ inputMsg }}</h2>
        <input type="text" v-model="inputMsg" />
        <button @click="doAction">Click doAction</button>
    </div>
</template>
<script>
export default {
    props: {
        dev01Msg: String,
    },
    data() {
        return {
            inputMsg: "Hi!",
        };
    },
    methods: {
        doAction() {
            this.inputMsg = "Oh!!";
        },
    },
};
</script>
