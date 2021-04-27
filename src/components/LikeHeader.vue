<template lang="">
    <div>
        <slot>
            def.... child。。。
        </slot>

        <slot name="title">
            <div>
                <h2>LikeHeader {{ headerText }}</h2>
            </div>
        </slot>

        <slot name="disc">
            <p>Hey! (i am child)</p>
            def if empty
        </slot>
    </div>
</template>

<script>
export default {
    name: 'LikeHeader',
    props: ['headerText'],
}
</script>

<style lang="scss" scoped>
h2 {
    color: orange;
}
</style>
