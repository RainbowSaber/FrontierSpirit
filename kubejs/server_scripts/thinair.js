ServerEvents.tags('block', event => {
    const greenProv = ['railways:smokestack_diesel', 'design_decor:ceiling_fan', 'create:encased_fan', 'tfmg:air_intake']
    greenProv.forEach(block => {
        event.add("thinair:green_air_providers", block)
    })

    const yellowProv = ['tfmg:exhaust']
    yellowProv.forEach(block => {
        event.add("thinair:yellow_air_providers", block)
    })

    const blueProv = ['decorative_blocks:soul_chandelier', 'minecraft:soul_torch', 'bbb:soul_brazier', 'decorative_blocks:soul_brazier', 'supplementaries:sconce_soul', 'supplementaries:candle_holder_soul']
    blueProv.forEach(block => {
        event.add("thinair:blue_air_providers", block)
    })


})
