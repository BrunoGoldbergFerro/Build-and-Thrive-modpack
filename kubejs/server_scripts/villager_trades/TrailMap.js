MoreJS.wandererTrades(event => {
    const trade = VillagerUtils.createStructureMapTrade("5x minecraft:emerald", "minecraft:trail_ruins")
            .displayName("Trail Explorer Map")
            .marker("banner_orange")
            .noPreview()
            .scale(2)
    event.addTrade(2, trade)
})

