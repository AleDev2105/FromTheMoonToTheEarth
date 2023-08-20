ClientEvents.highPriorityAssets(event => {

    const fluidsEE = [
        { id: 'aluminum', name: 'Aluminum' }
    ]

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