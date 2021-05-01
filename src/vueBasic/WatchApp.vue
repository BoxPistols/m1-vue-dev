<template>
    <div class="about">
        <div class="container">
            <h1>WatchApp {{ tex }}</h1>

            <div class="row">
                <div class="col">
                    <label>KM:</label>
                    <input type="number" v-model="calcKM" />
                </div>

                <div class="col">
                    <label>M:</label>
                    <input type="number" v-model="calcM" />
                </div>

                <div class="col">
                    <label>CM:</label>
                    <input type="number" v-model="calcCM" />
                </div>
            </div>

            <div>km: {{ calcKM }}</div>
            <div>m: {{ calcM }}</div>
            <div>cm: {{ calcCM }}</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        tex: String,
    },
    data() {
        return {
            calcM: 0,
            calcKM: 0,
            calcCM: 0,
        }
    },
    watch: {
        calcKM(val) {
            // this.calcKM = val
            this.calcM = val * 1000
            this.calcCM = val * 100
        },
        calcM(val) {
            this.calcKM = val / 1000
            // this.calcM = val
            this.calcCM = val * 10
        },
        calcCM(val) {
            this.calcKM = val / 10000
            this.calcM = val / 10
            // this.calcCM = val
        },
    },
}
</script>

<style lang="scss" scoped>
input[type='number'] {
    display: block;
}
label {
    margin-top: 12px;
    font-weight: 600;
}
.col {
    margin-bottom: 12px;
}
</style>
