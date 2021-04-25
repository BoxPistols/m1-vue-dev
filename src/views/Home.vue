<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <dev01 hero-message="I'm developer" :like="likeNumber" />
        Like: <input type="number" v-model="likeNumber" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Dev01 from '@/components/Dev01.vue'

@Options({
    data() {
        return {
            likeNumber: 50,
        }
    },
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
