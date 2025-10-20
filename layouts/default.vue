<template>
    <div class="app-container">
        <page-container>
            <nuxt/>
        </page-container>
    </div>
</template>

<script type="text/babel">
    import {mapMutations} from 'vuex';
    import PageContainer from '~/components/PageContainer.vue';

    export default {
        components: {
            PageContainer
        },
        data() {
            return {
                busyTimer: 0,
                resizeTimer: 0,
                initial: true
            }
        },
        methods: {
            ...mapMutations(['setWindowWidth', 'setWindowHeight', 'busyOn', 'busyOff', 'resizingOn', 'resizingOff']),
            handleResizeEnd() {
                this.initial = true;
                this.setWindowWidth(window.innerWidth);
                this.setWindowHeight(window.innerHeight);
                this.busyTimer = setTimeout(() => {
                    this.busyOff();
                    this.resizingOff();
                }, 1500);
            },
            handleResizeStart() {
                if (this.initial) {
                    this.initial = false;
                    if (this.busyTimer) clearTimeout(this.busyTimer);
                    this.resizingOn();
                    this.busyOn();
                }
                if (this.resizeTimer) clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(this.handleResizeEnd, 500);
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResizeStart);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResizeStart);
        }
    }
</script>
