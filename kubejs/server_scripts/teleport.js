/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

let $HeightMapTypes = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap$Types')

PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('starting')) {

    // Get the ad astra moon level
    let moonLevel = event.server.getLevel("ad_astra:moon")
    let playerPos = event.player.blockPosition().mutable()

    // Generate the chunk in the same player position
    event.server.runCommandSilent(`forge generate ${playerPos.x} 0 ${playerPos.z} 1 ad_astra:moon`)

    event.server.scheduleInTicks(1, () => {

      // Get y coordinate and set to playerPos
      let tpY = moonLevel.getChunkAt(playerPos).getHeight($HeightMapTypes.WORLD_SURFACE_WG, playerPos.x, playerPos.z)
      let tpPos = playerPos.setY(tpY)

      // Teleport the player ...
      event.player.teleportTo("ad_astra:moon",tpPos.x, tpPos.y + 1, tpPos.z, 0, 0)

      event.server.scheduleInTicks(40, () => {
        // ... and set the world spawn point after 2 seconds ...
        event.server.runCommandSilent(`execute in ad_astra:moon run spawnpoint ${event.player.username} ${tpPos.x} ${tpPos.y + 1} ${tpPos.z}`)

        // ... and add keepinventory ...
        event.server.runCommandSilent('gamerule keepInventory true')

        // ... and set experience levels to 0 (probably because the advancement to go to the moon give experience to the player)
        event.server.runCommandSilent(`experience set ${event.player.username} 0 points`)
        event.server.runCommandSilent(`experience set ${event.player.username} 0 levels`)
      })

      event.player.tell('Initial setup successful')
    })

    // Equip armor
    event.player.setEquipment('head', 'ad_astra:space_helmet')
    event.player.setEquipment('chest', Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}'))
    event.player.setEquipment('legs', 'ad_astra:space_pants')
    event.player.setEquipment('feet', 'ad_astra:space_boots')

    event.player.tell('Armor equipped to the player')

    // Give items
    //event.player.setMainHandItem()
    //event.player.setOffHandItem()
    //event.player.give()

    event.player.tell(`Tools/Items given to the player ${event.player.name}`)

    // Add the stage
    event.player.stages.add('starting')
  }
})

console.debug('Loaded teleport.js')