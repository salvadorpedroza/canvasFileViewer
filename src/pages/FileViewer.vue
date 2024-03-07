<template>
  <ThumbnailNavigation :show="true"/>
  <v-main class="bg-gray">
    <DocumentComponent class="h-100"/>
  </v-main>
</template>

<script lang="ts" setup>
//import ThumbnailNavigation from '@/components/ThumbnailNavigation.vue';
import { useFileStore } from '@/store/file.store';
import { onBeforeMount } from 'vue';
import { image } from '@/assets/page';

const fileStore = useFileStore();

onBeforeMount(() => {
  for(let i = 0; i < 400; i++) {
    fileStore.pages.push({
      id: (i + 1).toString(),
      order: i,
      imageSrc: "data:image/png;base64," + image,
    })
  }
});
</script>
<style scoped>
  .bg-gray {
    background-color: #eeeeee;
  }
</style>

