ServerEvents.registry('neoforge:biome_modifier', event => {
    event.create('add_phantoms', 'add_spawns')
        .biomes('#c:is_end')
        .spawns([
            {
                entityType: 'minecraft:phantom',
                weight: 1,
                minCount: 1,
                maxCount: 1
            }
        ])
})
