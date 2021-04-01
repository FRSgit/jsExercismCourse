<template>
    <div class="info-block">
        <h3><slot/>:</h3>
        <p class="info-block_value"><slot name="value" :random="random" /></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InfoBlock',
    setup() {
        const random = Math.floor(Math.random() * 101);
        return {
            random,
        }
    },
})
</script>

<style lang="scss" scoped>

.info-block {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
    
    &_value {
        padding-left: 5px;
        font-style: italic;
    }
}



</style>