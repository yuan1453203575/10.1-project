<template>
    <div class="scroll-view" ref="scroll">
        <div class="scroll-wrap">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        handleScroll: Function,
        scrollX: {
            type: Boolean,
            defalult: false,
        },
        scrollY: {
            type: Boolean,
            defalult: true,
        },
        width: {
            type: [String,Number],
            default: '100%',
        }
    },
    methods: {
        scrollTo(index) {
            this.scroll.scrollTo(-(index * 160), 0, 200);
        }
    },
    computed: {
        wrapWidth() {
            if(typeof this.width === 'string') {
                return this.width;
            } else {
                return this.width + 'px';
            }
        }
    },
    mounted() {
        const scroll = this.scroll = new IScroll(this.$refs.scroll,{
            tap: true,
            click: true,
            probeType: 3,
            scrollX: this.scrollX,
            scrollY: this.scrollY,
        });
        scroll.on('beforeScrollStart',() => {
            scroll.refresh();
        }),
        this.handleScroll && scroll.on('scrollEnd',()=> {
            this.handleScroll({x: scroll.x,y: scroll.y});
        })
    },

}
</script>

<style lang="scss" scoped>
.scroll-view {
    overflow: hidden;
}
.scroll-wrap {
    display: inline-block;
}

</style>