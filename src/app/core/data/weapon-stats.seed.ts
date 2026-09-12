import { WeaponStats } from "../models/weapon.model";

export const weaponStat = (stats: WeaponStats) => [
    { label: 'Durability', value: stats.durability, note: 'Hits before the edge needs work' },
    { label: 'Heft', value: stats.weight, note: 'Felt weight through a long bout' },
    { label: 'Handling', value: stats.handling, note: 'Speed of recovery between strikes' },
    { label: 'Reach', value: stats.range, note: 'Distance it keeps an opponent at' },
];