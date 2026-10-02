export interface InstagramPostModel {
  id: string;
  postedAt: string;
  title: string;
  body: string;
  /** Public Instagram permalink or profile URL when a post permalink is unavailable. */
  sourceUrl: string;
}
