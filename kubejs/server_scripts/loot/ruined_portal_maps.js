LootJS.lootTables(event => {
    event
    .getLootTable("minecraft:chests/ruined_portal")
    .createPool()
    .addEntry(LootEntry.reference("buildandthrive:chests/ruined_portal_maps"))
})
