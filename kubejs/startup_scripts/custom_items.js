/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

//Platform.mods.emendatusenigmatica.name = 'KubeJS'

StartupEvents.registry('item', event => {
    event.create('kubejs:tome_of_knowledge')
        .displayName('Tome of Knowledge')
        .maxStackSize(1)
        .fireResistant()
        .tag('forge:tome_of_knowledge')
})