<!-- 子コンポーネント -->
<template>
    <div>
        <h3>{{ heroMessage }} / Like: {{ like }} / halfNum: {{ halfNum }}</h3>
        <p>{{ count }}</p>
        <button class="btn" @click="inc">Add: {{ button }}</button>
    </div>
</template>
<script>
export default {
    props: {
        totalNum: Number,
        heroMessage: String,
        button: {
            type: String,
            default: 'Button',
        },
        // like: Number,
        like: {
            type: Number,
            // required: true,  *defaultかrequiedかどちらか単一選択
            default: 0,
        },
    },
    data() {
        return {
            count: 0,
        }
    },
    computed: {
        halfNum() {
            return this.like / 2
        },
    },
    methods: {
        inc() {
            // this.$emit('my-Inc', this.heroMessage + ':)')
            this.$emit('my-Inc')
            this.count += 1
        },
    },
}
</script>
