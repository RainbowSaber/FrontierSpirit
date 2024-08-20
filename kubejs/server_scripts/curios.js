ServerEvents.tags('item', event => {
    event.removeAllTagsFrom('balancedflight:ascended_flight_ring')
    const scarfs = ['wardrobe:black_scarf', 'wardrobe:blue_scarf', 'wardrobe:brown_scarf', 'wardrobe:cyan_scarf', 'wardrobe:gray_scarf', 'wardrobe:green_scarf', 'wardrobe:light_blue_scarf', 'wardrobe:light_gray_scarf', 'wardrobe:lime_scarf', 'wardrobe:magenta_scarf', 'wardrobe:orange_scarf', 'wardrobe:pink_scarf', 'wardrobe:purple_scarf', 'wardrobe:red_scarf', 'wardrobe:white_scarf', 'wardrobe:yellow_scarf']
    scarfs.forEach(scarf => {
        event.add('curios:necklace', scarf)
    })
    const hatsnt = ["wardrobe:cake_hat_helmet", "wardrobe:fox_hat_helmet", "wardrobe:snow_fox_hat_helmet", "wardrobe:fletchers_hat_helmet", "wardrobe:farmers_hat_helmet", "overweight_farming:straw_hat", "wardrobe:hat_helmet", "wardrobe:leather_top_hat_helmet", "wardrobe:newsboy_cap_helmet"]


    const glasses = ['horseexpert:monocle', 'minecraft:spyglass', 'artifacts:night_vision_goggles', 'artifacts:snorkel', "create:goggles"]
    glasses.forEach(glass =>{
        event.remove('curios:head', glass)
        event.remove('curios:goggles', glass)
        event.add('accessories:face', glass)
        event.add('onion_onion:onion_proof_helmets', glass)
    })

    const capes = ['classic_capes:first_birthday_cape', 'classic_capes:vanilla_cape', 'classic_capes:unused_minecon_cape_1', 'classic_capes:unused_minecon_cape_2', 'classic_capes:unused_minecon_cape_3', 'classic_capes:shroom_cape', 'classic_capes:piggo_cape', 'classic_capes:melon_cape', 'classic_capes:classic_mojang_cape', 'classic_capes:mojang_cape', 'classic_capes:mojang_studios_cape', 'classic_capes:minecon_cape_11', 'classic_capes:minecon_cape_12', 'classic_capes:minecon_cape_13', 'classic_capes:minecon_cape_15', 'classic_capes:minecon_cape_16', 'classic_capes:bacon_cape', 'classic_capes:millionth_customer_cape', 'classic_capes:danny_bstyle_cape', 'classic_capes:julian_clark_cape', 'classic_capes:mr_messiah_cape', 'classic_capes:prismarine_c_ape', 'classic_capes:birthday_cape', 'classic_capes:valentine_cape', 'classic_capes:translator_cape', 'classic_capes:scrolls_champion_cape', 'classic_capes:cobalt_cape', 'classic_capes:mojira_moderator_cape', 'classic_capes:realms_map_maker_cape', 'classic_capes:turtle_cape', 'classic_capes:migrator_cape', 'classic_capes:christmas_cape', 'classic_capes:new_year_cape', 'classic_capes:founders_cape', 'classic_capes:the_pan_cape']
    capes.forEach(object => {
        event.remove('curios:back', object)
        event.add('accessories:cape', object)
    })

    /*const hats = ['born_in_chaos_v1:lord_pumpkinheads_hat_helmet', 'born_in_chaos_v1:spiritual_guide_sombrero_helmet', 'born_in_chaos_v1:missionary_hat_helmet', 'born_in_chaos_v1:damned_demomans_hat_helmet']
    hats.forEach(object => {
        event.add('curios:head', object)
    })
    */
})