export type CommentState = 'new' | 'place_on_page' | 'remove_from_page' | 'view_on_page' | 'view_in_list' | 'delete' | '';

export type CommentActions = 'create' | 'update' | 'delete';

export interface CurrentPage {
  index: number;
  scroll: boolean;
}

export interface Page {
  id: string;
  order: number;
  imageSrc: string;
}
export interface PageImage {
  image: string;
}

export interface Thumbnail {
  id: string;
  order: number;
  imageSrc: string;
}
export interface ThumbnailImage {
  image: string;
}

export interface FileComment {
  createdByName?: string;
  createdByID?: string;
  createdTime?: string;
  documentUUID: string;
  fabric: string;
  id?: string;
  label: string;
  modifiedTime?: string;
  pageUUID: string;
  zoneUUID?: string;
  x: number;
  y: number;
  relative_x?: number;
  relative_y?: number;
}

export interface ActionItem {
  name: string;
  callback?: (...args: unknown[]) => void;
  disabled: boolean;
}

export type scrollToPageFunction = (index: number, scroll: boolean) => void;
export type setCommentStateFunction = (state: CommentState, comment?: FileComment) => void;
export type setZoomFunction = (zoom: number) => void;
export type getPageImageFunction = (id: string) => Promise<string>;
export type commentActionFunction = (comment: FileComment, action: CommentActions) => Promise<FileComment | undefined>;

export interface Info {
  name?: string;
  uploadedBy?: string;
  uploadedDate?: string;
  description?: string;
  size?: string | number;
  type?: string;
}

export interface FileState {
  //info: Info;
  currentPage: CurrentPage;
  pages: Page[];
  //thumbnails: Thumbnail[];
  //comments: FileComment[];
  //pageActionItems: ActionItem[];
  //userId: string;
  //userDisplayName: string;
  //hideNavigationArrows: boolean;
  //getPageImageFn: getPageImageFunction;
  //showComments?: boolean;
  //commentActionFn: commentActionFunction;
  //disabled?: boolean;
  //noPreview?: boolean;
  //commentState: CommentState;
  //currentComment: FileComment | undefined;
  zoom: number;
  initialCanvasHeight: number;
  initialCanvasWidth: number;
  imgAspectRatio: number;
}