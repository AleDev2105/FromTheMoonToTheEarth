LootJS.modifiers(event => {
    event.addLootTableModifier('ad_astra:chests/village/moon/house')
        .addLoot(Item.of('kubejs:tome_of_knowledge', '{Stage:moon_one}'))
        .randomChance(0.99)
})

ItemEvents.rightClicked('kubejs:tome_of_knowledge', event => {
    var itemNBT = event.item.nbtString // output -> {Stage:"stage_name"}

    if (itemNBT != 'null') {
        var itemStage = item.substring(8, itemNBT.length() - 2) // output -> stage_name

        //event.server.commandStorage(Internal.CommandStorage(`thitemstages check ${event.player.username}`))
        //var everyPlayerStages = event.server.getCommandStorage()
        //var player = event.player.username
        //event.player.tell(event.server.runCommand(`thitemstages check Ale2105`))

        //if (everyPlayerStages.find(element => element == itemNBT) != null) {
            //event.player.tell('AAA')
        //}
        event.server.runCommand(`thitemstages add @p ${itemStage}`)
    } else {
        event.player.tell('This tome has no stages to unlock')
    }
})