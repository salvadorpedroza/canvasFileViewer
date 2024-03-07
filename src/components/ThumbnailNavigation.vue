<template>
  <v-navigation-drawer permanent :model-value="show" :width="md ? 170 : 210" class="bg-white">
    <div class="py-4 h-100 d-flex flex-column">
      <div class="d-flex justify-space-between pb-2 px-4">
        <span :class="md ? 'text-subtitle-1' : 'text-h6'">Thumbnails</span>
        <v-btn
          id="open_in_full"
          class="px-0 py-0 d-flex"
          variant="text"
          @click="
            dialog = true;
          "
          icon="open_in_full"
        />
      </div>
      <div ref="scrollContainer" class="scroll-container px-lg-8 px-md-4">
        <div
          class="thumbnail"
          v-for="page in fileStore.pages"
          :key="page.id"
          :class="{ thumbnail__selected: fileStore.currentPage.index === page.order }"
          @click="fileStore.scrollToPage(page.order, false)"
          :id="`#thumbnail${page.order}`"
        >
          <div class="mb-2 d-flex" :href="`#canvas${page.order}`">
            <v-icon v-if="!page.imageSrc">perm_media</v-icon>
            <img v-else class="thumbnail__img" :src="page.imageSrc" />
          </div>
          <label class="thumbnail__label">{{ page.order + 1 }}</label>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
  <div :class="{ 'display-md': md, display: lgAndUp, placeholder: !show }"></div>
<!--   <v-dialog v-model="dialog" width="70%" height="100%" @update:model-value="trackDialogClosed">
    <ThumbnailDialog v-model="tabSelected" @close="dialog = false"></ThumbnailDialog>
  </v-dialog> -->
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDisplay } from 'vuetify';

import { THUMBNAILS_TOP_POSITION } from '@/constants/file.constant'
import { useFileStore } from '@/store/file.store';
import type { CurrentPage } from '@/models/file.model';

//import ThumbnailDialog from './ThumbnailDialog.vue';

const { md, lgAndUp } = useDisplay();

interface Props {
  show: boolean;
}
defineProps<Props>();
const fileStore = useFileStore();
const dialog = ref(false);
const scrollContainer = ref<HTMLDivElement>();
const tabSelected = ref('medium');

watch(
  () => fileStore.currentPage,
  (currentPage: CurrentPage) => {
    const el = document.getElementById(`#thumbnail${currentPage.index}`);
    if (!el) {
      return;
    }

    const position = el.getBoundingClientRect();

    if (!scrollContainer.value) {
      return;
    }

    // checking whether fully visible
    if (position.top >= THUMBNAILS_TOP_POSITION && position.bottom <= scrollContainer.value.clientHeight) {
      return;
    }

    el?.scrollIntoView({ block: 'nearest' });
  },
);

</script>
<style lang="scss" scoped>
#open_in_full {
  width: 32px;
  height: 32px;
}

.thumbnail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  border-radius: 2px;
  cursor: pointer;

  &__img {
    max-width: 100%;
    max-height: 100%;
    border: 1px solid gray;
    &:hover {
      filter: brightness(85%);
    }
  }

  &__label {
    font-size: 22px;
    line-height: 28px;
  }

  &__selected {
    .thumbnail__img {
      border: 1px solid #1900ff;
    }

    .thumbnail__label {
      color: #1900ff;
    }
  }
}

.scroll-container {
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.display {
  width: 210px;
  transition: 0.2s;
}

.display-md {
  width: 170px;
  transition: 0.2s;
}

.placeholder {
  width: 0px;
  transition: 0.2s;
}
</style>
