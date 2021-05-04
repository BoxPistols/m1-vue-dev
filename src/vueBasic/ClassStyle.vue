<template lang="">
    <div class="class-style">
        <h2
            :class="[
                'toggle-text',
                { 'is-active': isActive, 'has-error': hasError },
            ]"
            @click="toggle"
        >
            {{ title }}
        </h2>
    </div>
</template>

<script>
export default {
    name: 'ClassStyle',
    data() {
        return {
            isActive: true,
            hasError: true,
        }
    },
    props: {
        title: String,
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
            this.hasError = !this.hasError
        },
    },
}
</script>

<style lang="scss" scoped>
.toggle-text {
    display: block;
    border: 2px solid #ccc;
    padding: 4px 24px;
    border-radius: 4em;
    max-width: 240px;
    margin: auto;
    user-select: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: pink;
    }
}
.is-active {
    border-color: teal;
}
.has-error {
    border-color: crimson;
    background: tomato;
    color: white;
}
</style>
