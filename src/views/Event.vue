<template lang="">
    <div class="form">
        <Form />
        <hr />

        <event />
        <hr />
    </div>
</template>

<script>
/* eslint-disable */
import Event from '@/vueBasic/Event.vue'
import Form from '@/vueBasic/Form.vue'
export default {
    name: 'form',
    data() {
        return {}
    },
    components: {
        Event,
        Form,
    },
}
</script>

<style lang="scss" scoped></style>
