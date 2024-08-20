const rogue_l1 = Item.of('rogues:rogue_spell_book', '{spell_container:{pool:"rogues:rogue",spell_ids:["rogues:slice_and_dice"]}}')
const rogue_l2 = Item.of('kubejs:rogue_l2', '{spell_container:{pool:"rogues:rogue",spell_ids:["rogues:slice_and_dice","rogues:shock_powder"]}}')
const rogue_l3 = Item.of('kubejs:rogue_l3', '{spell_container:{pool:"rogues:rogue",spell_ids:["rogues:slice_and_dice","rogues:shock_powder","rogues:shadow_step"]}}')
const rogue_l4 = Item.of('kubejs:rogue_l4', '{spell_container:{pool:"rogues:rogue",spell_ids:["rogues:slice_and_dice","rogues:shock_powder","rogues:shadow_step","rogues:vanish"]}}')

const warr_l1 = Item.of('rogues:warrior_spell_book', '{spell_container:{pool:"rogues:warrior",spell_ids:["rogues:throw"]}}')
const warr_l2 = Item.of('kubejs:warrior_l2', '{spell_container:{pool:"rogues:warrior",spell_ids:["rogues:throw","rogues:shout"]}}')
const warr_l3 = Item.of('kubejs:warrior_l3', '{spell_container:{pool:"rogues:warrior",spell_ids:["rogues:throw","rogues:shout","rogues:charge"]}}')
const warr_l4 = Item.of('kubejs:warrior_l4', '{spell_container:{pool:"rogues:warrior",spell_ids:["rogues:throw","rogues:shout","rogues:charge","rogues:whirlwind"]}}')
/*
const archer_l1 = Item.of('archers:archer_spell_book', "{display:{Name:'{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#1eff00\",\"text\":\"Novice Archery Manual\"}'},spell_container:{pool:\"archers:archer\",spell_container:\"ARCHERY\",spell_ids:[\"archers:power_shot\"]}}"), 
const archer_l2 = Item.of('archers:archer_spell_book', "{display:{Name:'{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#0070dd\",\"text\":\"Adept Archery Manual\"}'},spell_container:{pool:\"archers:archer\",spell_container:\"ARCHERY\",spell_ids:[\"archers:power_shot\",\"archers:entangling_roots\"]}}")
const archer_l3 = Item.of('archers:archer_spell_book', "{display:{Name:'{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#a335ee\",\"text\":\"Expert Archery Manual\"}'},spell_container:{pool:\"archers:archer\",spell_container:\"ARCHERY\",spell_ids:[\"archers:power_shot\",\"archers:entangling_roots\",\"archers:barrage\"]}}")
const archer_l4 = Item.of('archers:archer_spell_book', "{display:{Name:'{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#ff8000\",\"text\":\"Master Archery Manual\"}'},spell_container:{pool:\"archers:archer\",spell_container:\"ARCHERY\",spell_ids:[\"archers:power_shot\",\"archers:entangling_roots\",\"archers:barrage\",\"archers:magic_arrow\"]}}")
*/
const archer_l1 = Item.of('archers:archer_spell_book', '{spell_container:{pool:"archers:archer",spell_container:"ARCHERY",spell_ids:["archers:power_shot"]}}') 
const archer_l2 = Item.of('kubejs:archer_l2', '{spell_container:{pool:"archers:archer",spell_container:"ARCHERY",spell_ids:["archers:power_shot","archers:entangling_roots"]}}')
const archer_l3 = Item.of('kubejs:archer_l3', '{spell_container:{pool:"archers:archer",spell_container:"ARCHERY",spell_ids:["archers:power_shot","archers:entangling_roots","archers:barrage"]}}')
const archer_l4 = Item.of('kubejs:archer_l4', '{spell_container:{pool:"archers:archer",spell_container:"ARCHERY",spell_ids:["archers:power_shot","archers:entangling_roots","archers:barrage","archers:magic_arrow"]}}')

const mage_l1 = 'irons_spellbooks:copper_spell_book'

const ink1 = "irons_spellbooks:uncommon_ink"
const ink2 = "irons_spellbooks:rare_ink"
const ink3 = "irons_spellbooks:epic_ink"

ServerEvents.tags('item', event => {
    const books = ['rogues:rogue_spell_book', 'kubejs:rogue_l2','kubejs:rogue_l3','kubejs:rogue_l4','kubejs:archer_l2','kubejs:archer_l3','kubejs:archer_l4','kubejs:warrior_l2','kubejs:warrior_l3','kubejs:warrior_l4',]

    books.forEach(book => {
            event.removeAllTagsFrom(book)
            event.add("curios:spellbook",book)
        })

})

ServerEvents.recipes(event => {

    function upgradeSpellbook(book1, book2, ink, rune, flavor1, flavor2, flavor3) {
        event.shaped(book2, 
            [
            'DAD',
            'EBE',
            'FCF'    
            ],
            {
                A: ink,
                B: book1,
                C: rune,
                D: flavor1,
                E: flavor2,
                F: flavor3
            }
        )
    }

    event.shapeless(archer_l1, [mage_l1, "minecraft:target", "alexsmobs:roadrunner_feather", "irons_spellbooks:arcane_essence"])
    event.shapeless(warr_l1, [mage_l1, "born_in_chaos_v1:dark_metal_ingot","butcher:rawbearmeat", "irons_spellbooks:arcane_essence"])
    event.shapeless(rogue_l1, [mage_l1, "minecraft:phantom_membrane", "classic_capes:minecon_cape_16", "irons_spellbooks:arcane_essence"])

    upgradeSpellbook(archer_l1, archer_l2, ink1, "irons_spellbooks:nature_rune", "minecraft:rose_bush", "minecraft:vine", "miners_delight:cave_carrot")
    upgradeSpellbook(archer_l2, archer_l3, ink2, "irons_spellbooks:lightning_rune", 'irons_spellbooks:lightning_bottle', Item.of('minecraft:potion', '{Potion:"minecraft:swiftness"}'), Item.of('minecraft:potion', '{Potion:"spelunkers_charm:haste"}'))
    upgradeSpellbook(archer_l3, archer_l4, ink3, "irons_spellbooks:arcane_rune", "spelunkery:portal_fluid_bottle", "minecraft:glowstone_dust", "minecraft:glow_ink_sac")

    upgradeSpellbook(warr_l1, warr_l2, ink1, "irons_spellbooks:arcane_rune", "minecraft:book", "minecraft:feather", "minecraft:bone")
    upgradeSpellbook(warr_l2, warr_l3, ink2, "irons_spellbooks:protection_rune", "create:powdered_obsidian", "minecraft:sugar", "create:iron_sheet")
    upgradeSpellbook(warr_l3, warr_l4, ink3, "irons_spellbooks:fire_rune", "minecraft:fire_charge", "rogues:iron_double_axe", "born_in_chaos_v1:spiny_shell")

    upgradeSpellbook(rogue_l1, rogue_l2, ink1, 'irons_spellbooks:lightning_rune', 'irons_spellbooks:lightning_bottle', 'spelunkery:saltpeter', 'supplementaries:ash')
    upgradeSpellbook(rogue_l2, rogue_l3, ink2, 'irons_spellbooks:ender_rune', 'minecraft:ender_pearl', 'born_in_chaos_v1:pieceofdarkmetal', "spelunkery:portal_fluid_bottle")
    upgradeSpellbook(rogue_l3, rogue_l4, ink3, 'irons_spellbooks:arcane_rune', Item.of('minecraft:potion', '{Potion:"minecraft:invisibility"}'), 'minecraft:phantom_membrane', '#minecraft:wool')
  })


