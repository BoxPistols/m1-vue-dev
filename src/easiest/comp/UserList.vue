<template>
    <div class="UserList">
        <div class="contaier">
            <div class="row">
                <div class="col text-left">
                    <router-link to="/Easiest">Easiest Top</router-link>
                    <h2>{{ title }} UserList</h2>
                    <p class="text-center">{{ sort_key }}: {{ sort_asc ? '昇順' : '降順'}}</p>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th @click="sortBy('id')" :class="addClass('id')">ID</th>
                                <th @click="sortBy('name')" :class="addClass('name')">名前</th>
                                <th @click="sortBy('age')" :class="addClass('age')">年齢</th>
                                <th @click="sortBy('sex')" :class="addClass('sex')">性別</th>
                                <th @click="sortBy('pref')" :class="addClass('pref')">都道府県</th>
                            </tr>
                        </thead>
                        <tr v-for="customer in sort_customers" :key="customer.id">
                            <td>{{ customer.id }}</td>
                            <td>{{ customer.name }}</td>
                            <td>{{ customer.age }}</td>
                            <td>{{ customer.sex }}</td>
                            <td>{{ customer.pref }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
var customers = [
    { id: 1, name: '大竹真', age: 35, sex: '男', pref: '東京都' },
    { id: 2, name: '山田太郎', age: 25, sex: '男', pref: '千葉県' },
    { id: 3, name: '井上五郎', age: 36, sex: '男', pref: '長野県' },
    { id: 4, name: '江藤花子', age: 18, sex: '女', pref: '東京都' },
    { id: 5, name: '犬山虎之助', age: 55, sex: '男', pref: '大阪府' },
    { id: 6, name: '桜田一郎', age: 20, sex: '男', pref: '東京都' },
    { id: 7, name: '大木啓介', age: 17, sex: '男', pref: '東京都' },
    { id: 8, name: '桜田和夫', age: 53, sex: '男', pref: '大阪府' },
    { id: 9, name: '加藤佳子', age: 20, sex: '女', pref: '東京都' },
    { id: 10, name: '吉田めぐみ', age: 17, sex: '女', pref: '東京都' },
    { id: 11, name: '長見真', age: 35, sex: '男', pref: '東京都' },
    { id: 12, name: '山田毅', age: 25, sex: '男', pref: '千葉県' },
    { id: 13, name: '斎藤一郎', age: 46, sex: '男', pref: '長野県' },
    { id: 14, name: '芹川花子', age: 28, sex: '女', pref: '東京都' },
    { id: 15, name: '大山三郎', age: 35, sex: '男', pref: '大阪府' },
    { id: 16, name: '小野寺健太', age: 24, sex: '男', pref: '東京都' },
    { id: 17, name: '谷村周平', age: 16, sex: '男', pref: '東京都' },
    { id: 18, name: '二宮金次郎', age: 59, sex: '男', pref: '大阪府' },
    { id: 19, name: '徳川佳子', age: 21, sex: '女', pref: '東京都' },
    { id: 20, name: '大城ゆき', age: 17, sex: '女', pref: '神奈川県' },
    { id: 21, name: '大竹真', age: 35, sex: '男', pref: '東京都' },
    { id: 22, name: '山田太郎', age: 25, sex: '男', pref: '千葉県' },
    { id: 23, name: '井上五郎', age: 42, sex: '男', pref: '長野県' },
]

export default {
    name: 'Comp',
    props: {
        title: String,
    },
    components: {},
    data() {
        return {
            customers: customers,
            // for Table Sort
            sort_key: 'sort_key',
            sort_asc: true,
        }
    },
    methods: {
        sortBy(key) {
            this.sort_key === key
                ? (this.sort_asc = !this.sort_asc)
                : (this.sort_asc = true)
            this.sort_key = key
        },
        addClass(key) {
            return {
                asc: this.sort_key === key && this.sort_asc,
                desc: this.sort_key === key && !this.sort_asc,
            }
        },
    },
    computed: {
        // thへのsortByをSortとして機能させる
        sort_customers() {
            if (this.sort_key != '') {
                let set = 1
                this.sort_asc ? (set = 1) : (set = -1)
                this.customers.sort((a, b) => {
                    if (a[this.sort_key] < b[this.sort_key]) return -1 * set
                    if (a[this.sort_key] > b[this.sort_key]) return 1 * set
                    return 0
                })
                return this.customers
            } else {
                return this.customers
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .contaier {
        width: auto;
        max-width: 840px;
        margin: auto;
        table.table {
            max-width: 840px;
            margin: auto;
            th {
                transition: 0.3s;
                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }
            }
        }
    }
    .asc::after,
    .desc::after {
        padding: 0 0 0 4px;
    }
    .asc::after {
        content: '↓';
    }
    .desc::after {
        content: '↑';
    }
</style>
