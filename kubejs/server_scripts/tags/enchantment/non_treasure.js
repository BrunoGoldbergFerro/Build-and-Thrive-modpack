ServerEvents.tags('enchantment', event => {
      event.add('minecraft:non_treasure', 'buildandthrive:melee_protection', 'buildandthrive:magic_protection')
      event.remove('minecraft:non_treasure', 'minecraft:silk_touch')

})
