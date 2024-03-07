import { defineStore } from 'pinia';
import { FileState } from '@/models/file.model';
import { MAX_ZOOM, MIN_ZOOM } from '@/constants/file.constant';

export const useFileStore = defineStore('file', {
  state: (): FileState => ({
    pages: [],
    zoom: 1,
    initialCanvasHeight: 0,
    initialCanvasWidth: 0,
    imgAspectRatio: 0,
    currentPage: { index: 0, scroll: false }
  }),
  actions: {
    setZoom(newZoom: number) {
      this.zoom = newZoom;
      // Min/Max zoom allowed
      if (this.zoom > MAX_ZOOM) this.zoom = MAX_ZOOM;
      if (this.zoom < MIN_ZOOM) this.zoom = MIN_ZOOM;
    },
    scrollToPage(index: number, scroll: boolean) {
      this.currentPage = { index, scroll };
    },
  },
  getters: {
    canvasHeight: (state) => state.initialCanvasHeight * state.zoom,
    canvasWidth: (state) => state.initialCanvasWidth * state.zoom,
  },
})