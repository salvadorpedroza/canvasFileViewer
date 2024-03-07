export const ZOOM_UNIT = 0.3; // Determines how much it will zoom in/out when click buttons
export const MIN_ZOOM = 0.5; // Min zoom allowed
export const MAX_ZOOM = 2; // Max zoom allowed
export const SLOW_DOWN_ZOOM = 200; // This number is used to reduce the velocity of zoom 200 times (touch/touchpad)
export const NAV_BAR_HEIGHT = 72;
export const DOC_CONTAINER_PADDING_Y = 16;
export const DOC_CONTAINER_PADDING_X = 16;
export const THUMBNAILS_TOP_POSITION = 125; // Distance between Thumbnails and top edge of window
export const COMMENT_ICON_PATH =
  'M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2ZM18 2V15.17L16.83 14H2V2H18ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z';
export const ADD_COMMENT_ICON_PATH =
  'M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z';
export const PRIMARY_COLOR = '#FF5100';
export const ADD_COMMENT_B64 =
  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGNTEwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIyIDRjMC0xLjEtLjktMi0yLTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDRWNHptLTIgMTMuMTdMMTguODMgMTZINFY0aDE2djEzLjE3ek0xMyA1aC0ydjRIN3YyaDR2NGgydi00aDRWOWgtNHoiLz48L3N2Zz4=';
export const ADD_COMMENT_CURSOR = `url(data:image/svg+xml;base64,${ADD_COMMENT_B64}), crosshair`;
export const ICON_WIDTH = 20;
export const ICON_HEIGHT = 20;
export const ADD_COMMENT_MODAL_HEIGHT = 236; // Heigth of the modal to create new comment page
export const MODAL_WIDTH = 326;
export const COMMENT_LINE_LENGTH = 32; // The max number of characters a text line can have on the comment modal
export const MODAL_HEIGHT_WITHOUT_TEXT = 84; // This is the height of a comment modal with no text
export const LINE_HEIGH = 24; // Height of 1 text line of the comments
export const FILE_VIEWER_STORE = 'fileViewerStore';