<template>

        <figure class="figure-node" :class="{'is-selected-node' : selected, 'empty-caption': caption.trim() === '', 'align-left' : node.attrs.align === 'left', 'align-right' : node.attrs.align==='right'}">
            <img :src="node.attrs.src"/>
            <figcaption>
                <plain-text v-model="caption" placeholder="Give your image a caption"></plain-text>
            </figcaption>
            <div class="align-tools" v-if="selected">
                <button @click="align('left')">L</button><button @click="align('')">N</button> <button @click="align('right')">Right</button>
            </div>
        </figure>

</template>

<script>
import PlainText from './PlainText';

export default {
    name: 'FigureComponent',
    components: {PlainText},
    props: ['node', 'updateAttrs', 'editable', 'options', 'selected'],

    computed: {
        caption: {
            get() {
                return this.node.attrs.caption;
            },

            set(val) {
                this.updateAttrs({
                    caption: val,
                });
            },
        },

        alignClass() {
            switch (this.node.attrs.align) {
                case 'left' :
                    return 'figure-left';

                case 'right':
                    return 'figure-right';
            }
            return '';
        },
    },
    data() {
        return {
            inputUrl: '',
        };
    },

    methods: {
        align(align) {
            this.updateAttrs({
                align
            });
        }
    },

};
</script>

<style lang="scss">
    figure {
        display: table;
        figcaption {
            font-style: italic;
            color: #888;
        }

    }
    figure.align-left {
        float: left;
        max-width: 35%;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    figure.align-right {
        float: right;
        max-width: 35%;
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .figure-node {

        position: relative;
    }
    .empty-caption {
        figcaption {
            display: none;
        }
    }

    .is-selected-node {

        figcaption {
            display: block;
        }
    }

    .align-tools {
        position: absolute;
        bottom: 100%;
        right:0;
    }

</style>
