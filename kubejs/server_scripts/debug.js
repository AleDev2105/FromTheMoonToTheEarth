// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

BlockEvents.rightClicked('emendatusenigmatica:steel_ingot', event => {
  event.entity.data.skills.all.forEach(skill => console.info(`Player has ${skill.name} at ${skill.value}`))
})

/*
LootJS.modifiers(event => {
  event.addBlockLootModifier('')
})
*/

/*
PlayerEvents.loggedIn(event => {
    if (!player.stages.has('starting')) {
        // Add the stage
        event.player.stages.add('starting')

        // Tp to the moon
        Utils.server.runCommand('execute in ad_astra:moon run tp ~ ~ ~')
    }
})
*/

// ,"materialColor": "c5d7ce"

/*
onEvent('recipes', event => {
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          { "item": "extendedcrafting:black_iron_ingot" },
          { "item": "extendedcrafting:luminessence" }
        ],
        "energy": 1000,
        "result": {
          "item": "extendedcrafting:advanced_catalyst"
        }
    })
})
*/

/*
let $HeightMapTypes = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap$Types')

PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('starting')) {

    // Get the ad astra moon level
    let moonLevel = event.server.getLevel("ad_astra:moon")
    let playerPos = event.player.blockPosition().mutable()

    // Generate the chunk in the same player position
    event.server.runCommandSilent(`forge generate ${playerPos.x} 0 ${playerPos.z} 1 ad_astra:moon`)
    
    // Wait 5 seconds then teleport the player
    //event.server.scheduleInTicks(5, () => {

      // Get y coordinate and set to playerPos
      let tpY = moonLevel.getChunkAt(playerPos).getHeight($HeightMapTypes.WORLD_SURFACE_WG, playerPos.x, playerPos.z)
      let tpPos = playerPos.setY(tpY)

      // Teleport the player and set the world spawn point
      event.player.teleportTo("ad_astra:moon",tpPos.x, tpPos.y + 1, tpPos.z, 0, 0)
      event.server.runCommandSilent(`setworldspawn ${tpPos.x} ${tpPos.y + 1} ${tpPos.z}`)
    //})

    // Add keepinventory
    event.server.runCommandSilent('gamerule keepInventory true')

    // Equip armor
    event.player.setEquipment('head', 'ad_astra:space_helmet')
    event.player.setEquipment('chest', Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}'))
    event.player.setEquipment('legs', 'ad_astra:space_pants')
    event.player.setEquipment('feet', 'ad_astra:space_boots')

    // Give items
    //event.player.setMainHandItem()

    // Add the stage
    event.player.stages.add('starting')
  }
})

console.debug('Loaded teleport.js')
*/

/*

    let moonLevel = event.server.getLevel("ad_astra:moon")
    let playerPos = event.player.blockPosition().mutable()
    event.server.runCommand(`forge generate ${playerPos.x} 0 ${playerPos.z} 1 ad_astra:moon`)
    
    event.server.scheduleInTicks(100, () => {
      let tpY = moonLevel.getHeight($HeightMapTypes.WORLD_SURFACE_WG, playerPos.x, playerPos.z)
      let tpPos = playerPos.setY(tpY)
      event.player.teleportTo("ad_astra:moon",tpPos.x, tpPos.y, tpPos.z, 0, 0)
    })

    event.player.stages.add('starting')

    // --------

    let moonLevel = event.server.getLevel("minecraft:the_nether")
    let playerPos = event.player.blockPosition().mutable()
    console.log(playerPos)
    let tpY = moonLevel.getHeight($HeightMapTypes.WORLD_SURFACE, playerPos.x, playerPos.z)
    console.log(tpY)
    let tpYWG = moonLevel.getHeight($HeightMapTypes.WORLD_SURFACE_WG, playerPos.x, playerPos.z)
    console.log(tpYWG)
    let tpPos = playerPos.setY(tpY)
    console.log(tpPos)
    event.player.teleportTo("minecraft:the_nether",tpPos.x, tpPos.y, tpPos.z, 0, 0)
*/