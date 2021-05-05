<template>
    <div class="comp">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h1>Form</h1>
                </div>
                <!-- TextArea  -->
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
                <!-- /TextArea  -->

                <!-- CheckBox/-->
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
                <!-- /CheckBox-->

                <!-- Radio -->
                <div class="col">
                    <h2>Radio Button</h2>
                    <pre>checkedRadio: {{ checkedRadio }}</pre>
                    <div class="fx m-auto">
                        <p>
                            <label for="r1">Radio1:</label>
                            <input
                                type="radio"
                                id="r1"
                                value="r1"
                                v-model="checkedRadio"
                            />
                        </p>
                        <p>
                            <label for="r2">Radio2:</label>
                            <input
                                type="radio"
                                id="r2"
                                value="r2"
                                v-model="checkedRadio"
                            />
                        </p>
                    </div>
                </div>
                <!-- /Radio -->

                <!-- Select -->
                <div class="col">
                    <h2>Select</h2>
                    <pre>vSelected: {{ vSelected }}</pre>
                    <select
                        name="s1"
                        id="selected"
                        v-model="vSelected"
                        multiple
                    >
                        <option disable selected>選択してください</option>
                        <option value="s1">s1</option>
                        <option value="s2">s2</option>
                        <option value="s3">s3</option>
                    </select>
                </div>
                <!-- /Select -->

                <!-- Lazy -->
                <div class="col">
                    <h2>Lazy</h2>
                    <p>lazy msg: {{ msg }}</p>
                    <input type="text" v-model.lazy="msg" />
                    <pre>{{ $data.msg }}</pre>

                    <h2>trim</h2>
                    <p>trim msg: {{ msg }}</p>
                    <input type="text" v-model.trim="msg" />
                    <pre>{{ $data.msg }}</pre>

                    <h2>number</h2>
                    <p>number : {{ age }}</p>
                    <input
                        type="number"
                        v-model.number="age"
                        @change="numAge"
                    />
                    <pre>{{ $data.age }}</pre>
                </div>
                <!-- /Lazy -->
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Form',
    components: {},
    data() {
        return {
            msg: '',
            checked: false,
            colors: [],
            checkedRadio: [],
            vSelected: [],
            age: 15,
        }
    },
    computed: {},
    methods: {},
}
</script>

<style lang="scss" scoped>
.contaier {
    width: auto;
}
</style>
