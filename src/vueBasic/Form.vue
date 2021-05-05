<template>
    <div class="comp">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h1>Form</h1>
                </div>
                <div class="col">
                    <h2>TextArea</h2>
                    <pre>msg: {{ msg }}</pre>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="input..."
                        v-model="msg"
                    ></textarea>
                </div>
                <div class="col">
                    <h2>CheckBox</h2>

                    <h3>Single</h3>
                    <pre>checked: {{ checked }}</pre>
                    <div class="fx m-auto">
                        <label for="c1">checkbox:</label>
                        <input
                            type="checkbox"
                            id="c1"
                            name="c1"
                            v-model="checked"
                        />
                    </div>

                    <h3>Array</h3>
                    <p>colors: {{ colors }}</p>

                    <div class="fx m-auto">
                        <label for="col-red">Red:</label>
                        <input
                            type="checkbox"
                            id="col-red"
                            value="col-red"
                            v-model="colors"
                        />
                    </div>

                    <div class="fx m-auto">
                        <label for="col-green">green:</label>
                        <input
                            type="checkbox"
                            id="col-green"
                            value="col-green"
                            v-model="colors"
                        />
                    </div>

                    <div class="fx m-auto">
                        <label for="col-blue">blue:</label>
                        <input
                            type="checkbox"
                            id="col-blue"
                            value="col-blue"
                            v-model="colors"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    components: {},
    data() {
        return {
            msg: '',
            checked: false,
            colors: [],
        }
    },
    methods: {},
    computed: {},
}
</script>

<style lang="scss" scoped>
.contaier {
    width: auto;
}
</style>
