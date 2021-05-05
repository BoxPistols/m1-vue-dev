<template lang="">
    <div class="design">
        <Form />
        <hr />

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
import Form from '@/vueBasic/Form.vue'

export default {
    name: 'Design',
    data() {
        return {}
    },
    components: {
        ClassStyle,
        Event,
        Form,
    },
}
</script>

<style lang="scss" scoped></style>
