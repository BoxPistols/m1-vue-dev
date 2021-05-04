<template lang="">
    <div class="design">
        <!-- <h1>Event</h1> -->
        <event />
        <hr />

        <h1>Design on Vue</h1>
        <class-style title="ClassStyle" />
    </div>
</template>

<script>
/* eslint-disable */
import ClassStyle from '@/vueBasic/ClassStyle.vue'
import Event from '@/vueBasic/Event.vue'

export default {
    name: 'Design',
    data() {
        return {}
    },
    components: {
        ClassStyle,
        Event,
    },
}
</script>

<style lang="scss" scoped></style>
