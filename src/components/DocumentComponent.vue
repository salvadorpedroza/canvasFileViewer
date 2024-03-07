<template>
  <div class="doc-container" ref="docContainer" @scroll="updatePageIndex" @wheel="onZoom">
    <template v-if="isReady">
      <div class="d-flex" v-for="p in fileStore.pages">
        <div class="mx-auto page d-flex" :id="'page-' + p.order">
          <PageComponent :imageSrc="p.imageSrc" :id="p.id" :order="p.order" ref="pages" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useCssVars, watch } from 'vue';
import { useFileStore } from '@/store/file.store';
import { DOC_CONTAINER_PADDING_X, DOC_CONTAINER_PADDING_Y, SLOW_DOWN_ZOOM } from '@/constants/file.constant';
import PageComponent from './PageComponent.vue';
import { CurrentPage } from '@/models/file.model';

const fileStore = useFileStore();
const docContainer = ref<HTMLDivElement>();
const pages = ref<typeof PageComponent []>();
const isReady = ref(false);

useCssVars(() => ({
  paddingY: DOC_CONTAINER_PADDING_Y + 'px',
}));

onMounted(()=> {
  const img = new Image();
  img.src = fileStore.pages[0]?.imageSrc;
  
  if(!img){
    return
  }

  img.onload = () => {
    fileStore.imgAspectRatio = img.height / img.width;
    calcSize();
    isReady.value = true;
  }
});

function calcSize() {
  const docContainerWidth = (docContainer.value?.clientWidth || 0) - DOC_CONTAINER_PADDING_X * 2;
  const docContainerHeight = (docContainer.value?.clientHeight || 0) - DOC_CONTAINER_PADDING_Y * 2;

  const docContainerAspectRatio = docContainerHeight / docContainerWidth;

  if (docContainerAspectRatio < fileStore.imgAspectRatio) {
    // Fit Canvas to document container height
    fileStore.initialCanvasHeight = docContainerHeight;
    fileStore.initialCanvasWidth = (docContainerHeight / fileStore.imgAspectRatio);
  } else {
    // Fit Canvas to document container width
    fileStore.initialCanvasWidth = docContainerWidth;
    fileStore.initialCanvasHeight = (docContainerWidth * fileStore.imgAspectRatio);
  }
}

function onZoom(evt: WheelEvent) {
  const { ctrlKey, metaKey } = evt;
  // This condition is to avoid zooming when trying to scroll
  if (!ctrlKey && !metaKey) return;

  const delta = evt.deltaY;
  let zoom = fileStore.zoom
  // We divide delta, to avoid zooming very fast
  zoom = zoom - delta / SLOW_DOWN_ZOOM;

  fileStore.setZoom(zoom);

  console.log(fileStore.zoom);

  if(!pages.value) {
    return;
  }

  for(let p of pages.value) {
    p.setZoom();
  }

  evt.preventDefault();
  evt.stopPropagation();
}

function updatePageIndex() {
  const el = docContainer.value;

  if (el === undefined) {
    return;
  }

  const { scrollTop } = el;
  const index = Math.floor((scrollTop + DOC_CONTAINER_PADDING_Y) / (fileStore.canvasHeight + DOC_CONTAINER_PADDING_Y * 2 ));
  fileStore.scrollToPage(index, true);
}

function scrollToIndex(index: number) {
  const el = document.getElementById(`page-${index}`);
  el?.scrollIntoView({ block: 'start' });
}

watch(
  () => fileStore.currentPage,
  (currentPage: CurrentPage) => {
    if (!currentPage.scroll) {
      scrollToIndex(currentPage.index);
    }
  },
);
</script>
<style>
.doc-container {
  overflow: auto;
  max-height: 100vh;
}

.page {
  padding: var(--paddingY) 0;
}
</style>
