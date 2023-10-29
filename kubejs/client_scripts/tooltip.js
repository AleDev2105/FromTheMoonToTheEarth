/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:tome_of_knowledge', (object, _, text) => {
        if(object.getNbtString() != 'null') {
            var item = object.getNbtString()
            var itemNBT = item.substring(8, item.length() - 2)
            var prettyItemNBT = itemNBT.replace('_', ' ').toUpperCase()

            text.add(Text.of('This tome unlock the ').append(Text.green(prettyItemNBT)).append(' stage'))
        }
    })
})