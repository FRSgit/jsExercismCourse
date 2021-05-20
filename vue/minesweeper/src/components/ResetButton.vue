<template>
    <button 
        @click="$emit('click')" 
        class="reset-button" 
        :class="{'reset-button--game-lost': !stillPlay}"
    >
        <div class="reset-button__eye reset-button__eye--left"/>
        <div class="reset-button__eye reset-button__eye--right"/>
        <div class="reset-button__mouth"/>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ResetButton',
    emits: ['click'],
    props: {
        stillPlay: {
            type: Boolean,
            required: true,
        }
    }
})
</script>

<style lang="scss" scoped>
$size: 35px;
$eyeSize: 5px;

.reset-button {
    $self: &;

    cursor: pointer;
    position: relative;
    vertical-align: middle;
    border: none;
    outline: none;
    padding: 0;
    height: $size;
    width: $size;
    border-radius: 50%;
    background-color: #ffdd43;

    &__eye {
        position: absolute;
        top: 25%;
        border: none;
        height: $eyeSize * 1.5;
        width: $eyeSize;
        border-radius: 50%;
        background-color: black;

        &--left {
            left: 25%;
        }

        &--right {
            right: 25%;
        }
    }

    &__mouth {
        position: absolute;
        bottom: 20%;
        left: 50%;
        border: 3px solid transparent;
        border-bottom-color: black;
        height: 50%;
        width: 50%;
        border-radius: 50%;
        transform: translateX(-50%);
    }

    &:active{
        #{$self}__eye--left{
            transform: scaleY(0.5);
        }
    }

    &--game-lost {
        #{$self}__mouth {
            transform: rotateZ(180deg) translateX(50%);
            transform-origin: 50% calc(100% - 1.5px);
        }
    }
}
</style>