export interface ClanPostModel {
  id: string;
  title: string;
  clanName: string;
  body: string;
  authorName: string;
  createdAt: string;
  /** True for placeholder threads shown before the real board is migrated. */
  isSample: boolean;
}
