/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

WorldgenEvents.add(event => {
    event.addOre(ore => {
        ore.addTarget('ad_astra:moon_desh_ore', 'emendatusenigmatica:horizonite_moon_stone_ore')
    })
})