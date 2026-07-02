LootJS.lootTables(event => {
    event
    .getLootTable("minecraft:chests/trial_chambers/reward_unique")
    .firstPool()
    .addEntry(LootEntry.reference("buildandthrive:chests/enchantment_reach"))
})
