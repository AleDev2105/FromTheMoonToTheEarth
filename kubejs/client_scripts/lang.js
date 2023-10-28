ClientEvents.highPriorityAssets(event => {

    const fluidsEE = [
        { id: 'iron', name: 'Iron' }
    ]

    event.addLang('fluid.emendatusenigmatica.iron', 'Molten Iron') // YES
    event.addLang('block.emendatusenigmatica.iron', 'Molten Iron') // ?
    event.addLang('item.emendatusenigmatica.iron_bucket', 'Molten Iron Bucket') // NO

    // EE Fluid
    /*
    fluidsEE.forEach(fluid => {
        event.addLang(`block.emendatusenigmatica.${fluid.id}`, `Molten ${fluid.name}`) // NO
        event.addLang(`item.emendatusenigmatica.${fluid.id}_bucket`, `Molten ${fluid.name} Bucket`) // NO
        event.addLang(`fluid.emendatusenigmatica.${fluid.id}_bucket`, `Molten ${fluid.name} Bucket`) // ?
        event.addLang(`fluid.emendatusenigmatica.${fluid.id}`, `Molten ${fluid.name}`) // OK
    })
    */
})