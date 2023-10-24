ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event

    event.register(
        Commands.literal('devDebug')
        .requires(src => src.hasPermission(2))
        .then(Commands.argument('arg1', Arguments.ITEM_STACK.create(event))
            
        )
    )
})