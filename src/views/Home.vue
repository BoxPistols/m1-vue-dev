<template>
    <div class="home">
        <Dev01 dev01Msg="iI,m Developer" />
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Vue.js + TypeScript App" num="33" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Dev01 from "@/components/Dev01.vue";

@Options({
    components: {
        HelloWorld,
        Dev01,
    },
})
export default class Home extends Vue {}
</script>
