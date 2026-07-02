BlockEvents.broken('minecraft:magma_block',event => {
    let {player, block} = event
    let item = player.getHeldItem('main_hand')

    let itemIsSilky = item.components
    .get('minecraft:enchantments')
    .keySet()
    .some(key => key.unwrapKey().get().location() == 'minecraft:silk_touch')

    if(itemIsSilky)  
        return

    block.set('minecraft:lava')

})

