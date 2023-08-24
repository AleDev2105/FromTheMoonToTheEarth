LootJS.modifiers(event => {
    event.addLootTableModifier('ad_astra:chests/village/moon/house')
        .addLoot(Item.of('kubejs:tome_of_knowledge', '{Stage:moon_one}'))
        .randomChance(0.99)
})

ItemEvents.rightClicked('kubejs:tome_of_knowledge', event => {
    var item = event.getItem().getNbtString() // output -> {Stage:"stage_name"}
    var itemNBT = item.substring(8, item.length() - 2 ) // output -> stage_name

    if (itemNBT != null) {
        event.server.runCommand(`thitemstages add @p ${itemNBT}`)
    } else {
        event.player.tell('')
    }
})