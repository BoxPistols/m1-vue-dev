<template>
    <div class="home">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <Header />
                </div>

                <main>
                    <div class="list">
                        <li
                            v-for="whisper in whispers"
                            :key="whisper.id"
                            class="item"
                        >
                            <div>content: {{ whisper.content }}</div>
                            <div>uid: {{ whisper.uid }}</div>
                            <div>date: {{ whisper.date }}</div>
                        </li>
                    </div>
                </main>

                <div class="col">
                    <h2>Contents</h2>
                    <p>Lorem ipsum dolor sit</p>
                    <div class="event" @click="handleEvent('event-on!')">
                        handleEvent
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from '@/product/comp/header.vue'
import { db } from '../main'

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            mrg: 'message...',
            whispers: [],
        }
    },
    firestore() {
        return {
            whispers: db.collection('whispers'),
        }
    },
    methods: {
        handleEvent(x) {
            alert(x)
        },
    },
    components: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

body {
    margin: 0;
    font-size: 14px;
    font-family: 'Quicksand', 'YuGothic', 'Yu Gothic', serif;
}

:link,
:visited {
    text-decoration: none;
    color: inherit;
}

main {
    margin: 80px auto 0;
    width: 95%;
    max-width: 600px;
}

.btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

button {
    margin: 0 0 0 5px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: #555;
    background-size: cover;
    color: #fff;
    font-family: 'Quicksand', 'YuGothic', 'Yu Gothic', serif;
    font-size: 1.2rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
}

.list {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #fff;
    max-width: auto;
    max-width: 960px;
    .item {
        text-align: left;
        list-style: none;
        font-size: 20px;
        padding: 12px;
    }
}
</style>
