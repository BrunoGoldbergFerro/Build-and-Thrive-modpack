LootJS.lootTables(event => {
    event
    .getLootTable("minecraft:chests/simple_dungeon")
    .createPool()
    .addEntry(LootEntry.reference("buildandthrive:chests/dungeons_map"))
})
