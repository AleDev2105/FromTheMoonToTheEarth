SkillEvents.registration(event => {
    event.add('moon', 'numeric', skill => {
        skill.initialValue(0)
        .description('Unknown item')
    })
})