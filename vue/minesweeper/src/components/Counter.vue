<template>
    <div class="click-counter">
        <div class="click-counter--icon" v-if="$slots.icon">
            <slot name="icon"/>
        </div>
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

.click-counter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 1.5em;
    vertical-align: middle;
    line-height: 1.5em;
    padding-top: 0.2ex;
    border-radius: 1.5em;
    font-size: 1.25rem;
    color: #fff;
    background-color: #cde;

    &--icon {
        fill: #fb4499;
        height: 80%;
        width: 25%;
    }
}
</style>