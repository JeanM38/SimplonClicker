import { upgrade } from "./upgrade";
import amulet from '../../ressources/images/items/amulet.png';
import armor from '../../ressources/images/items/armor.png';
import boots from '../../ressources/images/items/boots.png';
import bow from '../../ressources/images/items/bow.png';
import gloves from '../../ressources/images/items/gloves.png';
import helmet from '../../ressources/images/items/helmet.png';
import ring from '../../ressources/images/items/ring.png';
import shield from '../../ressources/images/items/shield.png';
import spear from '../../ressources/images/items/spear.png';
import sword from '../../ressources/images/items/sword.png';

export const items = [
    {
        name: 'Sword',
        level: 1,
        img: sword,
        description: 'Ceci est une épée',
        damage: 5,
        category: 'clicDamage',
        price: 5,
        upgrades: upgrade.filter(e => e.category = "clicDamage")
    },
    {
        name: 'Shield',
        level: 1,
        img: shield,
        description: 'Ceci est un bouclier',
        damage: 5,
        category: 'dps',
        price: 50,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Armor',
        level: 1,
        img: armor,
        description: 'Ceci est une armure',
        damage: 74,
        category: 'dps',
        price: 1000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Spear',
        level: 1,
        img: spear,
        description: 'Ceci est une lance',
        damage: 245,
        category: 'dps',
        price: 4000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Amulet',
        level: 1,
        img: amulet,
        description: 'Ceci est une amulette',
        damage: 976,
        category: 'dps',
        price: 20000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Boots',
        level: 1,
        img: boots,
        description: 'Ce sont des bottes',
        damage: 3725,
        category: 'dps',
        price: 297000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Gloves',
        level: 1,
        img: gloves,
        description: 'Ce sont des gants',
        damage: 10859,
        category: 'dps',
        price: 1190000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Bow',
        level: 1,
        img: bow,
        description: 'Ceci est un arc',
        damage: 47143,
        category: 'dps',
        price: 7420000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Helmet',
        level: 1,
        img: helmet,
        description: 'Ceci est un casque',
        damage: 555000,
        category: 'dps',
        price: 44600000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    },
    {
        name: 'Ring',
        level: 1,
        img: ring,
        description: 'Ceci est un anneau',
        damage: 2320000,
        category: 'dps',
        price: 297000000,
        upgrades: upgrade.filter(e => e.category = "dps"),
    }
]