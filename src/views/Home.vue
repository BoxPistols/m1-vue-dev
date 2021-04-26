<!-- 親コンポーネント -->
<!-- Example http://jsfiddle.net/StyleEye/tvsL71k2/4/ -->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <dev01
            hero-message="I'm developer"
            :like="likeNumber"
            @my-Inc="countTotal()"
        />
        <dev01
            hero-message="I'm designer"
            :like="likeNumber2"
            @my-Inc="countTotal()"
        />
        <dev01 :hero-message="myJob" @my-Inc="countTotal()" button="total" />
        <!-- Like: <input type="number" v-model="likeNumber" /> -->
        <h2>Total: {{ total }}</h2>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Dev01 from '@/components/Dev01.vue'

@Options({
    data() {
        return {
            likeNumber: 50,
            likeNumber2: 70,
            myJob: 'job...',
            total: 0,
        }
    },
    methods: {
        countTotal() {
            this.total = this.total + 1
        },
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
