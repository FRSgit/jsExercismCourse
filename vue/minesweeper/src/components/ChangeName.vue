<template>
    <form @submit.prevent="$emit('update:username', inputValue)">
        <input v-model="inputValue" placeholder="Your username" />
        <button type="submit">Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue'

export default defineComponent({
    name: 'ChangeName',
    events: ['update:username'],
    props: {
        username: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const { username } = toRefs(props);
        const inputValue = ref(username.value);

        watch(username, () => inputValue.value = username.value);

        return { inputValue };
    }
})
</script>

