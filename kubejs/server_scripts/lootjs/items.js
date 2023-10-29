/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

LootJS.modifiers(event => {
    event.addLootTableModifier('ad_astra:chests/village/moon/house')
        .addLoot(Item.of('kubejs:tome_of_knowledge', '{Stage:moon_one}'))
        .randomChance(0.99)
})

ItemEvents.rightClicked('kubejs:tome_of_knowledge', event => {
    var itemNBT = event.item.nbtString // output -> {Stage:"stage_name"}

    if (itemNBT != 'null') {
        var itemStage = item.substring(8, itemNBT.length() - 2) // output -> stage_name
        event.server.runCommand(`gamestage add ${event.player.username} ${itemStage}`)
    } else {
        event.player.tell('This tome has no stages to unlock')
    }
})