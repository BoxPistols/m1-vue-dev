<template>
    <div class="comp">
        <div class="contaier">
            <div class="row">
                <div class="col">
                    <h1>Event</h1>
                </div>

                <!-- Show Event Object -->
                <div class="col">
                    <h2>Show Event Object</h2>
                    <p>msg: {{ msg }}</p>
                    <p>eventResult: {{ eventResult }}</p>
                    <button class="event" @click="handleEvent">
                        handleEvent
                    </button>
                </div>

                <!--  Event Qualifier -->
                <div class="col">
                    <h2>Event Qualifier / once</h2>
                    <p>nowTime: {{ nowTime }}</p>
                    <button class="event" @click.once="handleTime">
                        handleTime
                    </button>
                </div>

                <!--  Event Key -->
                <div class="col">
                    <h2>Event Key</h2>
                    keyup="handleKey"
                    <input
                        type="text"
                        v-on:keyup.esc.up.space="handleKey"
                        v-model="eventKey"
                        placeholder="input..."
                    />
                    <p>eventKey: {{ eventKey }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comp',
    components: {},
    data() {
        return {
            msg: 'Message...',
            eventResult: 'event.target...',
            nowTime: 'nowTime...',
            eventKey: '',
        }
    },
    methods: {
        handleEvent() {
            // this.eventResult = event.target.tagName
            const res = `(
                tagName: ${event.target.tagName}
                outerHTML: ${event.target.outerHTML}
                type: ${event.target.type}
                )`
            this.eventResult = res
            this.msg = 'HEKEKE!'
        },
        handleTime() {
            this.nowTime = new Date().toLocaleTimeString()
        },
        handleKey() {
            this.eventKey = ''
        },
    },
    computed: {},
}
</script>

<style lang="scss" scoped>
.contaier {
    margin: 12px auto 24px;
    button {
        font-size: 24px;
    }
    p {
        font-size: 20px;
    }
}
</style>
