<template>
    <div class="hello">
        <h1>HelloWorld.vue</h1>
        <p>{{ msg }}</p>
        <p>Now Status: {{ num }} %</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
        msg: String,
        num: Number,
    },
})
export default class HelloWorld extends Vue {
    msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
