/*
    @author AleDev
    CurseForge: https://legacy.curseforge.com/members/aledev
*/

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('devDebug')
        .requires(src => src.hasPermission(2))
        .then(Commands.argument('arg1', Arguments.STRING.create(event))
            .executes(ctx => {
                const arg1 = Arguments.STRING.getResult(ctx, 'arg1')
                const player = ctx.source.player

                if (arg1 == 'chestplate') player.give(Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}'))

                return 1
            })
        )
    )
})