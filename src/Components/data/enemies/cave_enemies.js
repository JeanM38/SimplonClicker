/* Cave */
import armedMushroom from '../../../ressources/images/cave/armed-mushroom.png';
import bat from '../../../ressources/images/cave/bat.png';
import goblinWarrior from '../../../ressources/images/cave/goblin-warrior.png';
import goblin from '../../../ressources/images/cave/goblin.png';
import mushroom from '../../../ressources/images/cave/mushroom.png';
import voodooGoblin from '../../../ressources/images/cave/voodoo-goblin.png';
import mystic from '../../../ressources/images/bosses/mystic.png';
import batQueen from '../../../ressources/images/bosses/bat-queen.png';

export const cave_enemies = [
    /* Standard enemies */
    {
        name: "Armed Mushrrom",
        category: 'standard',
        img: armedMushroom,
        hp: 30,
        reward: 20
    },
    {
        name: "Bat",
        category: 'standard',
        img: bat,
        hp: 30,
        reward: 20
    },
    {
        name: "Goblin Warrior",
        category: 'standard',
        img: goblinWarrior,
        hp: 30,
        reward: 20
    },
    {
        name: "Goblin",
        category: 'standard',
        img: goblin,
        hp: 30,
        reward: 20
    },
    {
        name: "Mushroom",
        category: 'standard',
        img: mushroom,
        hp: 30,
        reward: 20
    },
    {
        name: "Voodoo Goblin",
        category: 'standard',
        img: voodooGoblin,
        hp: 30,
        reward: 20
    },
    /* Mid-boss */
    {
        name: "Mystic",
        category: 'midBoss',
        img: mystic,
        hp: 100,
        reward: 100
    },
    /* Main boss */
    {
        name: "Bat Queen",
        category: 'boss',
        img: batQueen,
        hp: 300,
        reward: 200
    }
]