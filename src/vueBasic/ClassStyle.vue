<template lang="">
    <div class="class-style">
        <p>hes toggle</p>
        <h2
            :class="[
                'toggle-text',
                { 'is-active': isActive, 'has-error': hasError },
            ]"
                @click="toggle"
        >
            {{ title }}
        </h2>

        <p>hes object</p>
        <h2 :class="classObj">
            classObj
        </h2>

        <p>ternary operator 三項演算子</p>
        <h2 :class="ternaryOperator ? ternaryOperator : ''">
            ternaryOperator
        </h2>

        <p>Inline</p>
        <h2 :style="{ color: color, fontSize: fontSize + 'px' }">
            inline
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
            classObj: {
                isObj: true,
                'toggle-text': true,
            },
            ternaryOperator: {
                'has-error ': true,
            },
            color: 'orange',
            fontSize: 32,
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
    margin: 4px auto 24px;
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
