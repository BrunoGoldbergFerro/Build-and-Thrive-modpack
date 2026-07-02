LootJS.lootTables(event => {
    event
    .getLootTable("minecraft:archaeology/trail_ruins_rare")
    .firstPool()
    .addEntry(LootEntry.reference("buildandthrive:archaeology/trail_silk"))
})
