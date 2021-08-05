<template>
  <div class="bar">
    <div>
      <button type="button" @click="$emit('reset-username')">✎</button>
      {{ username }}
    </div>
    <div v-if="!areStatsLoading && stats">
      🕓 {{ stats.avgWinTime }}
      🏆 {{ stats.wins }}
      😵 {{ stats.losses }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';
import { useAxios } from '@vueuse/integrations';
import { instance } from '@/utils/axiosUtils';

export default defineComponent({
  name: 'UserBar',
  events: ['reset-username', 'update:update'],
  props: {
    username: {
      type: String,
      required: true,
    },
    update: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const { update, username } = toRefs(props);
    const stats = ref();
    const areStatsLoading = ref(false);

    watch(update, update => {
      if (update) {
        const { data, isFinished } = useAxios(`/stats?username=${username.value}`, instance);
        const deregisterIsFinished = watch(isFinished, isFinished => {
          areStatsLoading.value = !isFinished;
          if (isFinished) {
            stats.value = data.value;
            deregisterIsFinished();
            ctx.emit('update:update', false);
          }
        }, { immediate: true });
      }
    }, { immediate: true })
    
    return { areStatsLoading, stats };
  },
})
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  justify-content: space-between;
}
</style>

