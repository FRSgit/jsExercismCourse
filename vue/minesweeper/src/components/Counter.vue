<template>
    <div class="clickCounter">
        {{ clickCounter }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Counter',
    props: {
        clickCounter: {
            type: Number,
            required: true,
        },
    },
})
</script>

<style lang="scss" scoped>
.clickCounter {
    display: inline-block;
    width: 100px;
    height: 1.5em;
    line-height: 1.5em;
    padding-top: 0.2ex;
    border-radius: 1.5em;
    font-size: 1.25rem;
    color: #fff;
    background-color: #cde;
}
</style>