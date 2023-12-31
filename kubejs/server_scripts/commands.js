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
                const server = ctx.source.server

                if (arg1 == 'chestplate') player.give(Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"ad_astra:oxygen"}]}}'))
                else if (arg1 == 'addAllStage') for (const stage in itemToStage) { server.runCommandSilent(`gamestage add ${player.username} ${stage}`) }
                else if (arg1 == 'removeAllStage') for (const stage in itemToStage) { server.runCommandSilent(`gamestage remove ${player.username} ${stage}`) }
                else return 0

                return 1
            })
        )
    )
})