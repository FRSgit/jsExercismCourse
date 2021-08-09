<template>
  <button class="btn" :type="$attrs.type || 'button'"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    padding: 5px 10px;
    border: 0;
    box-shadow: 0 -2px 0 0 rgba(0, 0, 0, .2) inset;
    background: #fff;
    font: inherit;
    font-size: .8em;
    border-radius: 8px;
    transition: box-shadow .15s;

    &:active, &:focus {
        outline: none;
        box-shadow: 0 0 0 rgba(0, 0, 0, .2) inset;
    }
}
</style>
