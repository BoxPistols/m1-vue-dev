<!-- 親コンポーネント -->
<!-- Example http://jsfiddle.net/StyleEye/tvsL71k2/4/ -->
<template>
    /* eslint-disable */
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- from LikeHeader  -->
        <like-header>
            <!-- <div>
                こんちくわ
            </div> -->
            <!-- Def -->
            <!-- <template v-slot:default>Def parent !</template> -->
            <slot></slot>

            <template v-slot:title header-text="monmon">
                <div>
                    Title
                </div>
            </template>
            <template v-slot:disc>
                <div>
                    Disc parent
                </div>
            </template>
        </like-header>
        <dev01
            hero-message="I'm developer"
            :like="likeNumber"
            @my-Inc="countTotal()"
        ></dev01>
        <dev01
            :hero-message="myJob"
            :like="likeNumber"
            @my-Inc="countTotal()"
            button="total"
        />
        Like: <input type="number" v-model="likeNumber" />
        <h2>Total: {{ total }}</h2>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Dev01 from '@/components/Dev01.vue'
import LikeHeader from '@/components/LikeHeader.vue'

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
        LikeHeader,
    },
    watch: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
img {
    max-width: 48px;
}
h2 {
    color: teal;
}
</style>
