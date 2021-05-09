<template>
    <li class="item">
        <div class="user-box">
            <div
                class="avatar"
                :style="'background-image: url(' + currentUser.photoURL + ')'"
            ></div>
            <p class="user-name">{{ currentUser.displayName }}</p>
        </div>
        <div class="editor">
            <textarea
                placeholder="new whisper"
                v-model="newWhisper"
                @keypress.shift.enter="createWhisper"
            >
             <!-- 'v-model','@keypress.enter'を追加 -->
            </textarea>
            <p class="message">Press Shift + Enter to Whisper</p>
        </div>
    </li>
</template>

<script>
import { db } from '@/main'

export default {
    props: ['currentUser'],
    data() {
        return {
            newWhisper: '',
        }
    },
    methods: {
        createWhisper() {
            const date = new Date()
            db.collection('whispers')
                .add({
                    content: this.newWhisper,
                    date: date,
                    uid: this.$props.currentUser.uid,
                })
                .then((this.newWhisper = ''))
        },
    },
}
</script>

<style lang="scss" scoped>
    .avatar {
        display: block;
        width: 80px;
        height: 80px;
    }
    .list li.item {
        list-style: none;
        max-width: 800px;
        margin: auto;
        .user-name {
            margin: 0;
            text-align: center;
            font-size: 25px;
            line-height: 50px;
            width: 50px;
            font-weight: 900;
            color: rgb(255 255 255);
            opacity: 0.7;
        }
    }
</style>