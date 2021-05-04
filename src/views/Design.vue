<template lang="">
    <div class="design">
        <h1>Design on Vue</h1>
        <class-style title="ClassStyle" />
    </div>
</template>

<script>
/* eslint-disable */
import ClassStyle from '@/vueBasic/ClassStyle.vue'

export default {
    name: 'Design',
    data() {
        return {}
    },
    components: {
        ClassStyle,
    },
}
</script>

<style lang="scss" scoped></style>
