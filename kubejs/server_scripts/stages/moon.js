BlockSkillEvents.register(event => {
    event.restrict('ad_astra:moon_stone', restrict => {
        restrict.everything()
            .if(player => player.cannot('skills:moon', 1))
    })
})