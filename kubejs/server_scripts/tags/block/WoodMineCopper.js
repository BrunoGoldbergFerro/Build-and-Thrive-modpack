ServerEvents.tags('block', event => {
    const copperblocks = event.get('buildandthrive:copper').getObjectIds()
      event.remove('minecraft:needs_stone_tool', copperblocks)

})
