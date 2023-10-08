// Ale2105 all right reserved - you CAN'T rewrite and redistribute with the explicit consents the code lines written in this file.

const $Restriction = Java.loadClass('net.darkhax.itemstages.Restriction')
const $RestrictionManager = Java.loadClass('net.darkhax.itemstages.RestrictionManager')

// Create restriction manager
var ITEM_MANAGER = $RestrictionManager

// Add restriction to the manager
// @param requiredStage type Restriction
function apply(restriction) {
    ITEM_MANAGER.INSTANCE.addRestriction(restriction)
}

// Create restriction, then add it to the manager
// @param requiredStage type String
function createRestrictionItem(requiredStage) { // apply in source code
    if (requiredStage.lenght == 0) {
        console.log('[GameStages] A restriction was created with no stages specified. This is not supported!')
        return
    }
    
    let restriction = new $Restriction(String(requiredStage))
    apply(restriction)
    return restriction
}

// @param condition type Predicate<ItemStack>
// @param requiredStage type String
function restrictInternal(condition, requiredStage) {
    return createRestrictionItem(requiredStage).restrict(condition)
}

// @param ingredient type String
// @param requiredStage type String
function addItemStage(ingredient, requiredStage) { // restrict in source code
    restrictInternal(Ingredient.of(ingredient), requiredStage)
}

// @param ingredient type String
// @param requiredStage type String
function addTagStage(tag, requiredStage) {
    Ingredient.of(`#${tag}`).itemIds.forEach(item => {
        addItemStage(item, requiredStage)
    })
}

// @param ingredient type String
// @param requiredStage type String
function addModStage(modid, requiredStage) { // createModRestriction in source code
    Ingredient.of(`@${modid}`).itemIds.forEach(item => {
        addItemStage(item, requiredStage)
    })
}