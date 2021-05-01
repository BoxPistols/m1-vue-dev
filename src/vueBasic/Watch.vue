<template>
    <div class="about">
        <h1>Watch</h1>
        <input type="text" v-model="msg" />
        <h2>msg: {{ msg }}</h2>
        <p>date: {{ $data }}</p>
        {{ log }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello Watch',
            log: 'log',
        }
    },
    watch: {
        msg(newVal, oldVal) {
            console.log('new: %s , old: %s', newVal, oldVal)
            this.log = ('new: %s , old: %s', newVal, oldVal)
        },
    },
}
</script>

<style lang="scss" scoped></style>
