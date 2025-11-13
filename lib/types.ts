// lib/types.ts

export interface Hero {
    id: number;
    name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    base_health: number;
    base_mana: number;
}

export interface CounterPick {
    hero_id: number;
    countered_by: number[];
}

export interface WardSpot {
    id: number;
    position: { x: number; y: number; };
    description: string;
}

export interface Build {
    hero_id: number;
    item_ids: number[];
    skills: string[];
}

export interface ProGuide {
    hero_id: number;
    guide_url: string;
    tips: string[];
}

export interface Meta {
    meta_id: number;
    hero_id: number;
    win_rate: number;
    pick_rate: number;
}