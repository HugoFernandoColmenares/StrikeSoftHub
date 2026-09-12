export interface BattleEventModel {
  id: string;
  title: string;
  location: string;
  date: string;
  ruleset: string;
  description: string;
  /** True while the date is a working proposal rather than a confirmed fixture. */
  isProvisional: boolean;
}
