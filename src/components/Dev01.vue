<template>
    <div>
        <h2>{{ heroMessage }}</h2>
        <p>Like: {{ like }}</p>
        <p>halfNum: {{ halfNum }}</p>
    </div>
</template>
<script>
export default {
    props: {
        heroMessage: String,
        // like: Number,
        like: {
            type: Number,
            // required: true,  *defaultかrequiedかどちらか単一選択
            default: 0,
        },
    },
    data() {
        return {}
    },
    computed: {
        halfNum() {
            return this.like / 2
        },
    },
    methods: {},
}
</script>
