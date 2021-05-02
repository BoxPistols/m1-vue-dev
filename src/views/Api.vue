<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div style="margin-top: 24px;">
                    <input type="text" v-model="keyword" />
                </div>
                <div>
                    <!-- {{ message }} -->
                    <!-- {{ items }} -->
                </div>
                <div>
                    <ul>
                        <li v-for="(item, index) in items" :key="item.index">
                            <a :href="item.url" target="_blank">
                                {{ index }} : <b>{{ item.title }}</b> / likes:
                                {{ item.likes_count }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
// import VueBasicWatch from '@/vueBasic/Watch'
import axios from 'axios'

export default {
    data() {
        return {
            items: null,
            keyword: '',
            message: '',
        }
    },
    watch: {
        keyword(newVal, oldVal) {
            console.log(newVal)
            // TODO: Lodashで必要な時だけ読み込む
        },
    },
    created() {
        this.keyword = 'UI'
        this.getAnswer()
    },
    methods: {
        getAnswer() {
            if (this.keyword === '') {
                retturn
                this.items = null
            }
            this.message = 'Loading...'
            const vm = this
            const params = { page: 1, per_page: 20, query: this.keyword }
            axios
                .get('https://qiita.com/api/v2/items', { params })
                .then(function (res) {
                    console.log(res)
                    vm.items = res.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        },
    },
    components: {},
}
</script>

<style lang="scss" scoped>
.container {
    .row {
        display: flex;
        flex-wrap: wrap;
        max-width: 1280px;
        margin: auto;
        .col {
            min-width: 45%;
            border: 2px solid purple;
            padding-bottom: 5vh;
            max-width: 1280px;
            margin: 2vh auto;
            li {
                text-align: left;
                padding: 0 2em;
            }
        }
    }
}
</style>
