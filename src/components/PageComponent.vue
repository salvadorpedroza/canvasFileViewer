<template>
  <canvas ref="c"></canvas>
</template>
 
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFileStore } from '@/store/file.store';
import { Page } from '@/models/file.model';

defineExpose({ setZoom });

const fileStore = useFileStore();
const props = defineProps<Page>();
const img = document.createElement('img');
const c = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D;

onMounted(()=> {
  img.src = props.imageSrc;
  
  if(!c.value) {
    return;
  }

  const context = c.value.getContext("2d");

  if(context) {
    ctx = context;
  } else {
    console.log('no context');
  }
 
  img.onload = function() {
    ctx.canvas.width = fileStore.initialCanvasWidth;
    ctx.canvas.height = fileStore.initialCanvasHeight;
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, fileStore.initialCanvasWidth, fileStore.initialCanvasHeight); // destination rectangle
  };
})

function setZoom() {
  ctx.canvas.width = fileStore.canvasWidth;
  ctx.canvas.height = fileStore.canvasHeight;
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, fileStore.canvasWidth, fileStore.canvasHeight);
}
</script>
