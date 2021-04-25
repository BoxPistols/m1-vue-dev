<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <Dev01 heroMessage="I'm Developer" like="14" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Dev01 from '@/components/Dev01.vue'

@Options({
    components: {
        Dev01,
    },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
img {
    max-width: 48px;
}
</style>
