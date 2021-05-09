
<template>
    <div id="user">
        <div class="user-title">
            <div
                class="avatar"
                :style="'background-image: url(' + user.photoURL + ')'"
            ></div>
            <div class="texts">
                <h1>{{ user.name }}</h1>
                <p v-if="myWhispers.length > 1">
                    {{ myWhispers.length }} whispers
                </p>
                <p v-else>{{ myWhispers.length }} whisper</p>
            </div>
        </div>

        <div class="list">
            <Editor :currentUser="currentUser" />
            <Item
                v-for="whisper in orderBy(myWhispers, 'date', -1)"
                :key="whisper.id"
                :id="whisper.id"
                :uid="whisper.uid"
            />
        </div>
    </div>
</template>

<script>
import { db } from '../main'
import { auth } from '../main'
import firebase from 'firebase'
import Vue2Filters from 'vue2-filters'
import Item from '@/product/comp/Item'

import Editor from '@/product/comp/Editor'

export default {
    data() {
        return {
            user: {},
            myWhispers: [],
            currentUser: {},
        }
    },
    components: {
        Item,
        Editor,
    },
    firestore() {
        return {
            user: db.collection('users').doc(this.$route.params.uid),
            myWhispers: db
                .collection('whispers')
                .where('uid', '==', this.$route.params.uid),
        }
    },
    created() {
        auth.onAuthStateChanged((user) => {
            this.currentUser = user
        })
    },
    mixins: [Vue2Filters.mixin],
}
</script>

<style lang="scss">
    .list li.item {
        list-style: none;
        max-width: 800px;
        margin: auto;
    }

    .user-title {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        margin: 10px auto;
        max-width: 960px;

        .avatar {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            background-size: cover;
        }

        .texts {
            margin-left: 10px;

            h1 {
                font-size: 1.5rem;
                margin: 0;
            }

            p {
                font-size: 0.8rem;
                margin: 0;
            }
        }
    }
    .editor {
        position: relative;
        width: 100%;
        margin-bottom: 24px;

        textarea {
            background: transparent;
            resize: none;
            height: 80px;
            width: 96%;
            border-color: #ccc;
            padding: 10px 2%;
            font-size: 0.9rem;
            font-weight: lighter;

            &:focus {
                outline: none;
            }
        }

        .message {
            opacity: 0;
            position: absolute;
            bottom: 5px;
            right: 10px;
            transition: 0.2s;
            font-size: 0.8rem;
        }

        &:hover .message {
            opacity: 1;
        }
    }
</style>