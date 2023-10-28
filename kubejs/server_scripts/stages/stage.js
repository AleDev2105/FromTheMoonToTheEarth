const itemToStage = {
    // stage_name: [item_ids]
    'moon_base': ['ad_astra:astrodux', 'minecraft:soul_soil', 'ad_astra:moon_cobblestone', 'ad_astra:moon_sand', 'ad_astra:moon_stone'],
    'moon_decoration': ['ad_astra:iron_plating', 'ad_astra:iron_plating_stairs', 'ad_astra:iron_plating_pressure_plate', 'ad_astra:polished_moon_stone', 'ad_astra:polished_moon_stone_stairs', 'ad_astra:polished_moon_stone_slab', 'ad_astra:moon_stone_brick_wall', 'ad_astra:iron_pillar', 'ad_astra:glowing_iron_pillar', 'ad_astra:marked_iron_pillar', 'minecraft:ladder', 'ad_astra:moon_stone_stairs', 'ad_astra:moon_stone_slab', 'ad_astra:moon_stone_bricks', 'ad_astra:moon_stone_brick_slab', 'ad_astra:moon_stone_brick_stairs', 'ad_astra:desh_plating', 'ad_astra:desh_plating_stairs', 'ad_astra:desh_plating_slab', 'ad_astra:desh_pillar', 'ad_astra:moon_cobblestone_stairs', 'ad_astra:moon_cobblestone_slab', 'ad_astra:cracked_moon_stone_bricks', 'ad_astra:chiseled_moon_stone_bricks', 'ad_astra:chiseled_moon_stone_slab', 'ad_astra:chiseled_moon_stone_stairs', 'ad_astra:iron_plating_slab', 'ad_astra:iron_plating_button'],
    'moon_rover': ['ad_astra:tier_1_rover'],
    'moon_wood': ['ad_astra:strophar_chest', 'ad_astra:strophar_ladder', 'ad_astra:strophar_fence_gate', 'ad_astra:strophar_fence', 'ad_astra:strophar_slab', 'ad_astra:strophar_stairs', 'ad_astra:strophar_planks', 'ad_astra:strophar_stem', 'ad_astra:strophar_cap', 'ad_astra:strophar_trapdoor', 'ad_astra:strophar_door']
}

ServerEvents.loaded(_ => {
    for (let stage in itemToStage) {
        if (itemToStage.hasOwnProperty.call(itemToStage, stage)) {
            let item = itemToStage[stage]
            addItemStage(item, stage)
        }
    }
})