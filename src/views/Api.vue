<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div style="margin-top: 24px;">
                    <input type="text" v-model="keyword" />
                </div>
                <div>
                    {{ message }}
                    <!-- {{ items }} -->
                </div>
                <div>
                    <ul>
                        <li v-for="(item, index) in items" :key="item.index">
                            <a
                                :href="item.url"
                                target="_blank"
                                :class="item.likes_count <= 1 ? 'minor' : ''"
                            >
                                {{ index }} :
                                <b>{{ item.title }}</b>
                                <span
                                    v-if="
                                        item.likes_count > 10 &&
                                        item.likes_count <= 30
                                    "
                                >
                                    like: /
                                    <b>{{ item.likes_count }}</b>
                                </span>
                                <span
                                    v-else-if="
                                        item.likes_count >= 31 &&
                                        item.likes_count <= 99
                                    "
                                    class="text-many"
                                >
                                    like: /
                                    <b>{{ item.likes_count }}</b>
                                </span>
                                <span
                                    v-else-if="item.likes_count >= 100"
                                    class="text-buzz"
                                >
                                    like: /
                                    <b>{{ item.likes_count }}</b>
                                </span>

                                <span v-else class="text-disable"
                                    >/ not has likes...</span
                                >
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
import 'lodash'
// const { retryx } = require('retryx')

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
            // console.log(newVal)
            // TODO: Lodashで必要な時だけ読み込む
            this.message = 'Wait typing...'
            this.debouncedGetAnswer()
        },
    },
    created() {
        // this.keyword = 'UI'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 2000)
    },
    methods: {
        getAnswer() {
            // 空文字対応
            if (this.keyword === '') {
                return
                this.items = null
            }
            this.message = 'Loading...'
            // thisの代入
            const vm = this
            // コンテンツ読み込みパラメーター
            const params = { page: 1, per_page: 100, query: this.keyword }
            // TODO: Retry filter
            axios
                .get('https://qiita.com/api/v2/items', { params })
                .then(function (res) {
                    vm.items = res.data
                    console.log(vm.items)
                    // FIXME!
                    // if (res.data.likes_count < 1) {
                    //     return (vm.message = '少ない...')
                    // } else {
                    //     return (vm.message = 'ある...')
                    // }
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        },
        components: {},
    },
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
                a {
                    color: #345;
                    &.minor {
                        color: #ccc;
                    }
                }
                .text-disable {
                    color: #999;
                }
                .text-many {
                    color: teal;
                    font-weight: 600;
                    font-size: 24px;
                }
                .text-buzz {
                    color: tomato;
                    font-weight: 600;
                    font-size: 32px;
                }
            }
        }
    }
}
</style>
