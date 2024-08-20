ServerEvents.tags('block', event => {
    const earths = ['spelunkery:rock_salt_block','tfmg:galena', 'tfmg:bauxite', 'tfmg:fireclay', 'tfmg:lignite', 'tfmg:sulfur', 'spelunkery:sulfur_block', 'minecraft:clay', 'spelunkery:raw_nephrite', 'spelunkery:saltpeter_block', 'spelunkery:dust_block', 'minecraft:soul_sand', 'minecraft:sand', 'minecraft:gravel', 'minecraft:snow_block', 'minecraft:powder_snow']
    earths.forEach(earth => {
        event.add("forge:rare_earths", earth)
    })

})