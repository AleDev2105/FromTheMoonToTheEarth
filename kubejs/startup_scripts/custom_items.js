// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

//Platform.mods.emendatusenigmatica.name = 'KubeJS'

StartupEvents.registry('item', event => {
    event.create('kubejs:tome_of_knowledge')
        .displayName('Tome of Knowledge')
        .maxStackSize(1)
        .fireResistant()
        .tag('forge:tome_of_knowledge')
})