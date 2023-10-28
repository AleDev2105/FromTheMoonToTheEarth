const itemToStage = {
    // stage_name: [item_ids]

    'moon_base': ['ad_astra:astrodux', 'minecraft:soul_soil', 'ad_astra:moon_cobblestone', 'ad_astra:moon_sand', 'ad_astra:moon_stone']
}

ServerEvents.loaded(_ => {

    for (const stage in itemToStage) {
        if (itemToStage.hasOwnProperty.call(itemToStage, stage)) {
            const item = itemToStage[stage];
            addItemStage(item, stage)
        }
    }

    /*
    itemToStage.forEach(stage, items => {
        items.forEach(item => {
            addItemStage(stage, item)
        })
    })
    */
})