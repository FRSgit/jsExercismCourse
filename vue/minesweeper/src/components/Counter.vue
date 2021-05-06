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
            type: [Number, String],
            required: true,
        },
    },
})
</script>

<style lang="scss" scoped>

.click-counter {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 1.875rem;
    vertical-align: middle;
    line-height: 1.875rem;
    padding-top: 0.2ex;
    border-radius: 1.875rem;
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