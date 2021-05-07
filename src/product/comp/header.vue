<!-- Header.vue -->
<template>
<header>
    <router-link to="/">
        <h1>whisp.</h1>
    </router-link>
    <!-- <div class="btns">
        <button @click="signIn">
            <fa icon="user" />
        </button>
    </div> -->
    <div v-if="currentUser" class="btns">
        <!-- <button :style="'background-image: url('+currentUser.photoURL+')'"></button> -->
        <button  @click="signOut">
             <fa icon="sign-out-alt" /> sign-out
        </button>
    </div>
    <div v-else class="btns">
        <button @click="signIn">
            <fa icon="user"  />sign-in
        </button>
    </div>
</header>
</template>

<script>
import firebase from 'firebase'
import {
    auth
} from '@/main'

export default {
    data() {
        return {
            currentUser: {},
        }
    },
    created() {
        auth.onAuthStateChanged((user) => {
            this.currentUser = user
        })
    },
    methods: {
        signIn() {
            const provider = new firebase.auth.GoogleAuthProvider()
            auth.signInWithPopup(provider).then((result) => {
                alert('Hello, ' + result.user.displayName + '!')
            })
        },
        signOut() {
            if (window.confirm('Are You Sure to Sign Out?')) {
                auth.signOut().then(() => {
                    alert('You Safely Signed Out.')
                    this.$router.push('/'), location.reload()
                })
            }
        },
    },
}
</script>
