<template>
    <modal name="hello-world">
        hello, world!
    </modal>
</template>

<script>
    export default {
        name: 'Dialog',
        props: {
        },
        data() {
            return {
                dialog: false,
            }
        },
        methods: {
            show() {
                this.$modal.show('hello-world');
            },
            hide() {
                this.$modal.hide('hello-world');
            }
        }
    }
</script>

<style scoped>


</style>