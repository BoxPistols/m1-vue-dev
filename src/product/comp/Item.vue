<!-- Item.vue -->
<template>
    <li class="item">
        <div class="user-box" v-if="user">
            <div
                class="avatar"
                :style="'background-image: url(' + user.photoURL + ')'"
            >
                <p class="user-name">{{ user.name }}</p>
            </div>

            <!-- Edit -->
            <div v-if="editing" class="editor">
                <textarea
                    v-model="whisper.content"
                    placeholder="edit whisper"
                    @keypress.shift.enter="updateWhisper"
                >
                </textarea>
                <p class="message">Press Enter to Whisper</p>
            </div>
            <div v-else class="content" v-html="whisper.content"></div>
        </div>
        <button
            v-if="currentUser && currentUser.uid == user.id"
            @click="showBtns = !showBtns"
        >
            <fa icon="ellipsis-v" />
        </button>
        <div v-if="showBtns" class="controls">
            <li @click="editing = !editing">edit</li>
            <li @click="deleteWhisper" style="color: red">delete</li>
        </div>
    </li>
</template>

<script>
import { db, auth } from '@/main'

export default {
    props: ['id', 'uid'],
    data() {
        return {
            whisper: null,
            user: null,
            currentUser: null,
            showBtns: false,
            editing: false,
            content: '',
        }
    },
    methods: {
        deleteWhisper() {
            if (window.confirm('Are You Sure to Delete This Whisper?')) {
                db.collection('whispers').doc(this.$props.id).delete()
            }
        },
        updateWhisper() {
            const date = new Date()
            db.collection('whispers')
                .doc(this.whisper.id)
                .set(
                    {
                        content: this.whisper.content,
                        date: date,
                    },
                    { merge: true }
                )
                .then((this.editing = false))
        },
    },
    firestore() {
        return {
            whisper: db.collection('whispers').doc(this.$props.id),
            user: db.collection('users').doc(this.$props.uid),
        }
    },
    created() {
        auth.onAuthStateChanged((user) => {
            this.currentUser = user
        })
    },
}
</script>

<style lang="scss" scoped>
    .item {
        list-style: none;
        border-top: 1px solid #eee;
        padding: 5px 15px;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: flex-start;
        position: relative;

        &:first-child {
            border: none;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.02);
        }

        .user-box {
            margin: 10px 10px 10px 0;

            .avatar {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                border: 1px solid #eee;
                background-size: cover;
            }

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

        .content {
            padding: 10px;
        }
    }

    button {
        position: absolute;
        top: 5px;
        right: 0;
        background: transparent;
        color: #555;
        font-size: 0.9rem;
        opacity: 0;
        transition: 0.2s;
    }

    .controls {
        background: #fff;
        position: absolute;
        top: 5px;
        right: 35px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        border-radius: 3px;
        opacity: 0;

        li {
            padding: 5px 20px;
            border-top: 1px solid #eee;
            cursor: pointer;

            &:first-child {
                border: none;
            }
        }
    }

    :first-child {
        border: none;
    }

    :hover {
        background: rgba(0, 0, 0, 0.02);

        .content,
        button,
        .controls {
            opacity: 1;
        }
    }
</style>