<template>
    <textarea-autosize rows="1"
                       :placeholder="placeholder"
                       v-model="text"
                       @keydown.native="keyWatch">
    </textarea-autosize>
</template>

<script>
    import { TextareaAutosize } from 'vue-textarea-autosize'

    export default {
        name: 'PlainText',
        components: {
            TextareaAutosize,
        },
        props: ['value', 'placeholder', 'name'],
        data() {
            return {
                text: this.value,
            }
        },

        watch: {
            value(val) {
                this.text = val
            },

            text(v) {
                this.text = v.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').trim()
                this.$emit('input', this.text)
            },
        },

        methods: {
            keyWatch(e) {
                if (e.which === 13) {
                    e.preventDefault()
                }
            },
        },
    }
</script>

<style scoped>
    textarea {
        font-size: inherit;
        font-family:inherit;
        font-style: inherit;
        line-height: inherit;
        font-weight: inherit;
        width: 100%;
        margin:0;
        padding:0;
        border: 0;
    }
</style>
